import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagePage from './typewriter.js';

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
	"and a partridge in a pear tree)",
	"...",
	"This is the story of how",
	"Andrew,",
	".", 
	"Raj,",
	".",
	"and Jackie",
	"moved to their uncle in Bel-Air"
];

class IntroPage extends React.Component {
    render() {
        return(
	    <MessagePage messages={messageBlocks} nextPage={1} pageChange={this.props.pageChange}/>
	);
    }
}

export default IntroPage;
