import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const ListItem = () => {
    return (
        <div className="filter__request">
          <div className="filter__row">
            <i className="user__icon las la-user-circle"></i>
            <div className="filter__name">Anna S.</div>
          </div>
          <div className="filter__row">
            <div className="filter__row--first">Účel:</div>
            <div className="filter__row--second">Procházka</div>
          </div>
          <div className="filter__row">
            <div className="filter__row--first">Od-do:</div>
            <div className="filter__row--second"> 13:30 - 14:30 </div>
          </div>
          <div className="filter__row">
            <div className="specific filter__row--first"> Požadavky:</div>
            <div className="filter__row--second">
              <i className="icons dumbell las la-dumbbell"></i>{" "}
            </div>
          </div>
          <div className="btn primary">Kontaktovat</div>
        </div>
    )
}