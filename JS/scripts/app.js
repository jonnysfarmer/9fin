
function Snap() {

  // Get all my elements from the DOM
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


  // Global Variables
  const suits = ['diamonds', 'clubs', 'hearts', 'spades']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  let snapDeck = []
  let snapPot = []
  let p1Pot = []
  let p2Pot = []


  // Shuffle function swaps 2 cards locations at random (200 times)
  function shuffleDeck(snapDeck) {
    for (let i = 0; i < 200; i++) {
      const location1 = Math.floor((Math.random() * snapDeck.length))
      const location2 = Math.floor((Math.random() * snapDeck.length))
      const temp = snapDeck[location1]

      snapDeck[location1] = snapDeck[location2]
      snapDeck[location2] = temp
    }
  }

  // this funcation creates the card deck from the Variables - then calls the shuffle function
  // Maybe use
  function createDeck(numDecks) {

    for (let i = 0; i < numDecks; i++) {
      suits.forEach((suit) => {
        values.forEach((value)=> {
          const card = { rank: value, suit: suit }
          snapDeck.push(card)
        })
      })
    }
    shuffleDeck(snapDeck)
  }

  // Reset Function
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

  // End Game Logic
  function endGame() {
    if (p1Pot.length === p2Pot.length) {
      alert('Game Over, it is a Draw')
      reset()
    } else if (p1Pot.length > p2Pot.length) {
      alert('Game Over, Player 1 Won')
      reset()
    } else {
      alert('Game Over, Player 2 Won')
      reset()
    }
  }

  // This deals a new card and adds it to the snapDeck.  Dislays relevent Info
  function newCard() {
    if (snapDeck.length === 0) {
      endGame()
    }
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
  }

  // Snap function for both buttons, if successfull, pushes Pot into players pot.  Updates Info.
  function snap(pot, card) {
    if (snapPot.length < 2) return error.innerHTML = 'Not enough cards to Snap'

    const i = snapPot.length - 1
    if (snapPot[i].rank === snapPot[i - 1].rank) {
      pot.push(...snapPot)
      snapPot = []
      snapPotNum.innerHTML = snapPot.length
      card.innerHTML = pot.length
    } else {
      error.innerHTML = 'Not Snap'

    }
  }

  
  // Launchs on click New game.  
  function Launch() {

    newGame.addEventListener('mousedown', () => {
      reset()
      const numDecks = numOfDecks.value
      createDeck(numDecks)
      deckNum.innerHTML = snapDeck.length
      snapPotNum.innerHTML = snapPot.length
      nextCard.addEventListener('mousedown', newCard)
      snapP1.addEventListener('mousedown', ()=>(snap(p1Pot, cardsP1)))
      snapP2.addEventListener('mousedown', ()=>(snap(p2Pot, cardsP2)))
    })
  }

  Launch()


}


window.addEventListener('DOMContentLoaded', Snap)
