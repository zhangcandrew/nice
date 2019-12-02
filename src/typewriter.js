import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';

var speed = 50; /* The speed/duration of the effect in milliseconds */
var messageCount = 0;
var messageBlocks = [
	"A long time ago...", 
	"(4 years)",
	"Three(3) strangers met for the first time...",
	"They were brought together through cultural clubs...",
	"(CASA, FSA, SASE, Blood (brothers), BXO, KPL, Michele)",
	"And although they (~21, degenerate)x2 didn't know it yet...",
	"with time, they would come together to form a LEGENDARY friendship...",
	"...",
	"Through the numerous all caps chats",
	"(messenger, imessage, text for android, paper/ink medium)",
	"To the multiple shared classes",
	"(CALC 3, COP3530, OS with Blanchard, Discrete with Ungor, Discrete with ur mom)",
	"To the late night taco bell orders",
	"(1 beefy frito burrito, 1 large Baja blast,", 
	"50/50 cinammon twist, 1 loaded potato griller, 2 soft shell tacos,",
	"30% chance of crying, 30% chance of talking about crushes", 
	"100% concentrated power and will",
	"1 zoot, 1 ether", 
	"99 problems",
	"(a bitch ain't one)",
	"6 quesaritos, 4 taquenos (if in season), 1 bean and cheese burrito",
	"and good times :))",
	"...",
	"This is the story of how",
	"Andrew,",
	".", 
	"Raj,",
	".",
	"and Jackie",
	"moved to their uncle in Bel-Air"
];

class MessagePage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
	}

	updateScrollHeight() {
	    var messageBlock = document.getElementById("rollingMessageBlock");
	    messageBlock.scrollTop = messageBlock.scrollHeight;
	}

	clearAndUpdateRollingMessageBlock(message) {
	    document.getElementById("tempMessageArea").innerHTML = "";
	    document.getElementById("rollingMessage").innerHTML += message;
	    this.updateScrollHeight()
	}

	typeWriter(message, count) {
		if (count < message.length) {
			document.getElementById("tempMessageArea").innerHTML += message.charAt(count);
			count++;
			setTimeout(this.typeWriter,speed, message, count);
		} else {
			this.clearAndUpdateRollingMessageBlock(message);
			document.getElementById("messageButton").disabled = false;
			this.setState({pageNum: 1});
		}
	}

	rotateMessages() {
		document.getElementById("messageButton").disabled = true;
		var i=0;
		if(messageCount < messageBlocks.length) {
			document.getElementById("rollingMessage").innerHTML += "<br><br>";
			this.typeWriter(messageBlocks[messageCount], i);
			messageCount++;
		}
	}

	render() {
		return(<div className="rollingMessageBlockAndButton col-md-12">
		    <div id="rollingMessageBlock" className="rollingMessageBlock rollingMessageFont col-md-12">
		      <p id="rollingMessage">
		      </p>
		      <p id="tempMessageArea"/>
		    </div>
		    <div className="col-md-12">
		        <button id="messageButton" onClick={this.rotateMessages}>--></button>
		    </div>
		</div>);
	}


}

export default MessagePage;
