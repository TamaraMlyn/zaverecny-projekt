import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '../ListItem';
import './style.css';

const wheelchairUsers = [
  {
    name: 'Anna',
    surname: 'S.',
    cityFrom: 'Praha',
    streetFrom: 'Husinecká',
    cityTo: 'Praha',
    streetFrom: 'Jindřišská',
    dateTimeFrom: '2021-06-20T10:00:00',
    dateTimeTill: '2021-06-20T13:00:00',
    purpose: 'Procházka',
    experience: false,
    strength: true,
  },
  {
    name: 'Jana',
    surname: 'S.',
    cityFrom: 'Praha',
    streetFrom: 'Vinohradská',
    cityTo: 'Praha',
    streetFrom: 'Plzeňská',
    dateTimeFrom: '2021-06-20T10:00:00',
    dateTimeTill: '2021-06-20T13:00:00',
    purpose: 'Návštěva lékaře',
    experience: true,
    strength: true,
  },
  {
    name: 'Franišek',
    surname: 'S.',
    cityFrom: 'Praha',
    streetFrom: 'Budějovická',
    cityTo: 'Praha',
    streetFrom: 'Michelská',
    dateTimeFrom: '2021-06-20T10:00:00',
    dateTimeTill: '2021-06-20T13:00:00',
    purpose: 'Úřad',
    experience: false,
    strength: false,
  },
];

export const RequestList = () => {
  const [requestList, setRequestList] = useState(wheelchairUsers);

  return (
    <div className="filter__requests">
      <h1 className="header ">Momentálně pomoc hledají tyto osoby: </h1>
      <div className="filter__intro">
        Můžete vybírat z už existujících požadavků od těch, které jsou seřazeny
        dle největší urgence
      </div>

      {requestList.map((item) => (
        <ListItem item={item} key={item.name}/>
      ))}
    </div>
  );
};
