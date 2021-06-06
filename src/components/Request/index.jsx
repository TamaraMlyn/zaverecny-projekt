import React, { useEffect, useState } from 'react';
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

import './style.css';
import { usePouch } from 'use-pouchdb';


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

  const db = usePouch()

  useEffect(() => {
    document.title = 'Potřebuji asistenci';
  }, []);

  const createDateTime = (date, time) => {
  const timeData = dayjs(time)
  return dayjs(date).hour(timeData.hour()).minute(timeData.minute())
  }

  const handleSubmit = (e) => {
    console.log('funguju');
    e.preventDefault();

    const request = {
    name: 'Anna',
    surname: 'S.',
    cityFrom: 'Praha',
    streetFrom: from.name,
    cityTo: 'Praha',
    streetFrom: to.name,
    dateTimeFrom: createDateTime(date, timeFrom).toISOString(),
    dateTimeTill: createDateTime(date, timeTo).toISOString(),
    purpose: purpose.name,
    experience: false,
    strength: false,
    notes: notes,
    }

    db.post(request)
    .then((response)=> console.log(response))
    .catch((err)=> console.error(err))

  
  }


  const districts = [
    { name: 'Praha 1' },
    { name: 'Praha 2' },
    { name: 'Praha 3' },
    { name: 'Praha 4' },
    { name: 'Praha 5' },
    { name: 'Praha 6' },
    { name: 'Praha 7' },
    { name: 'Praha 8' },
    { name: 'Praha 9' },
    { name: 'Praha 10' },
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
              id="combo-box-demo"
              options={districts}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              value={from}
              onChange={(event, value, reason ) => {
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
              id="combo-box-demo"
              options={districts}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              value={to}
              onChange={(event, value, reason ) => {
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
              options={districts}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              value={purpose}
              onChange={(event, value, reason ) => {
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

          

            {/* <input list="choices" id="purpose" type="text" />
          <datalist id="choices">
            <option value="k lékaři" />
            <option value="na nákup" />
            <option value="na úřad" />
            <option value="na společenskou událost" />
            <option value="procházka" />
          </datalist> */}

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

            <Button text="Zadat požadavek" 
            formType="submit"
            />
          </FormGroup>
        </form>
      </div>
    </>
  );
};
