import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export const Button = ({
  type = 'primary',
  formType,
  text,
  description,
  to,
  onClick,
  className,
}) => {
  const history = useHistory();

  const btnElm = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (btnElm.current) {
      btnElm.current.click();
    }
    if (to) {
      history.push(to);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <div className={`btn btn--${type} ${className}`} onClick={handleClick}>
        <div className="btn__text" href="">
          {text}
        </div>
        {description && <div className="btn__description">{description}</div>}
      </div>
      {formType && (
        <button type={formType} className="btn--hidden" ref={btnElm}></button>
      )}
    </>
  );
};
