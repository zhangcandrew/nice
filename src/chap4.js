import React from 'react';
import AutoScrollPage from './autoscroller.js';

var messages = [
    'spc:f:graduated',
    '(congrats!)',
    '', 
    '',
    '', 
    'I feel like there isn\'t much left to say', 
    'It\'s been crazy knowing you guys and acting as a', 
    '(dare I say)', 
    'm e n t o r', 
    'for you both,',
    'but honestly, you guys never needed it.',
    '',
    '',
    'As absent of a big I was, I\'m glad we got as close as we did', 
    'and seeing as you guys are both employed, on the cusp of', 
    'going beyond (plus ultra) college to do even bigger and better things', 
    '...', 
    '', 
    'I suppose it\'s an appropriate time to take off the fake "helm" of mentor/big/fuckboy supreme', 
    '',
    '',
    'congrats again on graduating!!',
    '(never thought it\'d happen)',
    '(jk jk)', 
    '',
    '', 
    ':)',
    '',
    'I\'ll see you around!',
    'spc:img:./finale2.jpg',
    '', 
    'spc:img:./finale.jpg',

]

class ChapterFour extends React.Component {
    render() {
        return(
	    <AutoScrollPage nextPage={6} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default ChapterFour;
