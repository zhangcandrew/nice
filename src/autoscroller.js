import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';
import {CreateAndAnimateBox} from './minigames.js';

var speed = 20; /* The speed/duration of the effect in milliseconds */
var messagePrintSpeed = 2200;
const images = require.context('./pics', true);

class AutoScrollPage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
	}

	componentDidMount(){
	    this.rotateMessages(0);
	}

	updateScrollHeight() {
	    var messageBlock = document.getElementById("rollingMessageBlock");
	    messageBlock.scrollTop = messageBlock.scrollHeight;
	}

	clearAndUpdateRollingMessageBlock() {
	    var tempMessageArea = document.getElementById("tempMessageArea");
	    var rollingMessage = document.getElementById("rollingMessage");
	    rollingMessage.innerHTML += tempMessageArea.innerHTML;
	    tempMessageArea.innerHTML = "";
	    this.updateScrollHeight()
	}

	printSpecialMessage(message, currMessage){
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
	        CreateAndAnimateBox(this.props.minigames[parseInt(realMessage)], function() { this.rotateMessages(currMessage+1)});
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

	render() {
		return(<div id="messageAndButton" className="rollingMessageBlockAndButton col-md-12">
		    <div id="rollingMessageBlock" className="rollingMessageBlock rollingMessageFont col-md-12">
		      <p id="rollingMessage">
		      </p>
		      <p id="tempMessageArea"/>
		    </div>
		    <div className="col-md-12">
		        <button id="messageButton" onClick={()=>{}}>--></button>
		    </div>
		</div>);
	}


}

export default AutoScrollPage;
