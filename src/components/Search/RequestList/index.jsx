import React, { useState, useEffect } from "react";
import { ListItem } from "../ListItem";
import "./style.css";
import { useFind } from "use-pouchdb";

export const RequestList = ({ search }) => {
  console.log(search)
  //  const [requests, setRequests] = useState(null);
  let requests;
  //  useEffect(() => {
  if (search === null) {
    requests = null;
  } else {
    requests = useFind({
      index: {
        fields: ["cityFrom", "cityTo", "streetFrom", "dateTimeFrom", "dateTimeTo"],
      },
      selector: {
        cityFrom: search.cityFrom,
        cityTo: search.cityTo,
        streetFrom: search.streetFrom,        
        dateTimeFrom: {$gte: search.dateTimeFrom},
        dateTimeTo: {$lte: search.dateTimeTo},
        // experience: search.experience,
        // strength: search.strength,
      },
      // sort: ['dateTimeFrom'],
    });
    //    setRequests(db)
  }
  //}, [search]);

  return (
    <div className="filter__requests">
      <h1 className="header ">Momentálně pomoc hledají tyto osoby: </h1>
      <div className="filter__intro">
        Můžete vybírat z už existujících požadavků od těch, které jsou seřazeny
        dle největší urgence
      </div>

      {requests &&
        requests.docs.map((item) => <ListItem item={item} key={item._id} />)}
    </div>
  );
};