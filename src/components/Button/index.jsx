import React from 'react';
import './style.css';

export const Button = ({ type="primary", text }) => {
  return (
  <div className={`btn btn--${type}`}>{text}</div>
  )
};
