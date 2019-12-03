import React from 'react';
import AutoScrollPage from './autoscroller.js';


var messages = [
    'S    I   K   E', 
    'I\'m only kidding', 
    '.', 
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '-------------CHAPTER 1---------', 
]

class ChapterOne extends React.Component {
    render() {
        return(
	    <AutoScrollPage nextPage={2} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default ChapterOne;
