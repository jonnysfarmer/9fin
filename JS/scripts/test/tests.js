/* global describe, it */
/* eslint-disable no-undef */

const chai = window.chai
const expect = chai.expect


describe('Shuffle Function Test', () => {

  function shuffleDeck(snapDeck) {
    for (let i = 0; i < 2000; i++) {
      const location1 = Math.floor((Math.random() * snapDeck.length))
      const location2 = Math.floor((Math.random() * snapDeck.length))
      const temp = snapDeck[location1]

      snapDeck[location1] = snapDeck[location2]
      snapDeck[location2] = temp

      return snapDeck
    }
  }

  it('Should Return the same', () => {
    expect(shuffleDeck([1, 1, 1])).to.deep.equal([1, 1, 1])
  })
})

describe('Endgame logic test', () => {

  function endGame(p1Pot, p2Pot) {
    if (p1Pot.length === p2Pot.length) {
      return ('Game Over, it is a Draw')
      // reset()
    } else if (p1Pot.length > p2Pot.length) {
      return ('Game Over, Player 1 Won')
      // reset()
    } else {
      return ('Game Over, Player 2 Won')
      // reset()
    }
  }

  it('Test Draw', () => {
    expect(endGame([1, 3, 5], [1, 4, 5])).to.equal('Game Over, it is a Draw')
  })
  it('Test Player 1 Win', () => {
    expect(endGame([1, 3, 5, 5], [1, 4, 5])).to.equal('Game Over, Player 1 Won')
  })
  it('Test Player 2 Win', () => {
    expect(endGame([1, 3, 5], [1, 4, 5, 8, 9])).to.equal('Game Over, Player 2 Won')
  })
})

describe('Create Deck Test', () => {
  const suits = ['a']
  const values = ['test']
  snapDeck = []

  function createDeck(numDecks) {
    for (let i = 0; i < numDecks; i++) {
      suits.forEach((suit) => {
        values.forEach((value)=> {
          const card = { rank: value, suit: suit }
          snapDeck.push(card)
        })
      })
    }
    return snapDeck
  }

  it('Create Deck Test', () => {
    expect(createDeck(1)).to.deep.equal([{ rank: 'test', suit: 'a' }])
  })
})






