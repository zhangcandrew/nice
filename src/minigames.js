export function CreateAndAnimateBox() {
    var omniBack = document.getElementById("omniBack");
    var messageAndButton = document.getElementById("messageAndButton");
    messageAndButton.style.display="none";
    var miniGameDiv = document.createElement("DIV");
    miniGameDiv.id = "miniGame";
    miniGameDiv.style.height = "0px";
    miniGameDiv.style.width = "0px";
    omniBack.appendChild(miniGameDiv);
    var screenHeight = omniBack.clientHeight - 70;
    var screenWidth = omniBack.clientWidth;
    var interval =  setInterval(animateBox, 10);
    var posHeight = 0;
    var posWidth = 0;
    function animateBox(){
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
    setTimeout(getReady, 3000);
}

function pixelToNum(pixelNum) {
    var indexOfEnd = pixelNum.indexOf("px");
    var actualNum = pixelNum.substring(0, indexOfEnd);
    return parseInt(actualNum);
}

function getReady() {
    displayOnGame("G E T     R E A D Y!");
    setTimeout(displayOnGame, 2000, "3");
    setTimeout(displayOnGame, 3000, "2");
    setTimeout(displayOnGame, 4000, "1");
    setTimeout(displayOnGame, 5000, "GO!");
    setTimeout(displayOnGame, 6000, "");
}

function displayOnGame(message) {
    var gameDiv = document.getElementById("miniGame");
    gameDiv.innerHTML = message;
}
