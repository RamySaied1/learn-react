import './App.css';
import Window from "./Window.js";
import React from 'react';
import marked from 'marked';
import ReactFCCtest from 'react-fcctest';
import defText from '../init.txt'


class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      text:""
    };
  }
  handleChange=(event)=>
  {
    this.setState({
      text:event.target.value
    });
    console.log(this.state.text);
  }
  setMarkup=()=>
  {
    let rawMarkup = marked(this.state.text, {sanitize: true});
    console.log(rawMarkup);
    return { __html: rawMarkup };
  }

  componentDidMount=()=>
  {
    fetch(defText, {mode: 'no-cors'})
    .then(response => response.text())
    .then(data=> {
      console.log(data);
      this.setState({text:data});
    })
    .catch(error => console.error(error));
  }
  render()
  {
    return (
      <div className="App">
        <ReactFCCtest />
        <Window width="50%" height="100px" input={true} text={this.state.text} header="editor" handleChange={this.handleChange} />
        <Window width="70%" header="Preview" input={false}  setMarkup={this.setMarkup}/>
      </div>
    );
  }

}

export default App;
