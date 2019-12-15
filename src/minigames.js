import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';

class Minigame extends React.Component {
	constructor(props) {
		super(props);
		this.pixelToNum = this.pixelToNum.bind(this);
		this.CreateAndAnimateBox = this.CreateAndAnimateBox.bind(this);
		this.getReady = this.getReady.bind(this);
	}

	componentDidMount(){
	    this.CreateAndAnimateBox(this.props.minigame);
	}

	CreateAndAnimateBox(gameFunc) {
	    var omniBack = document.getElementById("omniBack");
	    var miniGameDiv = document.getElementById("miniGame");
            var screenHeight = omniBack.clientHeight - 70;
	    var screenWidth = omniBack.clientWidth;
	    var interval =  setInterval(animateBox, 10, this.pixelToNum);
	    var posHeight = 0;
	    var posWidth = 0;
	    function animateBox(pixelToNum){
		if (pixelToNum(miniGameDiv.style.height) >= screenHeight  && pixelToNum(miniGameDiv.style.width) >= screenWidth) {
		    clearInterval(interval);
		} else {
		    if(pixelToNum(miniGameDiv.style.height) < screenHeight){
			miniGameDiv.style.height = posHeight+'px';
			posHeight += 10;
		    }
		    if(pixelToNum(miniGameDiv.style.width) < screenWidth){ 
			miniGameDiv.style.width = posWidth + 'px';
			posWidth += 10;
		    }
		}
	    }
	    setTimeout(this.getReady, 3000, gameFunc);
	}

	pixelToNum(pixelNum) {
	    var indexOfEnd = pixelNum.indexOf("px");
	    var actualNum = pixelNum.substring(0, indexOfEnd);
	    return parseInt(actualNum);
	}

        getReady(gameFunc) {
	    displayOnGame("G E T     R E A D Y!");
	    setTimeout(displayOnGame, 2000, "3");
	    setTimeout(displayOnGame, 3000, "2");
	    setTimeout(displayOnGame, 4000, "1");
	    setTimeout(displayOnGame, 5000, "GO!");
	    setTimeout(gameFunc, 6000, this.props.callback, this.props.nextMessage);
	}

	render(){
	    return <div style={{height: '0px', width: '0px'}} id="miniGame"/>;
	}
}

export default Minigame;
export function displayOnGame(message) {
	    var gameDiv = document.getElementById("miniGame");
	    gameDiv.innerHTML = message;
}
