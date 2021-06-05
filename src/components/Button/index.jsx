import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export const Button = ({ type = 'primary', text, description, to }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (to) {
      history.push(to);
    }
  };

  return (
    <div className={`btn btn--${type}`} onClick={handleClick}>
      <div className="btn__text" href="">
        {text}
      </div>
      {description && <div className="btn__description">{description}</div>}
    </div>
  );
};
