
import random
import itertools

# Asks for Integer for number of decks you want to play with
numDecksStr = input('Please input the number of decks you want to play with ')
numDecks = int(numDecksStr)

snapDeck = []
snapPot = []
p1Pot = []
p2Pot = []

# creates Deck as a list, then creates snapDeck depending on number of decks inputted
# and shuffles it
def create_deck():
    for x in range(numDecks):
        deck = list(itertools.product(['diamonds', 'clubs', 'hearts', 'spades'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']))
        snapDeck.extend(deck)
    random.shuffle(snapDeck)
    return snapDeck


# Draw and display function.  Draws from snapDeck into SnapPot and displays last 2 cards
def draw_card():
    lastCard = snapDeck.pop()
    snapPot.append(lastCard)
    if len(snapPot) == 1:
        print(snapPot)
    elif len(snapPot) > 1:
        end = len(snapPot) - 1
        print(snapPot[end], snapPot[end - 1])

def end_game():
    if len(p1Pot) == len(p1Pot):
        print('Game Over, it is a Draw')
    elif len(p1Pot) > len(p2Pot):
        print('Game Over, Player 1 Won')
    elif len(p2Pot) > len(p1Pot):
        print('Game Over, Player 2 Won')


create_deck()
draw_card()
draw_card()
draw_card()
draw_card()
end_game()



