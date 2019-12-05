import React from 'react';
import AutoScrollPage from './autoscroller.js';


var messages = [
    'spc:f:CHAPTER 1',
    'THE TROUBLE BEGINS',
    '(aka freshman year)',
    '',
    '',
    'erin',
    'spc:img:./erinchap1.JPG',
    '(18, mega-virgin, looks the same now, thinks liking juiceWRLD is a personality trait)',
    '',
    '',
    'yang',
    'spc:img:./yangchap1.JPG',
    '(18, wears pink, will laugh if you say dick or penis, 喜欢吃屁股)',
    '',
    '',
    'Andrew',
    'spc:img:./andrewchap1.jpg',
    '(19, all around great guy, has lots of friends, very cool,',
    'charming, handsome, can hold his breath for > 60 seconds,',
    'complete alpha, won 1st place in a piano competition in 2nd grade)',
    '',
    '',
    '',
    'The story begins when our hoes erin and yang enter college.',
    'Lost and without guidance, these two furiously search for',
    'an ultralight beam in their life. The year is 2016, kanye',
    'dropped The Life of Pablo, Drake dropped views, and life is good',
    'hearing from various sources, they both decide applying for', 
    ' a big through CASA is a good idea......',
    '',
    '',
    'get ready',
    'minigame START!',
    'spc:mg:1',
]

class ChapterOne extends React.Component {
    constructor(props){
        super(props);
	var minigames = [
	    this.rapidClickMinigame,
	]

    } 

    render() {
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange}/>
	);
    }
}

export default ChapterOne;
