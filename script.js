//creating variables for the 4 game buttons that can be used for an array
const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const colorArray = [green, red, yellow, blue];
//empty arrays that can be used for both the user and cpu
let userClicks = [];
const compClicks = [];

const soundEffects = {
	blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
	red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
	yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
	green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
};

let score = document.querySelector('.score');
let totalScore = 0;

// this function will allow the game to start and continue with one more color flash incremented if user guesses correctly
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', handleStartButton);

function handleStartButton(event) {
	const randomIndex = Math.floor(Math.random() * 4);
	userClicks = [];
	const newColor = colorArray[randomIndex];

	compClicks.push(newColor);
	console.log(compClicks);

	for (let i = 0; i < compClicks.length; i++) {
		setTimeout(() => {
			soundEffects[compClicks[i]['id']].play();
			compClicks[i].style.filter = 'brightness(200%)';
			setTimeout(timer, 500);
			function timer() {
				compClicks[i].style.filter = '';
			}
		}, (i + 1) * 1000);
	}
}

//when user clicks any of the game buttons, this function will execute
const colorClick = document.querySelectorAll('.gameButtons');
for (let i = 0; i < colorArray.length; i++) {
	colorClick[i].addEventListener('click', handleUserClick);
}
function handleUserClick(event) {
	setTimeout(() => {
		soundEffects[event.target.id].play();
		event.target.style.filter = 'brightness(200%)';
		setTimeout(timer, 500);
		function timer() {
			event.target.style.filter = '';
		}
	}, 0);
	const thisColor = event.target;

	userClicks.push(thisColor);
	console.log(userClicks);

	const indexOfLastUserClick = userClicks.length - 1;
	if (userClicks[indexOfLastUserClick] !== compClicks[indexOfLastUserClick]) {
		console.log('game over');
		return gameOver();
	} else if (userClicks.length == 4) {
		return gameWon();
	} else if (indexOfLastUserClick === compClicks.length - 1) {
		console.log('play next seq');
		totalScore += 1;
		score.innerHTML = totalScore;
		return handleStartButton();
	}
}
const gameOverScreen = document.querySelector('.game-over');
const gameOver = function () {
	gameOverScreen.style.opacity = '1';
};

const gameWon = function () {
	return window.open('end-of-game.html');
};

// // this button will allow the user to start a one player game
// const onePlayer = document.querySelector('.onePlayerButton');
// onePlayer.addEventListener('click', handleOnePlayer);
// function handleOnePlayer() {}

// // this button will allow the user to start a 2 player game
// const twoPlayers = document.querySelector('.twoPlayerButton');
// twoPlayers.addEventListener('click', handleTwoPlayers);
// function handleTwoPlayers() {}
