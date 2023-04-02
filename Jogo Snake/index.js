//Todo o codigo do jogo estara escrito a baixo;
// Aqui sera utilizado somento javascript vanila.

let domReplay = document.querySelector('#replay');
let domscore = document.querySelector('#score');
let canvasGame = document.createElement('canvas')

document.querySelector('#canvas').appendChild(canvasGame);

let ctx = canvasGame.getContext('2d');

const W = (canvasGame.width = 400);
const H = (canvasGame.height = 400);

//criando as propiedades que vamos usar no jogo//

let snake,
food,
currentHue,
cells = 20,
cellSize,
isGameOver = false,
taills = [],
score = 00,
macScore = undefined,
particles = [],
splashingParticleCount = 20,
cellsCount
requestID;

