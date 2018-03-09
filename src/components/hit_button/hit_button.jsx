import React from 'react';
import './hit_button.css';

const HitButton = ({ handleClick }) => (
  <div className="HitButton-container" onClick={handleClick} >
    <h1 className="HitButton-button no-select">Hit Me!</h1>
  </div>
);

export default HitButton;
