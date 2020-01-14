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
    'in case you haven\'t noticed, the next button is disabled',
    '', 
    'D U M M Y',
    '',
    'so you can\'t skip my story',
    '.',
    '.',
    'We\'re moving at MY PACE now >:(',
    'GOT IT BUD?!',
    'jk jk haha',
    'I\'m dah website baby',
    '⏱',
    '⏱',
    'feel free to click next when I\'m done though',
    ':D',
    '(like now)',
]

class Sike extends React.Component {
    render() {
        return(
	    <AutoScrollPage nextPage={2} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default Sike;
