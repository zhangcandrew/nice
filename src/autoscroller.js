import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';

var speed = 25; /* The speed/duration of the effect in milliseconds */
var messageCount = 0;
var messagePrintSpeed = 2000;

class AutoScrollPage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
	}

	componentDidMount() {
	    this.rotateMessages();
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

	typeWriter(message, count) {
		if (count < message.length) {
			document.getElementById("tempMessageArea").innerHTML += message.charAt(count);
			count++;
			setTimeout(this.typeWriter,speed, message, count);
		}
	}

	rotateMessages() {
		this.clearAndUpdateRollingMessageBlock();
		var i=0;
		if(messageCount < this.props.messages.length) {
			document.getElementById("rollingMessage").innerHTML += "<br><br>";
			this.typeWriter(this.props.messages[messageCount], i);
			messageCount++;
			setTimeout(this.rotateMessages, messagePrintSpeed);
		} else{
		        this.props.pageChange(this.props.nextPage);
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
		        <button id="messageButton">--></button>
		    </div>
		</div>);
	}


}

export default AutoScrollPage;
