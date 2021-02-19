import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';
import DrumMachine from './DrumMachine';


class App extends React.Component{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return (
      <div className="App">
        <ReactFCCtest></ReactFCCtest>
        <DrumMachine/>
      </div>    
    );
  }

}

export default App;
