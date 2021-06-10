import React, { useEffect } from "react";
import { Button } from "../Button";
import "./style.css";
import form from "./img/form.png";
import thick from "./img/thick.png";
import timeplace from "./img/timeplace.png";

export const Wheelchair = () => {
  useEffect(() => {
    document.title = "Potřebuji asistenci";
  }, []);

  return (
    <>
      <div className="volunteer__main--container">
        <div className="volunteer__container">
          <h1 className="header header--main">
            Hledáš dobrovolníka jako doprovod?
          </h1>
          <div className="volunteer__intro">
            S Dobrovozíkem je to strašně jednoduché!
          </div>
          <div className="volunteer__expect">Jak na to?</div>
          <div className="volunteer__process">
            <div className="volunteer__step">
              <div>
                <img className="volunteer__step--form" src={form} alt="form" />
              </div>
              {/* <div><i className="icons--flow lab la-wpforms"></i></div> */}
              <div className="volunteer__step--text">
                Nejdřív se na stránce zaregistruj, můžeš si pak vytvořit svůj
                medajlónek s informacemi o sobě, o svých zájmech.
              </div>
            </div>
            <div className="volunteer__step">
              <div>
                <img
                  className="volunteer__step--timeplace"
                  src={timeplace}
                  alt="timeplace"
                />
              </div>
              {/* <div><i className="icons--flow las la-praying-hands"></i></div> */}
              <div className="volunteer__step--text">
                Hned po registraci se ti naskytne možnost zadat první požadavek
                dle toho, kdy a kde asistenci potřebuješ.
              </div>
            </div>
            <div className="volunteer__step">
              <div>
                <img
                  className="volunteer__step--thick"
                  src={thick}
                  alt="thick"
                />
              </div>
              {/* <div><i className="icons--flow las la-smile-beam"></i></div> */}
              <div className="volunteer__step--text">
                Požadavek se hned začne zobrazovat dobrovolníkům a akonáhle se
                nájde někdo, v koho možnostech bude ti pomoct, bude tě
                kontaktovat.
              </div>
            </div>
          </div>
          <Button
            className="btn--resize"
            to="/registrace/vozickar"
            text="Chci se registrovat"
          />
        </div>
      </div>
    </>
  );
};
