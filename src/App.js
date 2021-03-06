import React from 'react';
import './App.css';
import './index.css';
import IntroPage from './introPage.js';
import Sike from './sike.js';
import ChapterOne from './chap1.js';
import ChapterTwo from './chap2.js';
import ChapterThree from './chap3.js';
import ChapterFour from './chap4.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0
    };
    this.childChangePageNum = this.childChangePageNum.bind(this);
  }
  
  childChangePageNum(nextPageNum) {
    this.setState({
        pageNum: nextPageNum
    });
  }

  displayProperPage(){
    if(this.state.pageNum === 0){
      return <IntroPage pageChange={this.childChangePageNum}/>;
    } else if(this.state.pageNum === 1){
      return <Sike pageChange={this.childChangePageNum}/>;
    } else if(this.state.pageNum === 2){
      return <ChapterOne pageChange={this.childChangePageNum}/>;
    } else if(this.state.pageNum === 3){
      return <ChapterTwo pageChange={this.childChangePageNum}/>;
    } else if(this.state.pageNum ===4){
      return <ChapterThree pageChange={this.childChangePageNum}/>;
    } else if(this.state.pageNum ===5){
      return <ChapterFour pageChange={this.childChangePageNum}/>;
    } else {
      return <div/>;
    }
  }
  
  render(){
     return (
      <div className="App">
        <header className="App-header">
	  <div id="omniBack" className="omniBack">
	     {this.displayProperPage()}
	  </div>
        </header>
      </div>
  );

  }
}

export default App;
