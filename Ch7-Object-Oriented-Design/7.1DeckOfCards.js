/*
Design the data structures for a generic deck of cards.

Explain how you would subclass the data structures to implement blackjack.
*/

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.stack = [];
    this.initializeDeck();
  }

  initializeDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const numbers = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (const suit of suits) {
      for (const number of numbers) {
        this.stack.push(new Card(number, suit));
      }
    }
  }

  shuffle() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]]; // Swap cards
    }
  }

  dealCard() {
    if (this.stack.length === 0) {
      throw new Error('Deck is empty.');
    }
    return this.stack.pop();
  }

  playCard() {
    return this.stack.pop();
  }

  addCardToTop(card) {
    this.stack.push(card);
  }

  addCardToBottom(card) {
    this.stack.unshift(card);
  }
}

class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }

    addCardToHand(card) {
      this.hand.push(card);
    }
  }

  class BlackjackGame {
    constructor() {
      this.deck = new Deck();
      this.deck.shuffle();

      this.player = new Player('Player');
      this.dealer = new Player('Dealer');

      this.player.addCardToHand(this.deck.dealCard());
      this.dealer.addCardToHand(this.deck.dealCard());
      this.player.addCardToHand(this.deck.dealCard());
      this.dealer.addCardToHand(this.deck.dealCard());
    }

    // Implement game logic here...
  }
