import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Request = () => {
  return (
    <div className="request">
      <div className="request__description">
        <h1 className="container__header">Potřebuji asistenci</h1>
        <p>
          Najděte si vhodného asistenta na základě svých přesných požadavků.
        </p>
      </div>
      <form>
        <label className="label">
          Místo, odkud potřebujete:
          <input type="text" placeholder="Husinecká" />
        </label>
        <label className="label">
          Místo, kam potřebujete:
          <input type="text" placeholder="Jindřišská" />
        </label>
        <label className="label">
          Datum:
          <input type="date" />
        </label>
        <label className="label">
          Čas od:
          <input type="time" />
        </label>
        <label className="label">
          Čas do:
          <input type="time" />
        </label>

        <div className="request__details">
          <h2 className="container__header">Požadavky na asistenta</h2>
          <label className="label label--checkbox">
            Dobrovolník musí mít zkušenosti s asistencí
            <input className="input--checkbox" type="checkbox" />
          </label>
          <label className="label label--checkbox">
            Dobrovolník musí být fyzicky zdatný
            <input className="input--checkbox" type="checkbox" />
          </label>
          <label className="label">
            Vaše poznámky (dopište, co je ještě pro Vás důležité):
            <input type="text" />
          </label>
        </div>

        <div className="btn btn--form">Zadat požadavek</div>
      </form>
    </div>
  )
};
