import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './style.css';

export const Registration = ({type, text}) => {
  return (
    <>
      <div className="registration__container">
        <h1 className="h1log">Zaregistrujte se</h1>
        <div className="registration__intro">{text}</div>
        <form>
          <label className="label">
            Jméno:
            <input type="text" placeholder="Julie" />
          </label>
          <label className="label">
            Příjmení:
            <input type="text" placeholder="Malá" />
          </label>
          <label className="label">
            Email:
            <input type="email" placeholder="julie.mala@gmail.com" />
          </label>
          <label className="label">
            Telefonní číslo:
            <input type="number" placeholder="+420*********" />
          </label>
          <label className="label">
            Heslo:
            <input type="password" placeholder="Minimálně 8 znaků" />
          </label>
          <label className="label">
            Heslo znovu:
            <input type="password" placeholder="Minimálně 8 znaků" />
          </label>
          <label className="label label__checkbox">
            <input
              className="checkbox"
              type="checkbox"
              checked
              name="podmínky"
            />
            Souhlasím s obchodními podmínkami
          </label>
          <label className="label label__checkbox">
            <input
              className="checkbox"
              type="checkbox"
              checked
              name="podmínky"
            />
            Souhlasím se zpracováním údajů
          </label>
          <div type="submit" className="btn primary">
            <Button text="Registrovat se" />
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