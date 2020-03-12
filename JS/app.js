// Plan
// Create Deck - DONE
// user selects number of Decks and creates snapCard Deck
// Shuffle Cards
// PLAY SNAP
// Card turn over on timer / command / button
// Display last 2 cards - push these to Cards in play Array
// on succesful snap, 


const suits = ['diamonds', 'clubs', 'hearts', 'spades']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const snapDeck = []


// Shuffle function swaps locations at random (100 times) of 2 cards
function shuffleDeck(snapDeck) {

  for (let i = 0; i < 100; i++) {
    const location1 = Math.floor((Math.random() * snapDeck.length))
    const location2 = Math.floor((Math.random() * snapDeck.length))
    const temp = snapDeck[location1]

    snapDeck[location1] = snapDeck[location2]
    snapDeck[location2] = temp
  }
  console.log(snapDeck)
}

// this funcation creates the card deck from the Variables - then calls the shuffle function
function createDeck(numDecks) {

  for (let j = 0; j < numDecks; j++) {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        var card = { Value: values[x], Suit: suits[i] }
        snapDeck.push(card)
      }
    }
  }
  shuffleDeck(snapDeck)
}

createDeck(1)
