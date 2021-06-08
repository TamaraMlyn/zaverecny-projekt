import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RegistrationContext } from './../../lib/RegistrationContext';
import './style.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { registrationState, setRegistrationState } =
    useContext(RegistrationContext);

  useEffect(
    () => document.body.addEventListener('click', () => setMenuOpen(false)),
    [],
  );

  const handleOnClick = (e) => {
    setMenuOpen(true);
    e.stopPropagation();
  };

  const handleSignOut = () => {
    setRegistrationState(null);
  };

  return (
    <header className="header">
      <div className={menuOpen ? 'topbar topbar--opened' : 'topbar'}>
        <Link to="/">Dobrovozík</Link>
        <span className="hamburger" onClick={handleOnClick}></span>
      </div>

      <nav
        className={menuOpen ? 'navigation navigation--opened' : 'navigation'}
      >
        <ul className="menu-items">
          <li className="menu-item">
            <HashLink to="/#o-projektu">O projektu</HashLink>
          </li>

          {registrationState === null ? (
            <>
              <li className="menu-item">
                <Link to="/prihlaseni">Přihlášení</Link>
              </li>

              <li className="menu-item sign-up">
                <Link to="/registrace/dobrovolnik">Registrace</Link>
              </li>
            </>
          ) : registrationState.role === 'wheelchair' ? (
            <>
              <li className="menu-item">
                <Link to="/">Seznam požadavků</Link>
              </li>
              <li className="menu-item sign-up">
                <Link onClick={handleSignOut} to="/">
                  Odhlásit se
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item sign-up">
                <Link onClick={handleSignOut} to="/">
                  Odhlásit se
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
