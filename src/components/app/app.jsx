import React, { Component } from 'react';
import './app.css';
import { Deck } from '../../util/card_utils';
import Hand from '../hand/hand';
import Button from '../button/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: new Deck(),
      hand: [],
      round: 0
    };
  }

  hit = e => {
    e.preventDefault();
    this.setState({
      hand: this.state.deck.draw(4),
      round: this.state.round + 1
    });
  }

  render() {
    return (
      <div className="App-container">
        <Button
          text="Hit Me!"
          handleClick={this.hit} />
        <Hand
          cards={this.state.hand}
          lean={(this.state.round % 2) ? 'left' : 'right'} />
      </div>
    );
  }
}

export default App;
