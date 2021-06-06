import React from 'react';
import { useParams } from 'react-router-dom';
import { useDoc } from 'use-pouchdb';
import { Button } from '../Button';
import dayjs from 'dayjs';
import 'dayjs/locale/cs';
import './style.css';

export const Confirmation = () => {
  const { id } = useParams();
  const { doc } = useDoc(id);

  if (!doc) {
    return <div className="confirmation__container">Údaje se načítají</div>;
  }

  return (
    <div className="confirmation__container">
      <h1 className="header header--main">
        Děkujeme, Váš požadavek jsme obdrželi.
      </h1>
      <div className="confirmation__text">
        Ještě předtím, než začněte pomáhat, zaregistujte se!
        <div className="confirmation__date">
          Datum: {dayjs(doc.dateTimeFrom).format('D.M.')}
        </div>
        <div className="confirmation__time">
          Čas: {dayjs(doc.dateTimeFrom).format('HH:mm')}–
          {dayjs(doc.dateTimeTo).format('HH:mm')}
        </div>
        <div className="confirmation__location">
          Místo setkání: {doc.streetFrom}
        </div>
      </div>
      <div className="confirmation__next">
        Co se bude dít dál?
        <div>
          V případě, že se najde dobrovolník, který bude splňovat vaše
          požadavky, dáme Vám vědet prostřednictvím emailu nebo smsky dle vašich
          preferencí.
        </div>
        <Button text="Zpátky domů" formType="submit" to="/" />
        <Button
          text="Vytvořit další požadavek"
          formType="submit"
          to="/pozadavek"
        />
      </div>
    </div>
  );
};
