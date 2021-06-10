import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import dayjs from '../../lib/dayjs';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
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
  const actualDate = dayjs();

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState(actualDate.toDate());
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

  const history = useHistory();

  const minDate = () => {
    if (timeTo < timeFrom) {
      return 'špatně!!';
    }
  };

  const handleSubmit = (e) => {
    console.log(registrationState);
    e.preventDefault();

    if (timeFrom > timeTo) {
      alert('Čas ukončení musí být později než čas začátku');
      return;
    }

    const request = {
      name: registrationState.name,
      surname: registrationState.surname.slice(0, 1) + '.',
      cityFrom: 'Praha',
      streetFrom: from,
      cityTo: 'Praha',
      streetTo: to,
      dateTimeFrom: createDateTime(date, timeFrom).toISOString(),
      dateTimeTo: createDateTime(date, timeTo).toISOString(),
      purpose: purpose,
      experience: experience,
      strength: strength,
      notes: notes,
    };

    db.post(request)
      .then((response) => {
        console.log(response);
        history.push(`/pozadavek/potvrzeni/${response.id}`);
      })
      .catch((err) => console.error(err));
  };

  const districts = [
    'Praha 1',
    'Praha 2',
    'Praha 3',
    'Praha 4',
    'Praha 5',
    'Praha 6',
    'Praha 7',
    'Praha 8',
    'Praha 9',
    'Praha 10',
  ];

  const purposes = [
    'Návštěva lékaře',
    'Nákup',
    'Cesta na úřad',
    'Cesta na společenskou událost',
    'Procházka',
    'Jiné',
  ];

  return (
    <>
      <div className="request">
        <div className="request__description">
          <h1 className="container__header">Potřebuji asistenci</h1>
          <div className="request__intro" >
            Najdi si vhodného asistenta na základě přesných požadavků!
          </div>
        </div>
        <form className="request__form" onSubmit={handleSubmit}>
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
                  label="Místo, odkud potřebuješ:"
                  variant="outlined"
                />
              )}
              classes={{ root: 'text-field' }}
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
                  label="Místo, kam potřebuješ:"
                  variant="outlined"
                />
              )}
              classes={{ root: 'text-field' }}
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
                'aria-label': 'změň datum',
              }}
              cancelLabel="Zrušit"
              okLabel="Vybrat"
              invalidDateMessage="Špatný formát"
              minDate={actualDate.toDate()}
              classes={{ root: 'text-field' }}
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
                cancelLabel="Zrušit"
                okLabel="Vybrat"
                keyboardIcon={<i className="las la-clock"></i>}
                classes={{ root: 'clock-field' }}
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
                cancelLabel="Zrušit"
                okLabel="Vybrat"
                minDateMessage={minDate()}
                keyboardIcon={<i className="las la-clock"></i>}
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
              classes={{ root: 'text-field' }}
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
                classes={{ root: 'text-field' }}
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
                classes={{ root: 'text-field' }}
              />

              <TextField
                label="Poznámky"
                placeholder="Tvoje poznámky (dopiš, co je ještě pro tebe důležité):"
                variant="outlined"
                multiline
                rows={5}
                classes={{ root: 'text-field notes' }}
              />
            </div>

            <Button text="Zadat požadavek" formType="submit" />
          </FormGroup>
        </form>
      </div>
    </>
  );
};
