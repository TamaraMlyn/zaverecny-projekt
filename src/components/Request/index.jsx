import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './style.css';

export const Request = () => {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [purpose, setPurpose] = useState('');

  

  useEffect(() => {
    document.title = 'Potřebuji asistenci';
  }, []);

  return (
    <>
      <div className="request">
        <div className="request__description">
          <h1 className="container__header">Potřebuji asistenci</h1>
          <p>
            Najděte si vhodného asistenta na základě svých přesných požadavků.
          </p>
        </div>
        <form>
          <label htmlFor="from" className="label">
            Místo, odkud potřebujete:
          </label>
            <input id="from" type="text" placeholder="Husinecká" />
          <label htmlFor="to" className="label"> 
            Místo, kam potřebujete:
          </label>
            <input id="to" type="text" placeholder="Jindřišská" />
          <label htmlFor="date"  className="label">
            Datum:
          </label>
            <input id="date" type="date" />
          <label htmlFor="timeFrom" className="label">
            Čas od:
          </label>
            <input id="timeFrom" type="time" />
          <label htmlFor="timeTo" className="label">
            Čas do:
          </label>
            <input id="timeTo" type="time" />
          <label htmlFor="purpose" className="label">
            Účel asistence:
          </label>
            <input list="choices" id="purpose" type="text" />
          <datalist id="choices">
           <option value="k lékaři"/>
           <option value="na nákup"/>
           <option value="na úřad"/>
           <option value="na společenskou událost"/>
           <option value="procházka"/>
          </datalist>
            
  
          

          <div className="request__details">
            <h2 className="container__header">Požadavky na asistenta</h2>
            <label htmlFor="experience" className="label label--checkbox">
              Dobrovolník musí mít zkušenosti s asistencí
              <input id="experience" className="input--checkbox" type="checkbox" />
            </label>
            <label htmlFor="strength"  className="label label--checkbox">
              Dobrovolník musí být fyzicky zdatný
              <input id="strength" className="input--checkbox" type="checkbox" />
            </label>
            <label htmlFor="notes"  className="label">
              Vaše poznámky (dopište, co je ještě pro Vás důležité):
              <input id="notes" type="text" />
            </label>
          </div>

          <Button
              // to=""
              text="Zadat požadavek"
            />
        </form>
      </div>
    </>
  );
};
