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
import './style.css';
import dayjs from '../../../lib/dayjs';

export const Filter = ({ onChange }) => {
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [place, setPlace] = useState(null);
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
            format="D.M.YYYY"
            value={date}
            onChange={(date) => {
              setDate(date);
            }}
            KeyboardButtonProps={{
              'aria-label': 'změňte datum',
            }}
            minDate={actualDate.toDate()}
            classes={{ root: 'text-field' }}
          />

          <FormGroup row={true}>
            <KeyboardTimePicker
              id="time-picker"
              label="Čas od:"
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
            />

            <KeyboardTimePicker
              id="time-picker"
              label="Čas do:"
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

          <div>
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
          </div>

          <div className="checkbox-container">
            <Tooltip title="Zvládnu manipulaci s těžším vozíkem.">
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
          </div>
        </FormGroup>

        <Button text="Hledat" type="secondary" formType="submit" />
      </form>
    </div>
  );
};
