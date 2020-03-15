import unittest

import itertools
import random


def create_deck(numDecks):
    snapDeck = []
    deck = []
    for x in range(numDecks):
        deck = list(itertools.product(['diamonds'], ['2']))
        snapDeck.extend(deck)
    random.shuffle(snapDeck)
    return snapDeck

def end_game(p1Pot, p2Pot):
    if len(p1Pot) == len(p2Pot):
        return 'Game Over, it is a Draw'
    if len(p1Pot) > len(p2Pot):
        return 'Game Over, Player 1 Won'
    if len(p2Pot) > len(p1Pot):
        return 'Game Over, Player 2 Won'

def new_card(snapDeck, snapPot):
    lastCard = snapDeck.pop()
    snapPot.append(lastCard)

    if len(snapPot) == 1:
        return(snapPot)
    elif len(snapPot) > 1:
        end = len(snapPot) - 1
        return snapPot[end], snapPot[end - 1]

def snap(snapPot, pot):
    end = len(snapPot) - 1
    if snapPot[end][1] == snapPot[end - 1][1]:
        pot.extend(snapPot)
        snapPot.clear()
        return 'SNAP'
    else:
        return 'Not Snap'

class SnapTests(unittest.TestCase):

    def test_create_deck_single(self):
        self.assertEqual(create_deck(1), [('diamonds', '2')])
    def test_create_deck_two(self):
        self.assertEqual(create_deck(2), [('diamonds', '2'), ('diamonds', '2')])
    def test_create_deck_three(self):
        self.assertEqual(create_deck(3), [('diamonds', '2'), ('diamonds', '2'), ('diamonds', '2')])
    
    def test_end_game_p1win(self):
        self.assertEqual(end_game([1, 2, 3], [1, 2]), 'Game Over, Player 1 Won')
    def test_end_game_draw(self):
        self.assertEqual(end_game([1, 2], [1, 2]), 'Game Over, it is a Draw')
    def test_end_game_p2win(self):
        self.assertEqual(end_game([1, 2], [1, 2, 3, 4]), 'Game Over, Player 2 Won')
        
    def test_new_card_single(self):
        self.assertEqual(new_card([('diamonds', '2')], []), [('diamonds', '2')])
    def test_new_card_two(self):
        self.assertEqual(new_card([('diamonds', '2')], [('spades', 'A')]), (('diamonds', '2'), ('spades', 'A')))

    def test_snap(self):
        self.assertEqual(snap([('diamonds', '3'), ('spades', '3')], []), 'SNAP')


if __name__ == '__main__':
    unittest.main()