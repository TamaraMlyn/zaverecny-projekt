import React, { useState } from 'react';
import { ListItem } from '../ListItem';
import './style.css';
import { useAllDocs } from 'use-pouchdb'

export const RequestList = () => {

  const db = useAllDocs({
    include_docs: true,
  })

  console.log(db)

  return (
    <div className="filter__requests">
      <h1 className="header ">Momentálně pomoc hledají tyto osoby: </h1>
      <div className="filter__intro">
        Můžete vybírat z už existujících požadavků od těch, které jsou seřazeny
        dle největší urgence
      </div>

      {db.rows.map((item) => (
        <ListItem item={item.doc} key={item.id}/>
      ))}
    </div>
  );
};
