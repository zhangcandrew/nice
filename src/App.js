import React from 'react';
import './App.css';
import './index.css';
import IntroPage from './introPage.js';
import ChapterOne from './chapter1.js';

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
      return <ChapterOne pageChange={this.childChangePageNum}/>;
    } else {
      return <div/>;
    }
  }
  
  render(){
     return (
      <div className="App">
        <header className="App-header">
	  <div className="omniBack">
	     {this.displayProperPage()}
	  </div>
        </header>
      </div>
  );

  }
}

export default App;
