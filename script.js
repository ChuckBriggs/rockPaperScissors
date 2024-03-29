function reset() {
}

function addPlayerPoint() {
	++playerScore;
	if (playerScore >= 5) {
		results2.textContent=`You win, ${playerScore} to ${computerScore}.`;
		playerScore=0;
		computerScore=0;
		playerDisplay.textContent=`Player: ${playerScore}`;
		computerDisplay.textContent=`Computer: ${computerScore}`;
	} else {
		playerDisplay.textContent=`Player: ${playerScore}`;
	}
	return;
}

function addComputerPoint() {
	++computerScore;
	if (computerScore >= 5) {
		results2.textContent=`You lose, ${playerScore} to ${computerScore}.`;
		playerScore=0;
		computerScore=0;
		playerDisplay.textContent=`Player: ${playerScore}`;
		computerDisplay.textContent=`Computer: ${computerScore}`;
	} else {
		computerDisplay.textContent=`Computer: ${computerScore}`;
	}
	return;
}

function computerPlay() {
	let num = Math.floor(Math.random() * 3);
	if (num == 0) {
		return 'rock';
	} else if (num == 1) {
		return 'paper';
	}
	else if (num == 2) {
		return 'scissors';
	} else {
		return 'error';
	}
}

function playRound() {
	this.classList.add('clicked');
	computerSelection = computerPlay();
	playerSelection = this.id;
	if (playerSelection == 'rock') {
		if (computerSelection == 'rock') {
			results1.textContent='Computer throws rock.';
			results2.textContent='Draw.';
			return;
		}
		if (computerSelection == 'paper') {
			results1.textContent='Computer throws paper.';
			results2.textContent='Computer\'s point.';
			addComputerPoint();
			return;
		}
		if (computerSelection == 'scissors') {
			results1.textContent='Computer throws scissors.';
			results2.textContent='Your point.';
			addPlayerPoint();
			return;
		}
	}
	if (playerSelection == 'paper') {
		if (computerSelection == 'rock') {
			results1.textContent='Computer throws rock.';
			results2.textContent='Your point.';
			addPlayerPoint();
			return;
		}
		if (computerSelection == 'paper') {
			results1.textContent='Computer throws paper.';
			results2.textContent='Draw.';
			return;
		}
		if (computerSelection == 'scissors') {
			results1.textContent='Computer throws scissors.';
			results2.textContent='Computer\'s point.';
			addComputerPoint();
			return;
		}
	}
	if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') {
			results1.textContent='Computer throws rock.';
			results2.textContent='Computer\'s point.';
			addComputerPoint();
			return;
		}
		if (computerSelection == 'paper') {
			results1.textContent='Computer throws paper.';
			results2.textContent='Your point.';
			addPlayerPoint();
			return;
		}
		if (computerSelection == 'scissors') {
			results1.textContent='Computer throws scissors.';
			results2.textContent='Draw.';
			return;
		}
	}
	return 'error';
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // skip if it's not a transform
	this.classList.remove('clicked');
}

let computerScore=0;
let playerScore=0;

const div=document.querySelector('.results');
const results1=document.querySelector('#results1');
const results2=document.querySelector('#results2');
const playerDisplay=document.querySelector('#playerScore');
const computerDisplay=document.querySelector('#computerScore');
const butts = document.querySelectorAll('.butt');
butts.forEach(butt => {
	butt.addEventListener('click', playRound);
});
butts.forEach(butt => butt.addEventListener('transitionend', removeTransition));
