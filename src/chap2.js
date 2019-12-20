import React from 'react';
import AutoScrollPage from './autoscroller.js';
import {displayOnGame} from './minigames.js';

var messages = [ 
    'spc:f:CHAPTER 2',
    'YEAR OF THE PAINTER',
    '(hackerz in the swamp)', 
    '', 
    '',
    'spc:img:./swamphacks.gif',
    '(¯\\_(ツ)_/¯ erin)',
    '',
    'And thus began the journey that was swamphacks',
    'the story continues with our binches trying to find their spot', 
    'in college. The year is 2017, XO TOUR Llif3 launches Lil UV into the mainstream', 
    'Kendrick drops Damn. and Drake drops passionfruit.', 
    'lo-fi takes the world by storm setting the tone', 
    'for the depressive - bipolar - mania that encapsulates everyone throughout the year', 
    'Looking to beef up their resumes, our characters', 
    'decide to take on one of the greatest underpinnings of their life:', 
    '', 
    '', 
    'S W A M P H A C K S',
    '(D E P R E S S I O N)',
    '',
    'With Erin onboard as the logistics coordinator', 
    'Yang redefining our social media front', 
    'And Andrew being a dumb code monkey', 
    'this new chapter unfolds', 
    '',
    '',
    '',
    'spc:f:planning intermission',
    'tips from our sponsors:', 
    'spc:img:./IMG-9380.PNG', 
    'Leo: just have fun with planning SwampHacks!',
    '',
    'spc:img:./oop.JPG', 
    'Kanye: HUH HEH HAAAA UHHH oooooooh (deep breath) (he just talke to jesus) (he said waddup yeezus)', 
    '',
    'spc:img:./trunks.JPG',
    'Yang: you\'ll definitely want to plan some buses for logistics!', 
    '(uh oh! we didn\'t plan some buses for logistics yet!)', 
    '(you know what that means ;))',
    '((another minigame))',
    '(:D!)', 
    '', 
    '', 
]

class ChapterTwo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
	var minigames = [
	];
        return(
	    <AutoScrollPage nextPage={3} messages={messages} pageChange={this.props.pageChange} minigames={minigames}/>
	);
    }
}

export default ChapterTwo;
