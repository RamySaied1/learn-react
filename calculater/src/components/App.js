import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';
import Calculater from './Calculater';


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
        <Calculater/>
      </div>    
    );
  }

}

export default App;
