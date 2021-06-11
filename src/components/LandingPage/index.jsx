import React, { useState } from 'react';
import { Button } from '../Button';
import wheelchair from './img/wheelchair.svg';
import magnifier from './img/magnifier.svg';
import clock from './img/clock.svg';
import { HashLink } from 'react-router-hash-link';
import './style.css';

export const LandingPage = () => {
  const [animationWheelchair, setAnimationWheelchair] = useState(false);
  const [animationVolunteer, setAnimationVolunteer] = useState(false);

  return (
    <div className="landing-page">
      <div className="first-section">
        <div className="intro container">
          <div className="intro__image">
            <svg
              className={
                'image--main ' +
                (animationWheelchair ? 'animate-wheelchair' : '') +
                (animationVolunteer ? 'animate-volunteer' : '')
              }
            >
              {wheelchair}
            </svg>
          </div>

          <div className="intro__content">
            <div className="intro__info">
              <h1 className="container__header header--main">
                Asistence pro lidi na vozíčku
              </h1>
              <p className="intro__text">
                Propojujeme vozíčkáře s dobrovolníky, aby byl pohyb po městě
                jednodušší.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="intro__buttons">
              <Button
                className="main--page"
                to="/potrebuji-asistenci"
                text="Potřebuji asistenci"
                description="Jsem na vozíku a hledám pomoc"
                onMouseEnter={() => setAnimationWheelchair(true)}
                onMouseLeave={() => setAnimationWheelchair(false)}
              />

              <Button
                className="main--page"
                to="/dobrovolnik"
                text="Chci být dobrovolník"
                description="Chci věnovat svůj čas a pomoc"
                onMouseEnter={() => setAnimationVolunteer(true)}
                onMouseLeave={() => setAnimationVolunteer(false)}
              />
            </div>
          </div>
        </div>
        <div className="icon--next-section">
          <HashLink to="/#o-projektu">
            {' '}
            <svg viewBox="0 0 32 32">
              <path d="M7, 8 l9, 9 l9,-9 l4,4 l-13,13 l-13,-13 z" />
            </svg>
          </HashLink>
        </div>
      </div>

      <div className="second-section" id="o-projektu">
        <div className="rules container">
          <h2 className="container__header">Jak propojování funguje?</h2>
          <div className="rules__content">
            <div className="rules__person">
              <img className="person__icon" src={magnifier} alt="ikona lupy" />
              <div className="person__description">
                <h3 className="person__header">Člověk na vozíku</h3>
                <p>
                  Člověk na vozíku zadá svůj konkrétní požadavek s upřesněním
                  datumu, lokality, v jakém časovém intervalu a gpro jaké účely
                  potrebuje pomoc s doprovodem. Na základě požadavku ho pak
                  kontaktuje dobrovolník, který je schopen mu vyhovět.
                </p>
              </div>
            </div>

            <div className="rules__person">
              <img className="person__icon" src={clock} alt="ikona hodin" />
              <div className="person__description">
                <h3 className="person__header">Dobrovolník</h3>
                <p>
                  Dobrovolníkovi se po registraci zpřístupní všechny aktuální
                  požadavky na asistenci a na základě svých možností vybírá,
                  komu může vyhovět a reaguje na poptávku.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about container">
          <div className="about__description">
            <h2 className="container__header">O projektu</h2>
            <p className="about__text">
              Ve vašem městě určitě existují místa, které nejsou úplne
              bezbarierové. I síť městské hromadní dopravy, i když se o to
              snaží, také úplně bezbariérová stále není. A proto dopravit sa na
              určité místo dokáže být pro některé lidi občas problém. Vozíčkáři
              potřebují v těchto situacích asistenci s vozíkem, proto hledají
              pomoc asistentů. A proto vznikl tento projekt.
            </p>
            <p className="about__text">
              Projekt má za cíl usnadnit vozíčkářum najít asistenty, když
              nahodile potřebují pomoc s doprovodem pomocí městské hromadní
              dopravy na konkrétní místo - na domluvenú schůzku, kulturní akci,
              nebo jen tak na procházku. Město dobrovolníky odmění za jejich
              pomoc tím, že jim za určitý počet asistenci bude měnit body za
              kupony na lítačku. Časem může aplikace zběrem dat od uživatelů
              sloužit na lokalizaci nejvíce problematických míst v rámci
              jednotlivých měst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
