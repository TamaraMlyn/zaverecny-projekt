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
              placeholder="Julie"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              label="Příjmení"
              placeholder="Malá"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              placeholder="julie.mala@gmail.com"
              type="email"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              label="Telefonní číslo"
              placeholder="+420*********"
              type="tel"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Heslo"
              placeholder="Minimálně 8 znaků"
              type="password"
              variant="outlined"
              margin="normal"
              classes={{ root: 'text-field' }}
            />
            <TextField
              onChange={(e) => setPasswordCheck(e.target.value)}
              value={passwordCheck}
              label="Heslo znovu"
              placeholder="Minimálně 8 znaků"
              type="password"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setConditions((oldValue) => !oldValue)}
                  checked={conditions}
                  color="primary"
                />
              }
              label="Souhlasím s podmínkami"
              classes={{ root: 'text-field' }}
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
              classes={{ root: 'text-field' }}
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
