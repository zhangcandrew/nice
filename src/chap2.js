import React from 'react';
import AutoScrollPage from './autoscroller.js';
import {displayOnGame} from './minigames.js';

var messages = [ 
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
    'Closed on a Sunday: You my chik fil a', 
    '',
    'spc:img:./trunks.JPG',
    'Yang: you\'ll definitely want to post a lot to social media!', 
    '(uh oh! we didn\'t post a lot to social media!!)', 
    '(you know what that means ;))',
    '((another minigame))',
    '',
    '',
    '(:D!)', 
    '', 
    '', 
    'spc:mg:0',
    'with yang hard at work on social media', 
    'SwampHacks grew its Instagram follower count to 100+ followers!',
    '(from nothing)', 
    '( B) pretty sick bitches)',
    '', 
    'spc:f:logistics intermission', 
    '',
    'erin didn\'t do anything significant for swamphacks', 
    'out of respect for her, I still made a minigame', 
    'spc:mg:1',
    '', 
    'spc:f:G R E A T S U C C E S S',
    'spc:v:./sh4.mp4',
    '', 
    '', 
    'and just like that swamphacks was over', 
    'through the flurry of planning, over the summer meetings,',
    'bouts with the school, logistical nightmares', 
    'social media frenzy and website shenanigans, we pulled together', 
    'a pretty awesome SwampHacks if I do say so myself', 
    '', 
    '', 
    'It\'s something that brought us closer and a memory I\'ll cherish', 
    'forever.', 
    '',
    '',
    'for this one all I can say is thanks', 
    'for being my teammates', 
    'for believing in something before it was material', 
    'for following me into the swamp, and emerging', 
    'tired,', 
    'tattered,',
    'sick,', 
    'missing sleep,',
    '',
    'and yet accomplished.',
    'spc:img:./shclose.JPG',
];
const images = require.context('./pics', true);
class ChapterTwo extends React.Component {
    constructor(props){
        super(props);
	this.snakeMinigame = this.snakeMinigame.bind(this);
        this.postMinigame = this.postMinigame.bind(this);
    }

    postMinigame(callback, nextMessage){
	var allImages = [
	    './IMG-9166.PNG',
	    './yang1.jpg',
	    './yang2.jpg',
	    './yang3.jpg',
	    './yang11.jpg',
	    './yang4.jpg',
	    './yang10.jpg',
	    './yang5.jpg',
	    './yang6.jpg',
	    './yang7.jpg', 
	    './yang8.jpg', 
	    './yang9.jpg',
	];
	var allCoords = [
	    "475,785,504,781,513,809,477,808,505,827,532,828,537,839,510,850",
	    "94,236,135,236,135,252,97,252",
	    "179,110,203,114,200,125,179,121",
	    "86,70,99,68,99,78,86,80",
	    "72,82,100,84,102,108,72,108",
	    "189,356,225,357,227,375,191,378",
	    "157,155,178,159,178,174,159,171",
	    "226,198,261,224,261,202,226,222",
	    "166,116,195,127,195,141,165,132", 
	    "164,324,248,318,247,363,174,367", 
	    "123,126,151,126,150,139,124,142", 
	    "328,326,370,336,364,357,324,348",
	];
        function finishGame(){
	    displayOnGame("yay! You did it!");
	    setTimeout(displayOnGame, 2000, "SUCCESSFULLY SOCIAL MEDIA!");
	    setTimeout(callback, 4000, nextMessage);
	}
        function createAndAppendImageAndMap(imIndex, coordIndex){
	    if(imIndex === allImages.length){
		finishGame();
		return;
	    }
            var miniGame = document.getElementById("miniGame");
	    miniGame.innerHTML = "";
	    var image = document.createElement("img");
	    image.className = "yangMinigame";
	    image.src = images(allImages[imIndex]);
	    image.useMap="#image-map";
	    miniGame.appendChild(image);
   
	    var map = document.createElement("map");
	    map.name="image-map";
	    var area = document.createElement("area");
	    area.href="#";
            area.onclick= () => {createAndAppendImageAndMap(imIndex+1, coordIndex+1)};
	    area.coords = allCoords[coordIndex];
	    area.shape = "poly";
	    map.appendChild(area);
	    miniGame.appendChild(map);
	}
	function startGame(){
	    displayOnGame("Help Yang with social media by picking his nose!");
	    setTimeout(displayOnGame, 2500, "Pick Yang's nose 12 times to win!");
	    setTimeout(createAndAppendImageAndMap, 5000, 0, 0);
	}
	startGame();
    }

    snakeMinigame(callback, nextMessage){
        var erinhead = document.createElement("img");
	erinhead.src = images('./IMG-8121.PNG');
	var stopGameID = 0;
	var stopGame = false;
	var notEndedAndReturned = true;
	var canvas = document.createElement("canvas");
	canvas.style.border = 'outset';
	canvas.width = 400;
	canvas.height = 400;
	document.getElementById("miniGame").innerHTML = "";
	document.getElementById("miniGame").appendChild(canvas);
	var context = canvas.getContext("2d");
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
	function endAndReturn(){
	    notEndedAndReturned = false;
	    displayOnGame("Yay you did it!")
	    setTimeout(displayOnGame, 2000, "SUCCESSFULLY HELPED ERIN LOGISTICS!");
	    setTimeout(displayOnGame, 4000, "(actually you coulda done nothing and won too)");
	    setTimeout(displayOnGame, 6000, "(like the real deal)");
	    setTimeout(callback, 9000, nextMessage);
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
		if(index === 0) {
		    context.drawImage(erinhead, cell.x, cell.y, grid-1, grid-1);
		} else {
	            context.fillRect(cell.x, cell.y, grid-1, grid-1);
		}
		if (cell.x === apple.x && cell.y === apple.y) {
		    snake.body++;
		    apple.x = getRandomInt(0, 6)*grid;
		    apple.y=getRandomInt(0,6)*grid;
		}
		for(var i =index+1; i<snake.cells.length; i++){
		    if(cell.x===snake.cells[i].x && cell.y===snake.cells[i].y){
		        stopGame = true;
		    }
		}
	    });
	    if(stopGame) {
	        cancelAnimationFrame(stopGameID);
		if(notEndedAndReturned){
		    endAndReturn();
		}
	    }
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
	stopGameID = requestAnimationFrame(loop);
    }

    

    render() {
	var minigames = [
	    this.postMinigame,
	    this.snakeMinigame,
	];
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange} minigames={minigames}/>
	);
    }
}

export default ChapterTwo;
