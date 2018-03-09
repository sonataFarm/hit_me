import React, { Component } from 'react';
import Card from '../card/card';

class CardList extends Component {
  render() {
    const card = Card;
    return (
      <ul>
        {this.props.cards.map((card, idx) => (
          <Card card={card} key={idx} />
        ))}
      </ul>
    );
  }
}

export default CardList;
