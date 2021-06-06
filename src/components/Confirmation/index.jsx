import React from 'react';
import { Button } from '../Button';
import './style.css';

export const Confirmation = () => {
  return (
    <div class="confirmation__container">
      <h1 class="header header--main">
        Děkujeme, Váš požadavek jsme obdrželi.
      </h1>
      <div class="confirmation__text">
        Ještě předtím, než začněte pomáhat, zaregistujte se!
        <div class="confirmation__date">Datum: 15.6.2021</div>
        <div class="confirmation__time">Čas: 10:00 - 14:00</div>
        <div class="confirmation__location">
          Místo setkání: Husinecká, Praha 3
        </div>
      </div>
      <div class="confirmation__next">
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
