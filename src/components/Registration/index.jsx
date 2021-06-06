import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './style.css';
import { useCallback } from 'react';
import { usePouch } from 'use-pouchdb';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';

export const Registration = ({ type, text }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [conditions, setConditions] = useState(false);
  const [personalData, setPersonalData] = useState(false);
  const db = usePouch();

  const handleSubmit = (e) => {
    console.log('funguju');
    e.preventDefault();

    const registration = {
      // type: 'todo',
      // text: input,
      // done: false,
    };

    db.post(registration);
  };

  return (
    <>
      <div className="registration__container">
        <h1 className="h1log">Zaregistrujte se</h1>
        <div className="registration__intro">{text}</div>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Jméno"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              label="Příjmení"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              type="email"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              label="Telefonní číslo"
              type="tel"
              variant="outlined"
            />
            <TextField label="Heslo" type="password" variant="outlined" />
            <TextField label="Heslo znovu" type="password" variant="outlined" />

            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setConditions((oldValue) => !oldValue)}
                  checked={conditions}
                  color="primary"
                />
              }
              label="Souhlasím s podmínkami"
            />

            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setPersonalData((oldValue) => !oldValue)}
                  checked={personalData}
                  color="primary"
                />
              }
              label="Souhlasím se zpracováním údajů"
            />
          </FormGroup>

          <div type="submit" className="btn primary">
            <Button text="Registrovat se" formType="submit" />
          </div>
        </form>
        <div className="registration__account-created">
          Už máte účet?
          <Link to="/prihlaseni">Přihlásit se</Link>
        </div>
      </div>
    </>
  );
};
