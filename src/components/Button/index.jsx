import React from 'react';
import './style.css';

export const Button = ({ type = 'primary', text, description, to }) => {
  return (
    <div className={`btn btn--${type}`}>
      <div className="btn__text" href="">
        {text}
      </div>
      {description && <div className="btn__description">{description}</div>}
    </div>
  );
};
