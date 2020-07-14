const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const colorArray = ['green', 'red', 'yellow', 'blue'];
colorArray[0] = green;
colorArray[1] = red;
colorArray[2] = yellow;
colorArray[3] = blue;


const userClicks = [];
const compClicks = [];
// This function will handle what happens every time one of the colored buttons are clicked
const mainClick = document.querySelector('.mainButtons');
mainClick.addEventListener('click', handleMainClick);
function handleMainClick(event) {
	event.target.style.filter = 'brightness(150%)';
	userClicks.push(event.target.id);
	console.log(userClicks);
	userClicks.forEach((element) => {});
}

// this function will allow the game to start
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', handleStartButton);
function handleStartButton(event) {
	const randomIndex = Math.floor(Math.random() * 4);
	console.log(randomIndex);
	const newColor = colorArray[randomIndex];
	compClicks.push(newColor);
	console.log(compClicks);

	for (let i = 0; i < compClicks.length; i++) {
		console.log(event);
		newColor.style.filter = 'brightness(175%)';
	}
}

// if (handleStartButton()) {
// }

// this button will allow the user to start a one player game
const onePlayer = document.querySelector('.onePlayerButton');
onePlayer.addEventListener('click', handleOnePlayer);
function handleOnePlayer() {}

// this button will allow the user to start a 2 player game
const twoPlayers = document.querySelector('.twoPlayerButton');
twoPlayers.addEventListener('click', handleTwoPlayers);
function handleTwoPlayers() {}
