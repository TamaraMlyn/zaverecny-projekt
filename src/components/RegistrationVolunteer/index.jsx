import React, { useEffect } from 'react';
import { Registration } from '../Registration';
import './style.css';

export const RegistrationVolunteer = () => {
  useEffect(() => {
    document.title = 'Registrace dobrovolníka';
  }, []);
  
  return (
    <Registration
      role="volunteer"
      text=" Od dobrovolnictví Vás už dělí jenom pár kroků!"
    />
  );
};
