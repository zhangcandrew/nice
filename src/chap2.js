import React from 'react';
import AutoScrollPage from './autoscroller.js';
import {displayOnGame} from './minigames.js';

var messages = [ 
    'spc:mg:0',
    'spc:f:CHAPTER 2',
    'YEAR OF THE PAINTER',
    '(hackerz in the swamp)', 
    '', 
    '',
    'spc:img:./swamphacks.gif',
    '(¯\\_(ツ)_/¯ erin)',
    '',
    'And thus began the journey that was swamphacks',
    'the story continues with our binches trying to find their spot', 
    'in college. The year is 2017, XO TOUR Llif3 launches Lil UV into the mainstream', 
    'Kendrick drops Damn. and Drake drops passionfruit.', 
    'lo-fi takes the world by storm setting the tone', 
    'for the depressive - bipolar - mania that encapsulates everyone throughout the year', 
    'Looking to beef up their resumes, our characters', 
    'decide to take on one of the greatest underpinnings of their life:', 
    '', 
    '', 
    'S W A M P H A C K S',
    '(D E P R E S S I O N)',
    '',
    'With Erin onboard as the logistics coordinator', 
    'Yang redefining our social media front', 
    'And Andrew being a dumb code monkey', 
    'this new chapter unfolds', 
    '',
    '',
    '',
    'spc:f:planning intermission',
    'tips from our sponsors:', 
    'spc:img:./IMG-9380.PNG', 
    'Leo: just have fun with planning SwampHacks!',
    '',
    'spc:img:./oop.JPG', 
    'Kanye: HUH HEH HAAAA UHHH oooooooh (deep breath) (he just talke to jesus) (he said waddup yeezus)', 
    '',
    'spc:img:./trunks.JPG',
    'Yang: you\'ll definitely want to plan some buses for logistics!', 
    '(uh oh! we didn\'t plan some buses for logistics yet!)', 
    '(you know what that means ;))',
    '((another minigame))',
    '(:D!)', 
    '', 
    '', 
];
const images = require.context('./pics', true);
class ChapterTwo extends React.Component {
    constructor(props){
        super(props);
	this.snakeMinigame = this.snakeMinigame.bind(this);
    }

    snakeMinigame(callback, nextMessage){
        var erinhead = document.createElement("img");
	erinhead.src = images('./IMG-8121.PNG');

	var canvas = document.createElement("canvas");
	canvas.style.border = 'outset';
	canvas.width = 400;
	canvas.height = 400;
	document.getElementById("miniGame").innerHTML = "";
	document.getElementById("miniGame").appendChild(canvas);
	var context = canvas.getContext("2d");
	var score = 0;
	var count = 0;
	var grid = 20;
	var snake = {
	    x: 120, 
	    y: 120,
	    dx: grid, 
	    dy: 0,
	    cells: [],
	    body: 4
	};
	var apple = {
	    x: 100, 
	    y: 100,
	};
	function getRandomInt(min, max) {
	    return Math.floor(Math.random()*(max-min)) + min;
	}

	function loop() {
	    requestAnimationFrame(loop);
	    if(++count<4) {
	        return;
	    }
	    count = 0;
	    context.clearRect(0,0,canvas.width,canvas.height);
	    snake.x += snake.dx;
	    snake.y += snake.dy;
	    if(snake.x <0) {
	        snake.x = canvas.width;
	    }else if (snake.x>=canvas.width) {
	        snake.x=0;
	    }

	    if(snake.y<0) {
	        snake.y = canvas.height;
	    } else if(snake.y>=canvas.height) {
	        snake.y=0;
	    }
	    snake.cells.unshift({x: snake.x, y: snake.y});
	    if (snake.cells.length > snake.body) {
	       snake.cells.pop();
	    }
	    context.drawImage(erinhead, apple.x, apple.y, grid-1, grid-1);
	    
	    context.fillStyle = 'green';
	    snake.cells.forEach(function(cell, index) {
		if(index == 0) {
		    context.drawImage(erinhead, cell.x, cell.y, grid-1, grid-1);
		} else {
	            context.fillRect(cell.x, cell.y, grid-1, grid-1);
		}
		if (cell.x === apple.x && cell.y === apple.y) {
		    snake.body++;
		    apple.x = getRandomInt(0, 1)*grid;
		    apple.y=getRandomInt(0,1)*grid;
		}
		for(var i =index+1; i<snake.cells.length; i++){
		    if(cell.x===snake.cells[i].x && cell.y===snake.cells[i].y){
		        snake.x = 120;
			snake.y = 120;
			snake.cells=[];
			snake.body = 4;
			snake.dx = grid;
			snake.dy = 0;
			apple.x=getRandomInt(0,20)*grid;
			apple.y = getRandomInt(0, 20)*grid;
		    }
		}
	    });
	}
	function addListeners(){
	    document.addEventListener('keydown', function(e) {
	        if (e.which === 37 && snake.dx ===0){
		    snake.dx = -grid;
		    snake.dy = 0;
		} else if(e.which === 38 && snake.dy === 0) {
		    snake.dy = -grid;
		    snake.dx = 0;
		} else if (e.which === 39 && snake.dx === 0){
		    snake.dx = grid;
		    snake.dy = 0;
		} else if (e.which === 40 && snake.dy === 0) {
		    snake.dy = grid;
		    snake.dx = 0;
		}
	    });
	}
	addListeners();
	requestAnimationFrame(loop);
    }

    render() {
	var minigames = [
	    this.snakeMinigame,
	];
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange} minigames={minigames}/>
	);
    }
}

export default ChapterTwo;
