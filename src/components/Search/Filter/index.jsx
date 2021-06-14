import React, { useState } from 'react';
import { Button } from '../../Button';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tooltip,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import InputAdornment from '@material-ui/core/InputAdornment';

import './style.css';
import dayjs from '../../../lib/dayjs';

export const Filter = ({ onChange }) => {
  const [date, setDate] = useState(new Date('2021-06-21T13:00:00+02:00'));
  const [timeFrom, setTimeFrom] = useState(
    new Date('2021-06-14T13:00:00+02:00'),
  );
  const [timeTo, setTimeTo] = useState(new Date('2021-06-21T23:00:00+02:00'));
  const [place, setPlace] = useState('Praha 1');
  const [experience, setExperience] = useState(false);
  const [strength, setStrength] = useState(false);

  const actualDate = dayjs();

  const createDateTime = (date, time) => {
    const timeData = dayjs(time);
    return dayjs(date).hour(timeData.hour()).minute(timeData.minute());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (timeFrom > timeTo) {
      alert('Čas ukončení musí být později než čas začátku');
      return;
    }

    if (date === null) {
      alert('Vyplňte prosím položky filtru');
      return;
    } else if (timeFrom === null) {
      alert('Vyplňte prosím položky filtru');
      return;
    } else if (timeTo === null) {
      alert('Vyplňte prosím položky filtru');
      return;
    } else if (place === null) {
      alert('Vyplňte prosím položky filtru');
      return;
    }

    const search = {
      dateTimeFrom: createDateTime(date, timeFrom).toISOString(),
      dateTimeTo: createDateTime(date, timeTo).toISOString(),
      streetFrom: place,
      experience: experience,
      strength: strength,
      cityFrom: 'Praha',
      cityTo: 'Praha',
    };

    onChange(search);
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
            id="date-picker-dialog"
            label="Datum"
            cancelLabel="Zrušit"
            okLabel="Vybrat"
            format="DD.M.YYYY"
            value={date}
            onChange={(date) => {
              setDate(date);
            }}
            KeyboardButtonProps={{
              'aria-label': 'změňte datum',
            }}
            minDate={actualDate.toDate()}
            classes={{ root: 'text-field' }}
            autoOk={true}
          />

          <FormGroup row={true}>
            <KeyboardTimePicker
              id="time-picker"
              label="Čas od:"
              cancelLabel="Zrušit"
              okLabel="Vybrat"
              format="HH:mm"
              ampm={false}
              minutesStep={5}
              value={timeFrom}
              onChange={(time) => {
                setTimeFrom(time);
              }}
              KeyboardButtonProps={{
                'aria-label': 'výběr času - začátek',
              }}
              classes={{ root: 'text-field clock-field-left' }}
              keyboardIcon={<i className="las la-clock"></i>}
              autoOk={true}
            />

            <KeyboardTimePicker
              id="time-picker"
              label="Čas do:"
              cancelLabel="Zrušit"
              okLabel="Vybrat"
              format="HH:mm"
              ampm={false}
              minutesStep={5}
              value={timeTo}
              onChange={(time) => {
                setTimeTo(time);
              }}
              KeyboardButtonProps={{
                'aria-label': 'výběr času - konec',
              }}
              classes={{ root: 'text-field clock-field-right' }}
              keyboardIcon={<i className="las la-clock"></i>}
              autoOk={true}
            />
          </FormGroup>

          <Autocomplete
            id="combo-box-demo"
            options={districts.map((option) => option.name)}
            getOptionLabel={(option) =>
              districts.find((item) => item.name === option).name
            }
            style={{ width: 300 }}
            value={place}
            onChange={(event, value, reason) => {
              setPlace(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Lokalita:" variant="outlined" />
            )}
            classes={{ root: 'text-field' }}
          />

          <div className="checkbox-container">
            <FormControlLabel
              control={
                <Checkbox
                  checked={experience}
                  onChange={(e) => setExperience((oldValue) => !oldValue)}
                  color="primary"
                />
              }
              label="Mám zkušenosti s asistencí"
              classes={{ root: 'text-field' }}
            />
            <i className="icons las la-graduation-cap"></i>
          </div>

          <div className="checkbox-container">
            <Tooltip
              title="Zvládnu manipulaci s těžším vozíkem."
              placement="right"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={strength}
                    onChange={(e) => setStrength((oldValue) => !oldValue)}
                    color="primary"
                  />
                }
                label="Jsem fyzicky zdatný"
                classes={{ root: 'text-field' }}
              />
            </Tooltip>
            <i className="icons las la-dumbbell"></i>
          </div>
        </FormGroup>

        <Button text="Hledat" type="secondary" formType="submit" />
      </form>
    </div>
  );
};
