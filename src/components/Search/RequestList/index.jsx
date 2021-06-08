import React, { useState, useEffect } from 'react';
import { ListItem } from '../ListItem';
import './style.css';
import magnifier from './img/magnifier.svg';
import { usePouch } from 'use-pouchdb';
import {Button} from '../../Button/index';

export const RequestList = ({ search }) => {
  const db = usePouch();
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    if (search === null) {
      setRequests(null);
      return;
    }

    const selector = {
      cityFrom: search.cityFrom,
      cityTo: search.cityTo,
      streetFrom: search.streetFrom,
      dateTimeFrom: { $gte: search.dateTimeFrom },
      dateTimeTo: { $lte: search.dateTimeTo },
    };

    if (!search.experience) {
      selector.experience = false;
    }

    if (!search.strength) {
      selector.strength = false;
    }

    db.find({
      selector: selector,
      // sort: ['dateTimeFrom'],
    }).then((result) => {
      result.docs.sort((first, second) => {
        if (first.dateTimeFrom > second.dateTimeFrom) {
          return 1;
        } else {
          return -1;
        }
      });
      setRequests(result);
    });
  }, [search]);

  return (
    <>
      {search === null || requests === null ? (
        <div className="nolist__requests">
          <h1 className="header--search">
            Vyhledávej přesně podle svých možností
          </h1>
          <img className="img--search" src={magnifier} alt="hledani"/>
          </div>
      ) : requests.docs.length === 0 ? (
        <div className="nolist__requests">
          <h1 className="header--search">
            Evidentně neexistuje momentálně nikdo, kdo by vaší pomoc na základě
            vašich možností potřeboval. Nemůžete v jiný čas, nebo na jiném
            místě?
          </h1>
          <Button className="btn--resize" to="/hledani" text="Hledat znovu"/>
        </div>
      ) : (
        <div className="filter__requests">
          <h1 className="header">Momentálně pomoc hledají tyto osoby: </h1>
          <div className="filter__intro">
            Můžete vybírat z už existujících požadavků od těch, které jsou
            seřazeny dle největší urgence
          </div>

          {requests &&
            requests.docs.map((item) => (
              <ListItem item={item} key={item._id} />
            ))}
        </div>
      )}
    </>
  );
};
