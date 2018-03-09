import _ from 'lodash';

export class Deck {
  constructor() {
    this.generateCards();
  }

  shuffle() {
    return this.cards = _.shuffle(this.cards);
  }

  draw(n) {
    let drawn = this.cards.splice(0, n);

    if (drawn.length < n) {
      this.generateCards();

      drawn = [
        ...drawn,
        ...this.draw(n - drawn.length)
      ];
    }

    return drawn;
  }

  generateCards() {
    this.cards = Card.generateAllCards();
    return this.shuffle();
  }
}

export class Card {
  static generateAllCards() {
    return Card.SUITS.reduce((deck, suit) => {
      const cards = Card.VALUES.map(value => (
        new Card(suit, value)
      ));

      return [ ...deck, ...cards ];
    }, []);
  }

  static SUITS = [
    'hearts',
    'diamond',
    'club',
    'spade'
  ];

  static VALUES = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ];

  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
