import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Link } from 'react-router-dom';
import './style.css';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  return (
    <>
      <Header />
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
          <Link to="/" className="btn primary">
            Přihlásit se
          </Link>
        </form>
        <div className="btn--registration">
          <Link to="/registrace" className="btn secondary">
            Registrovat se
          </Link>
        </div>
      </div>
    </>
  );
};
