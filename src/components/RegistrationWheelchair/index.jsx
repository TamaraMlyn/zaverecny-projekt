import React, { useEffect } from 'react';
import { Registration } from '../Registration';
import './style.css';

export const RegistrationWheelchair = () => {
  useEffect(() => {
    document.title = 'Registrace vozíčkáře';
  }, []);

  return (
    <Registration
      role="wheelchair"
      text="Od zadání svého prvního požadavku tě dělí už jenom registrace!"
    />
  );
};
