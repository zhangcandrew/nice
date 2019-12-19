import React from 'react';
import AutoScrollPage from './autoscroller.js';
import {displayOnGame} from './minigames.js';

var messages = [ 
    'spc:f:CHAPTER 1',
    'THE TROUBLE BEGINS',
    '(aka freshman year)',
    '',
    '',
    'erin',
    'spc:img:./erinchap1.JPG',
    '(18, mega-virgin, looks the same now, check out her post on SAD)',
    '',
    '',
    'yang',
    'spc:img:./yangchap1.JPG',
    '(18, wears pink, will laugh if you say dick or penis, 喜欢吃屁股)',
    '',
    '',
    'Andrew',
    'spc:img:./andrewchap1.jpg',
    '(19, all around great guy, has lots of friends, very cool,',
    'charming, handsome, can hold his breath for > 60 seconds,',
    'complete alpha, won 1st place in a piano competition in 2nd grade)',
    '',
    '',
    '',
    'The story begins when our hoes erin and yang enter college.',
    'Lost and without guidance, these two furiously search for',
    'an ultralight beam in their life. The year is 2016, kanye',
    'dropped The Life of Pablo, Drake dropped views, and life is good',
    'hearing from various sources, they both decide applying for', 
    ' a big through CASA is a good idea......',
    '',
    '',
    'get ready...',
    'it\'s time for a minigame!', 
    '(this shit took forever to code)', 
    '((not really))',
    '(but it\'s dope as F)',
    '(I don\'t think you guys are ready)',
    '(you don\'t understand)',
    '(this is my magnum OPUS)',
    '(prepare to have you mind EXPLODED)',
    '(FEAST your eyes on my champion FEAT)',
    '(as a programmer)',
    '(ok)',
    'spc:mg:0',
    '(pretty sick huh? B))',
    '...', 
    'ok well u were supposed to win that...', 
    'so the story would progress...', 
    '.', 
    'let\'s uh, try a version',
    'more your speed',
    'spc:mg:1',
    '', 
    'AND JUST LIKE THAT (1/4) OF THE DREAM TEAM WAS BUILT', 
    'spc:ga:./vicgif1.gif,./vicgif2.gif',
    'spc:f:CH1: EPILOGUE', 
    '',
    'Freshman year was filled with good vibes and fresh hope.', 
    'Yang and Erin, joined by their super charasmatic big', 
    'and loving/amazing/much better Co counter parts',
    'made new friends, danced their hearts out, ate 50 cent wings', 
    'got crazy trashed at parties and lived ignorantly bliss',
    '',
    '',
    'spc:f:how time flies :/',  
    'spc:ga:./IMG-7778.PNG,./IMG-7779.PNG,./IMG-7904.PNG,./IMG-7863.JPG,./IMG-8040.JPG,./IMG-7883.JPG,./IMG-9166.PNG,./erinugly.gif,./IMG-8110.PNG,./IMG-8112.PNG,./christmas.gif,./IMG-8861.JPG,./IMG-8039.JPG,./dance.gif,./IMG-8294.JPG,./IMG-8259.JPG,./IMG-8335.PNG,./IMG-8376.PNG,./IMG-8558.JPG,./IMG-8769.PNG,./IMG-8770.PNG', 
    '(scroll up to see the pics)', 
    '|', 
    '|', 
    'V', 
    '(click butt to continue)'
]

class ChapterOne extends React.Component {
    constructor(props){
        super(props);
	this.rapidClickMinigame = this.rapidClickMinigame.bind(this);
	this.rapidClickMinigame2 = this.rapidClickMinigame2.bind(this);
    }

    rapidClickMinigame(callback, nextMessage){
        var mashCount = 0;
	
	function addMashCount() {
	    mashCount += 1;
	}
	
	function tallyAndCheck() {
	    if(mashCount > 200) {
	        displayOnGame("wtf... you actually did it");
	    } else {
	        displayOnGame("you suck lol...  (" + mashCount + " clicks)");
	    }
	    setTimeout(callback, 2000, nextMessage);
	}
	
	function addButtonAndStartGame() {
		document.getElementById("miniGame").innerHTML = "";
		var button = document.createElement("button");
		button.onclick = () => { addMashCount() };
		button.id = "mashButton";
		button.innerHTML = "APPLY!";
		document.getElementById("miniGame").appendChild(button);
	}
	
	displayOnGame("Hit the button as fast as you can!");
	setTimeout(displayOnGame, 2500, "Hit the button over 200 times in 10 seconds to win!");
	setTimeout(addButtonAndStartGame, 5000);
	setTimeout(tallyAndCheck, 15000, callback, nextMessage);
    }

    rapidClickMinigame2(callback, nextMessage){
	function tallyAndCheck(callback, nextMessage) {
	    displayOnGame("yay! you did it!");
	    setTimeout(displayOnGame, 2000, "SUCCESSFULLY APPLIED FOR A BIG!");
	    setTimeout(displayOnGame, 4000, "(kudos to you that was hard D:!)");
	    setTimeout(callback, 6000, nextMessage);
	}

	function addButtonAndStartGame() {
		document.getElementById("miniGame").innerHTML = "";
		var button = document.createElement("button");
		button.id = "mashButton";
		button.innerHTML = "APPLY!";
		document.getElementById("miniGame").appendChild(button);
	}

	displayOnGame("Hit the button as fast as you can!");
	setTimeout(displayOnGame, 2500, "Hit the button over (-1) times in 10 seconds to win!");
	setTimeout(addButtonAndStartGame, 5000);
	setTimeout(tallyAndCheck, 15000, callback, nextMessage);
    }

    render() {
	var minigames = [
    	    this.rapidClickMinigame,
	    this.rapidClickMinigame2,
	];
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange} minigames={minigames}/>
	);
    }
}

export default ChapterOne;
