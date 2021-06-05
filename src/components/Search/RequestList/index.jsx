import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '../ListItem';

import './style.css';

export const RequestList = () => {
    return (
        <div className="filter__requests">
        <h1 className="header ">Momentálně pomoc hledají tyto osoby: </h1>
        <div className="filter__intro">
          Můžete vybírat z už existujících požadavků od těch, které jsou
          seřazeny dle největší urgence
        </div>
        <ListItem />
        <ListItem />
        <ListItem />

      </div>

    )
}