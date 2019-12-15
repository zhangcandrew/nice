import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';
import Minigame  from './minigames.js';

var speed = 20; /* The speed/duration of the effect in milliseconds */
var messagePrintSpeed = 2200;
const images = require.context('./pics', true);

class AutoScrollPage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
		this.restartRotateMessages = this.restartRotateMessages.bind(this);
		this.state = {
		    innerHTML: "",
		    nextMessage: 1,
		    minigameindex: -1, 
		    showMinigame: false
		};
	}

	componentDidMount(){
	    this.rotateMessages(0);
	}

	restartRotateMessages(nextMessage){
		this.setState({
		    showMinigame: false
		});
		this.rotateMessages(nextMessage);
	}

	updateScrollHeight() {
	    var messageBlock = document.getElementById("rollingMessage");
	    messageBlock.scrollTop = messageBlock.scrollHeight;
	}

	clearAndUpdateRollingMessageBlock() {
	    console.log("cleared and updated");
	    var tempMessageArea = document.getElementById("tempMessageArea");
	    var rollingMessage = document.getElementById("rollingMessage");
	    rollingMessage.innerHTML += tempMessageArea.innerHTML;
	    tempMessageArea.innerHTML = "";
	    this.updateScrollHeight()
	}

	printSpecialMessage(message, currentMessage){
	    var secondColon = message.substring(4, message.length).indexOf(":")+4;
	    var firstColon = message.indexOf(":");
	    var specialChar = message.substring(firstColon+1, secondColon);
	    var tempMessageArea = document.getElementById("tempMessageArea");
	    var realMessage = message.substring(secondColon+1, message.length);
	    if(specialChar  === "f"){
		var textBoxSize = tempMessageArea.clientWidth;
		var computedTextSize = parseFloat(getComputedStyle(tempMessageArea).fontSize);

		var n  = Math.floor(((textBoxSize/computedTextSize)-realMessage.length)/2);
		var fillString = new Array(n+1).join("-");
	        var finalMessage = fillString+realMessage+fillString;
		this.typeWriter(finalMessage, 0);
	    } else if (specialChar === "img") {
	        var img = document.createElement("img");
		img.src = images(realMessage);
		img.className = "autoImage";
	        document.getElementById("rollingMessage").appendChild(img); 
		this.updateScrollHeight();
	    } else if (specialChar === "mg") {
		var nextMessageIndex = currentMessage+1;
		var gameIndex = parseInt(realMessage);
	    	this.setState({
		    innerHTML: document.getElementById("rollingMessage").innerHTML,
		    nextMessage: nextMessageIndex,
		    minigameindex: gameIndex,
		    showMinigame: true,
		});
	    }
	}

	typeWriter(message, count) {
		if (count < message.length) {
			document.getElementById("tempMessageArea").innerHTML += message.charAt(count);
			count++;
			setTimeout(this.typeWriter,speed, message, count);
		}
	}

	rotateMessages(messageCount) {
		this.clearAndUpdateRollingMessageBlock();
		var i=0;
		if(messageCount < this.props.messages.length) {
			document.getElementById("rollingMessage").innerHTML += "<br><br>";
			if(this.props.messages[messageCount].substring(0, 4) === "spc:"){
			    this.printSpecialMessage(this.props.messages[messageCount], messageCount);
			    if(this.props.messages[messageCount].substring(4, 6) === "mg"){
			        return;
			    }
			} else {
			    this.typeWriter(this.props.messages[messageCount], i);
			}
			setTimeout(this.rotateMessages, messagePrintSpeed, messageCount+1);
		} else{
		        document.getElementById("messageButton").onclick = () => {this.props.pageChange(this.props.nextPage)};
		}
	}

	displayMinigame(){
	    return <Minigame callback={this.restartRotateMessages} nextMessage={this.state.nextMessage} minigame={this.props.minigames[this.state.minigameindex]}/>;
	}

	displayRollingText(){
	    return <div id="messageAndButton" className="rollingMessageBlockAndButton col-md-12">
		    <div id="rollingMessageBlock" className="rollingMessageBlock rollingMessageFont col-md-12">
		      <div id="rollingMessage">
		      </div>
		      <p id="tempMessageArea"/>
		    </div>
		    <div className="col-md-12">
			<button id="messageButton" onClick={()=>{}}>--></button>
		    </div>
		  </div>;
    	}
	

	render() {
		if(this.state.showMinigame === false){
			return this.displayRollingText();
		} else {
			return this.displayMinigame();
		}
	}


}

export default AutoScrollPage;
