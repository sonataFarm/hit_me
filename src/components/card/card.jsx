import React from 'react';

const Card = ({ card: { suit, value } }) => (
  <li>{`${value} of ${suit}`}</li>
);

export default Card;
