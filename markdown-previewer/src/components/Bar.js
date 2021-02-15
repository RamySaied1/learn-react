import './Bar.css';
import React from 'react';
import logo from '../images/fire.png';
import expand from '../images/expand.svg';


class Bar extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="Bar" style={{width:this.props.width}}>
        <img className="Bar-icon" src={logo}></img>
        <p className="Bar-header">{this.props.header}</p>
        <div className="Bar-grow" onclick={()=>{}} >
          <img className="grow-icon" src={expand}/>
        </div>
      </div>
    );
  }
}

export default Bar;
