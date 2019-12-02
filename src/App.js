import React from 'react';
import './App.css';
import './index.css';
import MessagePage from './typewriter.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0
    }
  }

  displayProperPage(){
    if(this.state.pageNum === 0){
      return <MessagePage/>;
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
