// Plan
// Create Deck - DONE
// user selects number of Decks and creates snapCard Deck
// Shuffle Cards - DONE
// PLAY SNAP
// Card turn over on timer / command / button
// Display last 2 cards - push these to Cards in play Array
// on succesful snap, 


function Snap() {

  const newGame = document.querySelector('.newGame')
  const numOfDecks = document.querySelector('.numOfDecks')
  const deckNum = document.querySelector('.deckNum')
  const snapPotNum = document.querySelector('.snapPotNum')
  const lastCard = document.querySelector('.lastCard')
  const currentCard = document.querySelector('.currentCard')
  const nextCard = document.querySelector('.nextCard')
  const cardsP1 = document.querySelector('.cardsP1')
  const snapP1 = document.querySelector('.snapP1')
  const cardsP2 = document.querySelector('.cardsP2')
  const snapP2 = document.querySelector('.snapP1')



  const suits = ['diamonds', 'clubs', 'hearts', 'spades']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  let snapDeck = []
  let snapPot = []


  // Shuffle function swaps locations at random (200 times) of 2 cards
  function shuffleDeck(snapDeck) {

    for (let i = 0; i < 200; i++) {
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
          var card = { rank: values[x], suit: suits[i] }
          snapDeck.push(card)
        }
      }
    }
    shuffleDeck(snapDeck)
  }

  function newCard() {
    nextCard.addEventListener('mousedown', () => {
      const newCard = snapDeck.pop()
      currentCard.innerHTML = `Current card is ${newCard.rank} and suit ${newCard.suit}`
      if (snapPot.length >= 1) {
        const last = snapPot.length - 1
        lastCard.innerHTML = `Last card is ${snapPot[last].rank} and suit ${snapPot[last].suit}`
      }
      snapPot.push(newCard)
      deckNum.innerHTML = snapDeck.length
      snapPotNum.innerHTML = snapPot.length
    })

  }

  function Reset () {
    snapDeck = []
    snapPot = []
    deckNum.innerHTML = 0
    snapPotNum.innerHTML = 0
    lastCard.innerHTML = ''
    currentCard.innerHTML = ''
    cardsP1.innerHTML = 'Numer of Cards: 0'
    cardsP2.innerHTML = 'Numer of Cards: 0'
  }

  // Launchs on click New game.  Creates Deck and Shuffels it
  function Launch() {
    newGame.addEventListener('mousedown', () => {
      Reset()
      const numDecks = numOfDecks.value
      createDeck(numDecks)
      deckNum.innerHTML = snapDeck.length
      snapPotNum.innerHTML = snapPot.length
      newCard()
    })
  }

  Launch()

}



window.addEventListener('DOMContentLoaded', Snap)
