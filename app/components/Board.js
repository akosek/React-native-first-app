export default class Board {

	getCard(){
		constructor(numRows, numCols){
			this.numRows = numRows || 4;
			this.numCols = numCols || 4;
			this.isLocked = false;

			this.turn = 0;
			this.flips = [0,0];
			this.score = [0,0]

			var numberOfCards = numRows * numCols / 2;
			this.maxScore = numberOfCards;

			var cards = this.cards = this.getCards(numberOfCards);
			this.createGrid();
		}
	}

	    getCards(numberOfCards: number): Array {
	        var playingCards = this.arrayShuffle([
	            'http://www.picgifs.com/disney-gifs/disney-gifs/disney-glitter/disney-graphics-disney-glitter-017763.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/disney-glitter/disney-graphics-disney-glitter-953286.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/belle-and-the-beast/disney-graphics-belle-and-the-beast-928628.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/dumbo/disney-graphics-dumbo-193099.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/peter-pan/disney-graphics-peter-pan-107140.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/madagascar/disney-graphics-madagascar-224386.jpg',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/tweety-and-sylvester/disney-graphics-tweety-and-sylvester-481783.gif',
	            'http://www.picgifs.com/disney-gifs/disney-gifs/ariel/animaatjes-ariel-0232913.gif'
	        ]).slice(0, numberOfCards);

	        var deck = playingCards.concat(playingCards);

	        this.arrayShuffle(deck);

	        return deck;
	    }


}
