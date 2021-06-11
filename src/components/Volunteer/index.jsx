import React, { useEffect } from 'react';
import { Button } from '../Button';
import './style.css';
import form from "./img/form.svg";
import contact from "./img/contact.svg";
import ready from "./img/ready.svg";

export const Volunteer = () => {
  useEffect(() => {
    document.title = 'Chci být dobrovolník';
  }, []);

  return (
    <>
      <div className="volunteer__container">
        <h1 className="header header--main">Chcete se stát dobrovolníkem?</h1>
        <div className="volunteer__intro">
          Ještě předtím, než začneš pomáhat, zaregistuj se!
        </div>
        <div className="volunteer__expect">Co tě čeká?</div>
        <div className="volunteer__process">
          <div className="volunteer__step">
              <div>
                <img className="volunteer__step--image" 
                src={form} 
                alt="form" />
              </div>
            {/* <div><i className="icons--flow lab la-wpforms"></i></div> */}
            <div className="volunteer__step--text">
              Zaregistruj se v pár jednoduchých krocích a vyplň si svůj
              profil, který tě bude dál reprezentovat.
            </div>
          </div>
          <div className="volunteer__step">
              <div>
                <img className="volunteer__step--image" 
                src={contact} 
                alt="contact" />
              </div>
            {/* <div><i className="icons--flow las la-envelope-open-text"></i></div> */}
            <div className="volunteer__step--text">
              Na základě registrace tě obratem budeme kontaktovat a
              doladíme spolu další nutné kroky.
            </div>
          </div>
          <div className="volunteer__step">
          <div>
                <img
                  className="volunteer__step--image"
                  src={ready}
                  alt="ready"
                />
              </div>
            {/* <div><i className="icons--flow las la-smile-beam"></i></div> */}
            <div className="volunteer__step--text">
              Teď už můžeš na základě svých časových možností reagovat na
              konkrétní požadavky. Začínáš dobrovolničit!:)
            </div>
          </div>
        </div>

        <Button className="btn--resize" to="/registrace/dobrovolnik" text="Chci se registrovat" />
      </div>
    </>
  );
};
