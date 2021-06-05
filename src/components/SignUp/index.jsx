import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './style.css';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  return (
    <>
      <div className="sign-in container">
        <h1 className="h1log">Přihlášení</h1>
        <form>
          <label className="label">
            E-mail
            <input type="email" placeholder="julie.mala@gmail.com" />
          </label>
          <label className="label">
            Heslo
            <input type="password" placeholder="Minimálně 8 znaků" />
          </label>

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
