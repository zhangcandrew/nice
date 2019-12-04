import React from 'react';
import AutoScrollPage from './autoscroller.js';


var messages = [
    'spc:f:CHAPTER 1',
    'erin',
    'spc:img:./erinchap1.JPG',
    '(21, mega-virgin, depressed, thinks liking juiceWRLD is a personality trait)',
]

class ChapterOne extends React.Component {
    render() {
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default ChapterOne;
