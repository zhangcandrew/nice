import React from 'react';
import AutoScrollPage from './autoscroller.js';

var messages = [
    'spc:f:CHAPTER 3',
    '', 
    '',
    '', 
    'Andrew went on a journey to the west to find himself',
    '', 
    'Erin and Yang found themselves right there in Florida', 
    '', 
    '',
    'Fall semester came and went', 
    '',
    'we became more responsible',
    '',
    'Took on interviews,',
    '',
    'talked about jobs',
    '', 
    'Started looking towards our futures and the greater beyond',
    '(that which lies past college)',
    '',
    'It seemed like it was time to finally outgrow our juvenile selves',
    'that was until...',
    '', 
    '', 
    '', 
    'BOO! 8==D', 
    '(did i scare you?)',
    'THAT\'S RIGHT, A FINAL HURRAH! ANOTHER ROUND OF DEGENERACY AD INFINUM',
    '', 
    '', 
    'spc:f:Degeneracy Hall of Fame',
    'spc:ga:./memes1.jpg,./memes2.jpg,./memes3.jpg,./memes4.jpg,./memes5.jpg,./memes6.jpg,./memes7.jpg,./memes8.jpg,./memes9.jpg,./memes10.jpg,./memes11.jpg,./memes12.jpg,./memes13.jpg,./memes14.jpg,./memes15.jpg,./memes16.jpg,./memes17.jpg,./memes18.jpg,./memes19.jpg,./memes20.jpg,./memes21.jpg,./memes22.jpg,./memes23.jpg,./memes24.jpg,./memes25.jpg,./memes26.jpg,./memes27.jpg,./memes28.jpg,./memes29.jpg,./memes30.jpg,./memes31.jpg,./memes32.jpg,./memes33.jpg,./memes34.jpg,./memes35.jpg,./memes36.jpg,./memes37.jpg,./memes38.jpg,./memes39.jpg',
    'spc:v:./memes40.mp4', 
    'spc:v:./memes45.mp4',
    'spc:v:./memes42.mp4',
    '', 
    '',
    'unfortunately, spring semester went just as fast as it came...',
    '',
    'as with all things, the degeneracy had to end', 
    'it was a fun semester', 
    'filled with more memories than I thought I could hold',
    '',
    'spc:img:./memefinale.jpg',
    'and a fitting final hurrah to the story', 
    '', 
    ':\')'
]

class ChapterThree extends React.Component {
    render() {
	var minigames = [
	];
        return(
	    <AutoScrollPage nextPage={5} messages={messages} pageChange={this.props.pageChange} minigames={minigames}/>
	);
    }
}

export default ChapterThree;
