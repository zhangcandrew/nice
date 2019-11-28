var speed = 50; /* The speed/duration of the effect in milliseconds */
var messageCount = 0;
var messageBlocks = [
	"A long time ago...", 
	"Three friends came together to form a legendary friendship...",
	"This is the story of how Andrew,", 
	"...", 
	".....", 
	"............", 
	"RAJ, AND JACKIE BECAME Legendary friends"];

function typeWriter(message, count) {
	if (count < message.length) {
		document.getElementById("rollingMessage").innerHTML += message.charAt(count);
		count++;
		setTimeout(typeWriter, speed, message, count);
	} else {
		document.getElementById("messageButton").disabled = false;
	}
}

export function rotateMessages() {
	var i=0;
	if(messageCount < messageBlocks.length) {
		document.getElementById("rollingMessage").innerHTML += "<br>";
		typeWriter(messageBlocks[messageCount], i);
		messageCount+=1;
	}
}
