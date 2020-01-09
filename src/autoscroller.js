import React from 'react';
import './App.css';
import 'bootstrap/dist/css//bootstrap.min.css';
import Minigame  from './minigames.js';
import * as Masonry from 'masonry-layout';

var speed = 20; /* The speed/duration of the effect in milliseconds */
var messagePrintSpeed = 1500;
const images = require.context('./pics', true);
var typing = false;

class AutoScrollPage extends React.Component {
	constructor(props) {
		super(props);
		this.typeWriter = this.typeWriter.bind(this);
		this.rotateMessages = this.rotateMessages.bind(this);
		this.restartRotateMessages = this.restartRotateMessages.bind(this);
		this.tryRotateMessage = this.tryRotateMessage.bind(this);
		this.typeWritePictures = this.typeWritePictures.bind(this);
		this.waitForVid = this.waitForVid.bind(this);
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
	    typing=true;
	    var secondColon = message.substring(4, message.length).indexOf(":")+4;
	    var firstColon = message.indexOf(":");
	    var specialChar = message.substring(firstColon+1, secondColon);
	    var tempMessageArea = document.getElementById("tempMessageArea");
	    var realMessage = message.substring(secondColon+1, message.length);
	    if(specialChar  === "f"){
		var textBoxSize = tempMessageArea.clientWidth;
		var computedTextSize = parseFloat(getComputedStyle(tempMessageArea).fontSize);

		var n  = Math.floor(((textBoxSize/computedTextSize)-realMessage.length)/2);
		if(n < -1){
		    n = -1
		}
		var fillString = new Array(n+1).join("-");
	        var finalMessage = fillString+realMessage+fillString;
		this.typeWriter(finalMessage, 0);
	    } else if (specialChar === "img") {
	        var img = document.createElement("img");
		img.src = images(realMessage);
		img.className = "autoImage";
	        document.getElementById("rollingMessage").appendChild(img); 
		this.updateScrollHeight();
		typing=false;
	    } else if (specialChar === "mg") {
		var nextMessageIndex = currentMessage+1;
		var gameIndex = parseInt(realMessage);
	    	this.setState({
		    innerHTML: document.getElementById("rollingMessage").innerHTML,
		    nextMessage: nextMessageIndex,
		    minigameindex: gameIndex,
		    showMinigame: true,
		});
	    } else if (specialChar === "ga") {
	        var img_str_array = realMessage.split(",");
		var gallery = document.createElement("div");
		gallery.className = "picGallery";
		var id_substring = realMessage.substring(5, 10);
		gallery.id = id_substring;
		document.getElementById("rollingMessage").appendChild(gallery);
		for(var i=0; i<img_str_array.length; i++){
		    var image = document.createElement("img");
		    image.src = images(img_str_array[i]);
		    image.className="grid-item";
		    image.style = "visibility:hidden";
		    document.getElementById(id_substring).appendChild(image)
		}
		setTimeout((function(){new Masonry(gallery, {
		    itemSelector: ".grid-item",
	            columnWidth: 200
                });})(gallery), 700);
		var descendents = gallery.getElementsByTagName('*');
		gallery.style = "height:auto";
	    	setTimeout(this.typeWritePictures, 1000, descendents, 0);
	    } else if (specialChar === "v") {
	        var vid = document.createElement("video");
		vid.className = "messageVideo";
		vid.autoplay = false;
		vid.controls = true;
		vid.preload = "none";
		var source = document.createElement("source");
		source.src = images(realMessage);
		source.type ="video/mp4";
		vid.appendChild(source);
	        document.getElementById("rollingMessage").appendChild(vid);
		this.updateScrollHeight();
	        this.waitForVid(vid);
	    }
	}

	typeWriter(message, count) {
		if (count < message.length) {
			typing = true;
			document.getElementById("tempMessageArea").innerHTML += message.charAt(count);
			count++;
			setTimeout(this.typeWriter,speed, message, count);
		}else{
		    typing = false;
		}
	}

	waitForVid(vid){
	    if(vid.ended || vid.currentTime === vid.duration){
	        vid.autoplay = false;
	        typing = false;
		return;
	    }else{
	        setTimeout(this.waitForVid, 500, vid);
	    }
	}

	typeWritePictures(descendents, count) {
	    if(count < descendents.length) {
		typing = true;
	        descendents[count].style = "visibility:visible";
	        this.updateScrollHeight();
		count++;
		setTimeout(this.typeWritePictures, 500, descendents, count);
	    }else {
	        typing=false;
	    }
	}

	tryRotateMessage(messageCount){
	    if (typing === false) {
		setTimeout(this.rotateMessages, messagePrintSpeed, messageCount+1);
	    } else {
	        setTimeout(this.tryRotateMessage, 100, messageCount);
	    }
	}

	rotateMessages(messageCount) {
		if(messageCount < this.props.messages.length) {
		        this.clearAndUpdateRollingMessageBlock();
		        var i=0;
		        document.getElementById("rollingMessage").innerHTML += "<br><br>";
			if(this.props.messages[messageCount].substring(0, 4) === "spc:"){
			    this.printSpecialMessage(this.props.messages[messageCount], messageCount);
			    if(this.props.messages[messageCount].substring(4, 6) === "mg"){
			        return;
			    }
			} else {
			    this.typeWriter(this.props.messages[messageCount], i);
			}
			this.tryRotateMessage(messageCount);	
		} else{
			this.clearAndUpdateRollingMessageBlock();
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
