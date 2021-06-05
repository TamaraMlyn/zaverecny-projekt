import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './style.css';

export const Registration = ({ type, text }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [conditions, setConditions] = useState(false);
  const [personalData, setPersonalData] = useState(false);

  return (
    <>
      <div className="registration__container">
        <h1 className="h1log">Zaregistrujte se</h1>
        <div className="registration__intro">{text}</div>
        <form>
          <label className="label">
            Jméno:
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Julie"
            />
          </label>
          <label className="label">
            Příjmení:
            <input
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              type="text"
              placeholder="Malá"
            />
          </label>
          <label className="label">
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="julie.mala@gmail.com"
            />
          </label>
          <label className="label">
            Telefonní číslo:
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              placeholder="+420*********"
            />
          </label>
          <label className="label">
            Heslo:
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Minimálně 8 znaků"
            />
          </label>
          <label className="label">
            Heslo znovu:
            <input
              onChange={(e) => setPasswordCheck(e.target.value)}
              value={passwordCheck}
              type="password"
              placeholder="Minimálně 8 znaků"
            />
          </label>
          <label className="label label__checkbox">
            <input
              onChange={() => setConditions((oldValue) => !oldValue)}
              checked={conditions}
              className="checkbox"
              type="checkbox"
              name="podmínky"
            />
            Souhlasím s obchodními podmínkami
          </label>
          <label className="label label__checkbox">
            <input
              onChange={() => setPersonalData((oldValue) => !oldValue)}
              checked={personalData}
              className="checkbox"
              type="checkbox"
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
