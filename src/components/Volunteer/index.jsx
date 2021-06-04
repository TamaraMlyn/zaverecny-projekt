import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Volunteer = () => {
  return (
    <div className="volunteer__container">
      <h1 className="header header--main">Chcete se stát dobrovolníkem?</h1>
      <div className="volunteer__intro">
        Ještě předtím, než začněte pomáhat, zaregistujte se!
      </div>
      <div className="volunteer__expect">Co Vás čeká?</div>
      <div className="volunteer__process">
        <div className="volunteer__step">
          <div>1.</div>
          <div>
            Zaregistrujte se v pár jednoduchých krocích a vyplňte si svůj
            profil, který Vás bude dál reprezentovat.
          </div>
        </div>
        <div className="volunteer__step">
          <div>2.</div>
          <div>
            Na základě vaší registrace Vás obratem budeme kontaktovat a doladíme
            spolu další nutné kroky.
          </div>
        </div>
        <div className="volunteer__step">
          <div>3.</div>
          <div>
            Teď už můžete na základě vašich časových možností reagovat na
            konkrétní požadavky.
          </div>
        </div>
      </div>
      <Link to="/registrace">
        <div className="btn btn__volunteer">Chci se zaregistrovat</div>
      </Link>
    </div>
  );
};
