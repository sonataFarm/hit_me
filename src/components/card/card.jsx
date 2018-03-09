import React from 'react';
import './card.css';

const Card = ({ card, card: { suit, value } }) => (
  <li>
    <div className={`Card-container Card-${card.color}`}>
      <div className="Card-corner-top">
        <div>{value}</div>
        <div>{suit}</div>
      </div>

      <div className="Card-center">
        {value}
      </div>

      <div className="Card-corner-bottom">
        <div>{value}</div>
        <div>{suit}</div>
      </div>
    </div>
  </li>
);

export default Card;
