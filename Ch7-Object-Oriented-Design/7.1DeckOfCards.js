/*
Design the data structures for a generic deck of cards.

Explain how you would subclass the data structures to implement blackjack.
*/

class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = `${this.number} ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.newDeck();
  }
  newDeck() {
    this.clear();
    var suits = ['\u2660', '\u2663', '\u2665', '\u2666'];
    var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    suits.forEach((suit) => {
      numbers.forEach((number) => {
        this.cards.push(new Card(suit, number));
      });
    });
  }
  clear() {
    while (this.cards.length > 0) {
      this.cards.pop();
    }
  }
  shuffle() {
    this.cards.sort(() => Math.random() > 0.5 ? 1 : -1);
  }
  deal() {
    return this.cards.pop();
  }
}





// dealer - hand and deck
class Dealer {
  constructor() {
    this.deck = new Deck();
    this.hand = [];
  }
  shuffleCards() {
    this.deck.shuffle();
    this.deck.shuffle();
    this.deck.shuffle();
  }
  dealCard() {
    return this.deck.deal();
  }
  receiveCard(card) {
    this.hand.push(card);
  }
}




class Player {
  constructor() {
    this.hand = [];
  }
  receiveCard(card) {
    this.hand.push(card);
  }
  discardHand() {
    this.hand = [];
  }
}



// blackjack game table

class Table {
  constructor() {
    this.dealer = new Dealer();
    this.players = [];
  }
  join(player) {
    if (this.players.length > 5) {
      console.log('player is full');
    } else if (this.players.indexOf(player) > -1) {
      console.log('player is already on table');
    } else {
      this.players.push(player);
    }
  }
  runGame() {
    var dealer = this.dealer;
    var players = this.players;

    if (players.length === 0) {
      console.log('no players on table: game did not take place');
    } else {
      console.log('start blackjack game!');
      dealer.shuffleCards();
      for (var i = 0; i < 2; i++) {
        players.forEach((player) => {
          player.receiveCard(dealer.dealCard());
        });
        dealer.receiveCard(dealer.dealCard());
      }
      console.log('dealer hand', dealer.hand.map((card) => card.value));
      players.forEach((player) => {
        console.log('player hand', player.hand.map((card) => card.value));
      });
    }
  }
}



/* TEST */
var table = new Table();
var eugene = new Player();
var david = new Player();
var luis = new Player();
var eric = new Player();

table.join(eugene);
table.join(david);
table.join(luis);
table.join(eric);

/* build until dealing of first hand */
table.runGame();
