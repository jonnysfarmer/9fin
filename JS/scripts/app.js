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
  const snapP2 = document.querySelector('.snapP2')
  const error = document.querySelector('.error')



  const suits = ['diamonds', 'clubs', 'hearts', 'spades']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  let snapDeck = []
  let snapPot = []
  let p1Pot = []
  let p2Pot = []


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

    for (let i = 0; i < numDecks; i++) {
      for (let j = 0; j < suits.length; j++) {
        for (let x = 0; x < values.length; x++) {
          var card = { rank: values[x], suit: suits[i] }
          snapDeck.push(card)
        }
      }
    }
    shuffleDeck(snapDeck)
  }

  function newCard() {
    const newCard = snapDeck.pop()
    currentCard.innerHTML = `Current card is ${newCard.rank} and suit ${newCard.suit}`
    if (snapPot.length >= 1) {
      const last = snapPot.length - 1
      lastCard.innerHTML = `Last card is ${snapPot[last].rank} and suit ${snapPot[last].suit}`
    }
    snapPot.push(newCard)
    deckNum.innerHTML = snapDeck.length
    snapPotNum.innerHTML = snapPot.length
    error.innerHTML = ''
    console.log(snapPot)
  }

  function snap(pot, card) {
    if (snapPot.length < 2) return error.innerHTML = 'Not enough cards to Snap'
    const i = snapPot.length - 1
    if (snapPot[i].suit === snapPot[i - 1].suit) {
      pot.push(...snapPot)
      snapPot = []
      snapPotNum.innerHTML = snapPot.length
      card.innerHTML = pot.length
    } else {
      alert('Not snap')
    }
  }

  function reset() {
    snapDeck = []
    snapPot = []
    p1Pot = []
    p2Pot = []
    deckNum.innerHTML = 0
    snapPotNum.innerHTML = 0
    lastCard.innerHTML = ''
    currentCard.innerHTML = ''
    error.innerHTML = ''
    cardsP1.innerHTML = 'Numer of Cards: 0'
    cardsP2.innerHTML = 'Numer of Cards: 0'
  }


  // Launchs on click New game.  Creates Deck and Shuffels it
  function Launch() {
    newGame.addEventListener('mousedown', () => {
      reset()
      const numDecks = numOfDecks.value
      createDeck(numDecks)
      deckNum.innerHTML = snapDeck.length
      snapPotNum.innerHTML = snapPot.length
      nextCard.addEventListener('mousedown', newCard)
      snapP1.addEventListener('mousedown', () => (snap(p1Pot, cardsP1)))
      snapP2.addEventListener('mousedown', () => (snap(p2Pot, cardsP2)))
    })
  }

  Launch()

}



window.addEventListener('DOMContentLoaded', Snap)
