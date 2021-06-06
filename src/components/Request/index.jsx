import React, { useEffect, useState } from 'react';
import { Button } from '../Button';

import {
  MuiPickersUtilsProvider,
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

export const Request = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [purpose, setPurpose] = useState('');
  const [experience, setExperience] = useState(false);
  const [strength, setStrength] = useState(false);

  useEffect(() => {
    document.title = 'Potřebuji asistenci';
  }, []);

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
        <form>
          <FormGroup>
            <Autocomplete
              id="combo-box-demo"
              options={districts}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
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
                value={timeFrom}
                onChange={(time) => {
                  setTimeFrom(time);
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
                value={timeTo}
                onChange={(time) => {
                  setTimeTo(time);
                }}
                KeyboardButtonProps={{
                  'aria-label': 'výběr času - konec',
                }}
              />
            </FormGroup>

            <TextField label="Účel asistence:" variant="outlined" />

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

            <Button text="Zadat požadavek" />
          </FormGroup>
        </form>
      </div>
    </>
  );
};
