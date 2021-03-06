import React from "react";
import { useParams } from "react-router-dom";
import { useDoc } from "use-pouchdb";
import { Button } from "../Button";
import thick from './img/thick.svg';
import dayjs from "dayjs";
import "dayjs/locale/cs";
import "./style.css";

export const Confirmation = () => {
  const { id } = useParams();
  const { doc } = useDoc(id);

  if (!doc) {
    return <div className="confirmation__container">Údaje se načítají</div>;
  }

  return (
    <div className="confirmation__container">
      <img className="thick--picture" src={thick} alt="thick"/>
      <h1 className="container__header header--main">
        Děkujeme, tvůj požadavek jsme obdrželi.
      </h1>
      <div className="confirmation__text">
        Pro jistotu to ještě shrneme:
        <div className="confirmation__block">
          <div className="confirmation__date">
            Datum: {dayjs(doc.dateTimeFrom).format("D.M.")}
          </div>
          <div className="confirmation__time">
            Čas: {dayjs(doc.dateTimeFrom).format("HH:mm")}–
            {dayjs(doc.dateTimeTo).format("HH:mm")}
          </div>
          <div className="confirmation__location">
            Místo setkání: {doc.streetFrom}
          </div>
        </div>
      </div>
      <div className="confirmation__next">
        <div className="confirmation__next--question">Co se bude dít dál?</div>
        <div  className="confirmation__next--text">
          V případě, že se najde dobrovolník, který bude splňovat tvoje
          požadavky, dáme ti vědět prostřednictvím emailu nebo smsky dle tvých 
          preferencí.
        </div>
        <div className="confirmation__buttons">
        <Button 
        className="btn--resize"
        text="Moje požadavky" 
        formType="submit"/>
        <Button
          className="btn--resize"
          text="Vytvořit další požadavek"
          formType="submit"
          to="/pozadavek"
        />
        </div>
      </div>
    </div>
  );
};
