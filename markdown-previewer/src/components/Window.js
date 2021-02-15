import './Window.css';
import React from 'react';
import Bar from "./Bar.js";

class Window extends React.Component{
  constructor(props){
    super(props);
 
  }



  render()
  {
    return (
      <div  className="Window" style={{width:this.props.width}}>
        <Bar width="100%" header={this.props.header}/>
        {
        this.props.input && 
        <textarea id={this.props.header.toLowerCase()} 
        onInput={this.props.handleChange}
        className="content" 
        style={{height:this.props.height,width:"98%" ,padding:"1%"}}
        value={this.props.text}>
        </textarea>
        }
        {
          !this.props.input && 
          <div id={this.props.header.toLowerCase()}
          className="content-html" style={{height:this.props.height,width:"98%" ,padding:"1%"}}
          dangerouslySetInnerHTML={this.props.setMarkup()} />
        }
      </div>
    );
  }
}

export default Window;
