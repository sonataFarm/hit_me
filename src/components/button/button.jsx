import React from 'react';
import './button.css';

const Button = ({ handleClick, text }) => (
  <div className="Button-container" onClick={handleClick} >
    <h1 className="Button-button no-select">{text}</h1>
  </div>
);

export default Button;
