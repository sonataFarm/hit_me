import React, { Component } from 'react';
import './hand.css';

import Card from '../card/card';

const Hand = ({ cards, lean }) => {
  return (
    <ul className={`Hand-container Hand-lean-${lean}`}>
      {cards.map((card, idx) => <Card card={card} key={idx} />)}
    </ul>
  );
};

export default Hand;
