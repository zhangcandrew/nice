import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';

var speed = 50; /* The speed/duration of the effect in milliseconds */
var messageCount = 0;

class MessagePage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
	}

	updateScrollHeight() {
	    var messageBlock = document.getElementById("rollingMessage");
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
		} else {
			document.getElementById("messageButton").disabled = false;
		}
	}

	rotateMessages() {
		document.getElementById("messageButton").disabled = true;
		this.clearAndUpdateRollingMessageBlock();
		var i=0;
		if(messageCount < this.props.messages.length) {
			document.getElementById("rollingMessage").innerHTML += "<br><br>";
			this.typeWriter(this.props.messages[messageCount], i);
			messageCount++;
		} else {
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
		        <button id="messageButton" onClick={this.rotateMessages}>--></button>
		    </div>
		</div>);
	}


}

export default MessagePage;
