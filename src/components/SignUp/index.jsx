import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { TextField, FormGroup } from '@material-ui/core';
import { RegistrationContext } from './../../lib/RegistrationContext';

import './style.css';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { registrationState, setRegistrationState } =
    useContext(RegistrationContext);

  const history = useHistory();

  const handleOnClick = (e) => {
    if (email.includes('seznam')) {
      console.log('funguju');
      history.push('/pozadavek');
    } else {
      history.push('/hledani');
    }

    setRegistrationState({ email: email });
  };

  return (
    <>
      <div className="sign-in container">
        <h1 className="h1log">Přihlášení</h1>
        <form className="sign-in__form">
          <FormGroup>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              type="email"
              placeholder="julie.mala@gmail.com"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />

            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Heslo"
              type="password"
              variant="outlined"
              classes={{ root: 'text-field' }}
            />
          </FormGroup>

          <Button
            onClick={handleOnClick}
            text="Přihlásit se"
            // to={
            //   registrationState.role === 'wheelchair'
            //     ? '/pozadavek'
            //     : '/hledani'
            // }
          />
          <Button
            to="/registrace/dobrovolnik"
            type="secondary"
            text="Registrovat se"
          />
        </form>
      </div>
    </>
  );
};
