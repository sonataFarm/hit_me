import React, { Component } from 'react';
import logo from '../../logo.svg';
import './app.css';

import { Card, Deck } from '../../util/card_utils';

import CardList from '../card_list/card_list';



class App extends Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.currentCards = this.deck.cards.slice(0, 4);
  }

  render() {
    const cards = new Deck().cards;
    return <CardList cards={cards} />;
  }
}

export default App;
