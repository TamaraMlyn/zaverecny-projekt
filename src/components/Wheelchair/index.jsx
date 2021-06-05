import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './style.css';

export const Wheelchair = () => {
  useEffect(() => {
    document.title = 'Potřebuji asistenci';
  }, []);

  return (
    <>
      <div className="volunteer__container">
        <h1 className="header header--main">Potřebujete asistenci?</h1>
        <div className="volunteer__intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cum.
        </div>
        <div className="volunteer__expect">Co Vás čeká?</div>
        <div className="volunteer__process">
          <div className="volunteer__step">
            <div>1.</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              alias!
            </div>
          </div>
          <div className="volunteer__step">
            <div>2.</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              praesentium?
            </div>
          </div>
          <div className="volunteer__step">
            <div>3.</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              mollitia!
            </div>
          </div>
        </div>
        <Button to="/registrace/vozickar" text="Chci se registrovat" />
      </div>
    </>
  );
};
