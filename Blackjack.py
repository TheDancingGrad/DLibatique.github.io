class Player(object):

	def __init__(self,bankroll=100):
		self.bankroll = bankroll

	def add(self,amount):
		self.bankroll += amount