class Player(object):

	def __init__(self,bankroll=100):
		self.bankroll = bankroll

	def add(self,amount):
		self.bankroll += amount

class Dealer(object):
	
	def __init__(self,bankroll=100):
		self.bankroll = bankroll

	def add(self,amount):
		self.bankroll += amount

deck = [2,3,4,5,6,7,8,9,10,]

daniel = Player()
charlie = Dealer()

def player_turn():
	