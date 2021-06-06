import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';

import './style.css';

export const Filter = () => {
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTill, setTimeTill] = useState('');
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState(false);
  const [strength, setStrength] = useState(false);

  const handleSubmit = (e) => {
    console.log('funguju');
    e.preventDefault();

    const search = {
      date: date,
      timefrom: timeFrom,
      timeTill: timeTill,
      place: place,
      experience: experience,
      strength: strength,
    };

    console.log(search);
  };

  return (
    <div className="filter__window">
      <div className="filter__search">Chci vyhledat dle:</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date" className="label">
          Datum:
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          id="date"
          type="date"
          placeholder=""
        />
        <label htmlFor="time" className="label">
          Od:
        </label>
        <input
          onChange={(e) => setTimeFrom(e.target.value)}
          value={timeFrom}
          id="time"
          type="time"
        />
        <label htmlFor="time" className="label">
          Do:
        </label>
        <input
          onChange={(e) => setTimeTill(e.target.value)}
          value={timeTill}
          id="time"
          type="time"
        />
        <label htmlFor="location" className="label">
          Lokalita:
        </label>
        <input
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          id="location"
          type="text"
          placeholder="Jindřišská"
        />
        <div className="specific label">
          <div className="requirements">
            <input
              onChange={(e) => setExperience((oldValue) => !oldValue)}
              checked={experience}
              className="checkbox"
              id="experience"
              type="checkbox"
              name="zkušenosti"
            />
            <label htmlFor="experience" className="label">
              Zkušenosti s asistencí
            </label>
          </div>
          <i className="icons las la-hands-helping"></i>
        </div>

        <div className="specific label">
          <div className="requirements">
            <input
              onChange={() => setStrength((oldValue) => !oldValue)}
              checked={strength}
              className="checkbox"
              id="strength"
              type="checkbox"
              name="zdatnost"
            />
            <label htmlFor="strength" className="label">
              Fyzická zdatnost
            </label>
          </div>
          <i className="icons dumbell las la-dumbbell"></i>
        </div>

        <Button text="Hledat" type="secondary" formType="submit" />
      </form>
    </div>
  );
};
