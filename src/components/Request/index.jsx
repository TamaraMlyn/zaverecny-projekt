import React, { useEffect, useState, useContext } from 'react';
import { Button } from '../Button';
import dayjs from '../../lib/dayjs';
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { RegistrationContext } from '../../lib/RegistrationContext';
import { usePouch } from 'use-pouchdb';
import './style.css';

export const Request = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [experience, setExperience] = useState(false);
  const [strength, setStrength] = useState(false);
  const [notes, setNotes] = useState('');

  const db = usePouch();

  useEffect(() => {
    document.title = 'Potřebuji asistenci';
  }, []);
  
  const createDateTime = (date, time) => {
    const timeData = dayjs(time);
    return dayjs(date).hour(timeData.hour()).minute(timeData.minute());
  };

  const { registrationState, setRegistrationState } =
    useContext(RegistrationContext);

  const handleSubmit = (e) => {
    console.log(registrationState);
    e.preventDefault();

    const request = {
      name: registrationState.name,
      surname: registrationState.surname.slice(0, 1) + '.',
      cityFrom: 'Praha',
      streetFrom: from.name,
      cityTo: 'Praha',
      streetFrom: to.name,
      dateTimeFrom: createDateTime(date, timeFrom).toISOString(),
      dateTimeTo: createDateTime(date, timeTo).toISOString(),
      purpose: purpose,
      experience: false,
      strength: false,
      notes: notes,
    };

    db.post(request)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const districts = [
     'Praha 1' ,
     'Praha 2' ,
     'Praha 3' ,
     'Praha 4' ,
     'Praha 5' ,
     'Praha 6' ,
     'Praha 7' ,
     'Praha 8' ,
     'Praha 9' ,
     'Praha 10',
  ];

  const purposes = [
     'k lékaři' ,
     'na nákup' ,
     'na úřad' ,
     'na společenskou událost' ,
     'procházka' ,
  ];

  return (
    <>
      <div className="request">
        <div className="request__description">
          <h1 className="container__header">Potřebuji asistenci</h1>
          <p>
            Najděte si vhodného asistenta na základě svých přesných požadavků.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Autocomplete
              options={districts}
              style={{ width: 300 }}
              value={from}
              onChange={(event, value, reason) => {
                setFrom(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Místo, odkud potřebujete:"
                  variant="outlined"
                />
              )}
            />

            <Autocomplete
              options={districts}
              style={{ width: 300 }}
              value={to}
              onChange={(event, value, reason) => {
                setTo(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Místo, kam potřebujete:"
                  variant="outlined"
                />
              )}
            />

            <KeyboardDatePicker
              id="date"
              margin="normal"
              id="date-picker-dialog"
              label="Datum"
              format="D.M.YYYY"
              value={date}
              onChange={(date) => {
                setDate(date);
              }}
              KeyboardButtonProps={{
                'aria-label': 'změňte datum',
              }}
            />
            <FormGroup row={true}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Čas od:"
                format="HH:mm"
                ampm={false}
                minutesStep={5}
                value={timeFrom}
                onChange={(date) => {
                  setTimeFrom(date);
                }}
                KeyboardButtonProps={{
                  'aria-label': 'výběr času - začátek',
                }}
              />

              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Čas od:"
                format="HH:mm"
                ampm={false}
                minutesStep={5}
                value={timeTo}
                onChange={(date) => {
                  setTimeTo(date);
                }}
                KeyboardButtonProps={{
                  'aria-label': 'výběr času - konec',
                }}
              />
            </FormGroup>

            <Autocomplete
              options={purposes}
              style={{ width: 300 }}
              value={purpose}
              onChange={(event, value, reason) => {
                setPurpose(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Účel asistence:"
                  variant="outlined"
                />
              )}
            />

            <div className="request__details">
              <h2 className="container__header">Požadavky na asistenta</h2>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={experience}
                    onChange={(e) => setExperience((oldValue) => !oldValue)}
                    color="primary"
                  />
                }
                label="Dobrovolník musí mít zkušenosti s asistencí"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={strength}
                    onChange={(e) => setStrength((oldValue) => !oldValue)}
                    color="primary"
                  />
                }
                label="Dobrovolník musí být fyzicky zdatný"
              />

              <TextField
                label="Vaše poznámky (dopište, co je ještě pro Vás důležité):"
                variant="outlined"
              />
            </div>

            <Button
              text="Zadat požadavek"
              formType="submit"
              to="/pozadavek/potvrzeni"
            />
          </FormGroup>
        </form>
      </div>
    </>
  );
};
