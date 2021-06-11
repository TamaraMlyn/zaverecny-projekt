import React from 'react';
import { Button } from '../../Button';
import dayjs from '../../../lib/dayjs';
import './style.css';

export const ListItem = ({ item }) => {
  return (
    <div className="filter__request">
      <div className="filter__row">
        <i className="user__icon las la-user-circle"></i>
        <div className="filter__name">
          {item.name} {item.surname}
        </div>
      </div>
      <div className="filter__row purpose">
        <div className="filter__row--first">Účel:</div>
        <div className="filter__row--second">{item.purpose}</div>
      </div>
      <div className="filter__row">
        <div className="filter__row--first">
          {dayjs(item.dateTimeFrom).format('D. M.')}
        </div>
        <div className="filter__row--second">
          {dayjs(item.dateTimeFrom).format('H:mm')}–{dayjs(item.dateTimeTo).format('H:mm')}
        </div>
      </div>

      <div className="filter__row">
        <div className="specific filter__row--first"> Požadavky:</div>
        <div className="filter__row--second">
          {!item.experience && !item.strength && <div>Žádné</div>}
         {item.experience &&  <i className="icons las la-graduation-cap"></i>}
         {item.strength &&  <i className="icons las la-dumbbell"></i>}
        </div>
      </div>
      <Button
        className="btn__item"
        text="Kontaktovat"
      />
    </div>
  );
};
