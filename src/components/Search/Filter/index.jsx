import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Filter = () => {
    return (
        <div className="filter__window">
          <div className="filter__search">Chci vyhledat dle:</div>
          <form>
            <label for="date" id className="label">
              Datum:
            </label>
            <input id="date" type="date" name placeholder="" />
            <label className="label">Časový interval:</label>
            <input id="time" type="text" placeholder="13:30 - 15:30" />
            <label for="location" className="label">
              Lokalita:
            </label>
            <input id="location" type="email" placeholder="Jindřišská" />
            <div className="specific label">
              <div className="requirements">
                <input className="checkbox" type="checkbox" name="podmínky" />
                <label className="label">Zkušenosti s asistencí</label>
              </div>
              <i className="icons las la-hands-helping"></i>
            </div>
  
            <div className="specific label">
              <div className="requirements">
                <input className="checkbox" type="checkbox" name="podmínky" />
                <label className="label">Fyzická zdatnost</label>
              </div>
              <i className="icons dumbell las la-dumbbell"></i>
            </div>
  
            <button className="btn secondary">Hledat</button>
          </form>
        </div>

    )
}