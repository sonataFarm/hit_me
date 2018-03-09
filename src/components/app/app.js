import React, { Component } from 'react';
import logo from '../../logo.svg';
import './app.css';

import { Card, Deck } from '../../util/card_utils';

class App extends Component {

  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.currentCards = this.deck.cards.slice(0, 4);
  }

  render() {
    return (
      <CardList cards={this.currentCards} />
    );
  }
}

class CardList extends Component {
  render() {
    return (
      <ul>
        {this.props.cards.map((card, idx) => {
          <CardComponent
            card={card}
            key={idx}
          />
        })}
      </ul>
    );
  }
}

const CardComponent = ({ value, suit }) => (
    <h1>{`${value} of ${suit}`}</h1>
);

export default App;
