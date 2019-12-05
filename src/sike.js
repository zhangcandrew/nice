import React from 'react';
import AutoScrollPage from './autoscroller.js';


var messages = [
    'S   I   K   E',
    '',
    '',
    'I\'m only kidding', 
    '.',
    'read the freakin website name I  D  I  O  T',
    '',
    '',
    '',
    'ok stop being so impatient',
    'if you\'re rapidly clicking the button, stop!',
    'I have a freakin story to tell jeez',
    '',
    '',
    'you know what I\'m gonna go ahead and disable that next button',
    'so you can\'t skip my story',
    'only till I let you click',
    'I\'m the website, I can do whatever the hell I want :D',
    '.',
    '.',
    'take my time to tell my story',
    'reminisce and all',
    '.',
    '',
    '',
    '',
    'just gonna keep you on this page a little longer',
    '⏱',
    '⏱',
    'alright you can click next',
]

class Sike extends React.Component {
    render() {
        return(
	    <AutoScrollPage nextPage={2} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default Sike;
