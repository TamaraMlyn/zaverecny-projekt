import React, { useState } from 'react';
import { Button } from '../../Button';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import './style.css';

export const Filter = () => {
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [place, setPlace] = useState('');
  const [experience, setExperience] = useState(false);
  const [strength, setStrength] = useState(false);

  const handleSubmit = (e) => {
    console.log('funguju');
    e.preventDefault();

    const search = {
      date: date,
      timefrom: timeFrom,
      timeTo: timeTo,
      place: place,
      experience: experience,
      strength: strength,
    };

    console.log(search);
  };

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
    <div className="filter__window">
      <div className="filter__search">Chci vyhledat dle:</div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
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

          <Autocomplete
            id="combo-box-demo"
            options={districts}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Lokalita:" variant="outlined" />
            )}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={experience}
                onChange={(e) => setExperience((oldValue) => !oldValue)}
                color="primary"
                icon={<i className="icons las la-hands-helping"></i>}
                checkedIcon={<i className="icons las la-hands-helping"></i>}
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
                icon={<i className="icons dumbell las la-dumbbell"></i>}
                checkedIcon={<i className="icons dumbell las la-dumbbell"></i>}
              />
            }
            label="Dobrovolník musí být fyzicky zdatný"
          />
        </FormGroup>

        <Button text="Hledat" type="secondary" formType="submit" />
      </form>
    </div>
  );
};
