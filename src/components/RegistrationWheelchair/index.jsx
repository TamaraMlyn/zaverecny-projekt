import React, { useEffect } from 'react';
import { Registration } from '../Registration';
import './style.css';

export const RegistrationWheelchair = () => {
  useEffect(() => {
    document.title = 'Registrace vozíčkáře';
  }, []);

  return (
    <Registration
      type="wheelchair"
      text=" Od asistence Vás už dělí jenom pár kroků!"
    />
  );
};
