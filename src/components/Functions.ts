

function FlipCard() {
	//flip card
}

export function ScrambleArray(){
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function IncreaseScore(lastCard: number, currentCard: number, score: number){
	if(lastCard == currentCard){
		score++;
	}

    return score;
}