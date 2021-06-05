import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = (e) => {
    setMenuOpen(true);
    e.stopPropagation();
  };

  useEffect(
    () => document.body.addEventListener('click', () => setMenuOpen(false)),
    [],
  );

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

          <li className="menu-item">
            <Link to="/prihlaseni">Přihlášení</Link>
          </li>

          <li className="menu-item sign-up">
            <Link to="/registrace">Registrace</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
