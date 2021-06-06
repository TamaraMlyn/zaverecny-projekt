import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { TextField, FormGroup } from '@material-ui/core';
import './style.css';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="sign-in container">
        <h1 className="h1log">Přihlášení</h1>
        <form>
          <FormGroup>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              type="email"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Heslo"
              type="password"
              variant="outlined"
            />
          </FormGroup>

          <Button text="Přihlásit se" />
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
