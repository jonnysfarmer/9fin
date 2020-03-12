

import random
import itertools

# Asks for Integer for number of decks you want to play with
numDecksStr = input('Please input the number of decks you want to play with ')
numDecks = int(numDecksStr)

snapDeck = []

# creates Deck as a list, then creates snapDeck depending on number of decks inputted
for x in range(numDecks):
    print(x)
    deck = list(itertools.product(['diamonds', 'clubs', 'hearts', 'spades'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']))
    snapDeck.extend(deck)

# Shuffles the Deck
random.shuffle(snapDeck)

print(snapDeck)

