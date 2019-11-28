import React from 'react';
import './App.css';
import './index.css';
import {rotateMessages} from './typewriter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<div className="omniBack">
	    <div className="rollingMessageBlock">
	      <p id="rollingMessage" className=".col-md-8">
	      </p>
	    </div>
      	    <button id="messageButton" onClick={() => {
		    document.getElementById("messageButton").disabled = true;
		    rotateMessages();
	    }}>--></button>
	</div>
      </header>
    </div>
  );
}

export default App;
