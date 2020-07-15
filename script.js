//creating variables for the 4 game buttons that can be used for an array
const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const colorArray = [blue, red, yellow, blue];
//empty arrays that can be used for both the user and cpu
let userClicks = [];
const compClicks = [];

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
			compClicks[i].style.filter = 'brightness(200%)';
			setTimeout(timer, 500);
			function timer() {
				compClicks[i].style.filter = '';
			}
		}, (i + 1) * 1500);
	}
}
//when user clicks any of the game buttons, this function will execute
const colorClick = document.querySelectorAll('.gameButtons');
for (let i = 0; i < colorArray.length; i++) {
	colorClick[i].addEventListener('click', handleUserClick);
}
function handleUserClick(event) {
	setTimeout(() => {
		event.target.style.filter = 'brightness(200%)';
		setTimeout(timer, 500);
		function timer() {
			event.target.style.filter = '';
		}
	}, 0);
	const thisColor = event.target;

	userClicks.push(thisColor);
	console.log(userClicks);
	let arrCompClicks = JSON.stringify(compClicks);
	let arrUserClicks = JSON.stringify(userClicks);
	for (let j = 0; j < userClicks.length; j++) {
		if (arrUserClicks === arrCompClicks) {
			handleStartButton();
		} else if (userClicks[j] !== compClicks[j]) {
			console.log(false);
		}
	}
}

const playerLoses = function () {
	
}

// // this button will allow the user to start a one player game
// const onePlayer = document.querySelector('.onePlayerButton');
// onePlayer.addEventListener('click', handleOnePlayer);
// function handleOnePlayer() {}

// // this button will allow the user to start a 2 player game
// const twoPlayers = document.querySelector('.twoPlayerButton');
// twoPlayers.addEventListener('click', handleTwoPlayers);
// function handleTwoPlayers() {}
