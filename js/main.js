// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const appDiv = document.getElementById("app");
appDiv.style.cssText =
  "position: relative; height: 750px; overflow: hidden; border-radius: 10px; box-shadow: -1px 0px 58px rgba(0,0,0,1);";

const body = document.getElementsByTagName("body")[0];
body.style.cssText =
  'display: flex; justify-content: center; align-items:center;  background: url("images/db/db-bg.jpg"); background-size: cover';

const audioPlayer = document.createElement("audio");
audioPlayer.setAttribute("src", "images/db/theme.mp3");
audioPlayer.loop = true;
// audioPlayer.play();

const pausePlayBtn = document.createElement("button");
pausePlayBtn.style.cssText =
  "position:absolute; top: 10px; right: 10px; border:none; background: transparent; outline: none; width: 50px; height: 50px; ";
pausePlayBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    animation.playSegments([0, 40], true);
  } else {
    audioPlayer.pause();
    animation.playSegments([0, 10], true);
  }
});
const pausePlayIcon = document.createElement("img");
pausePlayIcon.setAttribute("src", "images/player.png");

// pausePlayBtn.appendChild(pausePlayIcon);
body.appendChild(pausePlayBtn);

let animation = bodymovin.loadAnimation({
  container: pausePlayBtn,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "images/db/play-to-pause.json",
});

const gameEngine = new Engine(appDiv);

// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
};

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener("keydown", keydownHandler);

const startMenu = document.createElement("div");
startMenu.style.cssText =
  "background: rgba(0,0,0,0.8);width: 850px;height: 750px; position: absolute; top: 0; z-index: 99999999; ";
appDiv.append(startMenu);
const startBtn = document.createElement("button");
startBtn.innerText = "START";

const startGameText = document.createElement("h1");
startGameText.innerText = "LET'S PLAY";
startGameText.style.cssText =
  "color: #fff;font-family: monospace; font-size: 100px; text-align: center; padding-top: 50px;";
startMenu.appendChild(startGameText);

const startGameHandler = () => {
  startMenu.remove();
  gameEngine.gameLoop();
  scoreText.update(0);
  hiScoreText.updateHiScore();
};

startMenu.append(startBtn);
startBtn.style.cssText =
  "width: 300px; height: 100px; border-radius: 10px; background: rgb(66,51,111); color: #fff; font-size: 37px; font-weight: 800;position: absolute; top: 50%;left:50%;transform: translate(-50%,-50%); border: none;box-shadow: inset 4px 4px 10px rgba(255,255,255,0.2);";
startBtn.addEventListener("click", startGameHandler);

const instructionsDisplay = document.createElement("div");
instructionsDisplay.style.cssText =
  "background: rgba(255,255,255,0.9); width: 600px; margin: 250px auto 0 auto; height: 200px; border-radius: 3px; padding: 1px 20px; font-family: monospace; ";
const instructionsText = document.createElement("h2");
instructionsText.innerText = "Instructions:";
instructionsText.style.cssText = "font-size: 31px; margin-top: 12px;";
const instructionsP = document.createElement("p");
instructionsP.innerHTML =
  "· Press <span style='font-size: 20px'>| spacebar |</span> to start the game <br>· Use the left <span style='font-size: 20px'>| ← |</span> and right <span style='font-size: 20px'>| → |</span> arrow keys to move<br>· Use the up <span style='font-size: 20px'>| ↑ |</span> arrow key to shoot at the Pilars";
instructionsP.style.cssText = "line-height: 35px;";
instructionsDisplay.appendChild(instructionsText);
instructionsDisplay.appendChild(instructionsP);

startMenu.appendChild(instructionsDisplay);

const startGameSpaceBar = (event) => {
  if (event.keyCode === 32) {
    startGameHandler();
  }
};

document.addEventListener("keydown", startGameSpaceBar);
// We call the gameLoop method to start the game
// gameEngine.gameLoop();

const upArrowKeys = (event) => {
  if (event.keyCode === 38) {
    console.log("fire");
    //   if (this.dragonballs.length < MAX_DRAGONBALLS) {

    let db = new Dragonball(appDiv);
    gameEngine.dragonballs.push(db);
  }
  //}
};
document.addEventListener("keydown", upArrowKeys);
