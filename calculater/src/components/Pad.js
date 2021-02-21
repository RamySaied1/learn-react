import './Pad.css';
import React from 'react';


class Pad extends React.Component{
  constructor(props)
  {
    super(props);
  }

  onClick=()=>{
    const audioEl = document.getElementById(this.props.text);
    audioEl.play();
    this.props.lastAction(this.props.id);
    }

  render()
  {
    let onclick;

    if (this.props.addNumber!='')
    {
      onclick=()=>this.props.addNumber(this.props.text);
    }
    else if (this.props.addDot!='')
    {
      onclick=()=>this.props.addDot(this.props.text);
    }
    else if (this.props.ac!='')
    {
      onclick=this.props.ac;
    }
    else if (this.props.op!='')
    {
      onclick=()=>this.props.op(this.props.text);
    }
    else if (this.props.equals!='')
    {
      onclick=this.props.equals;
    }
    else
    {
      onclick=()=>{};
    }

    return (
      <button onClick={onclick}
      className="Pad" 
      id={this.props.id}
      style={{gridColumnStart:this.props.colStart,
      gridColumnEnd:this.props.colEnd,
      gridRowStart:this.props.rowStart,
      gridRowEnd:this.props.rowEnd,
      backgroundColor:this.props.color
      }}>
        {this.props.text}
      </button>
    );
  }
}

Pad.defaultProps = {
  addNumber: '',
  ac: '',
  op:'',
  equals:'',
  addDot:''
};

export default Pad;
