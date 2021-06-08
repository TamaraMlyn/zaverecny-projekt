import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import { RegistrationContext } from '../../lib/RegistrationContext';
import './style.css';

export const Registration = ({ role, text }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [conditions, setConditions] = useState(false);
  const [personalData, setPersonalData] = useState(false);

  const history = useHistory();

  const { registrationState, setRegistrationState } =
    useContext(RegistrationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegistrationState({
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
      passwordCheck: passwordCheck,
      conditions: conditions,
      personalData: personalData,
      role: role,
    });

    history.push(role === 'wheelchair' ? '/pozadavek' : '/hledani');
  };

  return (
    <>
      <div className="registration__container">
        <h1 className="h1log">Zaregistrujte se</h1>
        <div className="registration__text">{text}</div>
        <form className="registration__form" onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Jméno"
              placeholder="Julie"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              required
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              label="Příjmení"
              placeholder="Malá"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              placeholder="julie.mala@gmail.com"
              type="email"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              label="Telefonní číslo"
              placeholder="+420*********"
              type="tel"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
            <TextField
              required
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
              required
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
                  required={true}
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
                  required={true}
                  onChange={() => setPersonalData((oldValue) => !oldValue)}
                  checked={personalData}
                  color="primary"
                />
              }
              label="Souhlasím se zpracováním údajů"
              classes={{ root: 'text-field' }}
            />
          </FormGroup>
          <div className="btn--registration">
            <Button text="Registrovat se" formType="submit" />
            <Button text="Přihlásit se" type="secondary" to="/prihlaseni" />
          </div>
        </form>
      </div>
    </>
  );
};
