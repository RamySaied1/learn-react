import './DrumPad.css';
import React from 'react';


class DrumPad extends React.Component{
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
    let soundClass=this.props.clicked=="Yes"?"drum-padActive":"drum-pad";
    return (
      <button className={soundClass}
        ref={this.props.innerRef}
        id={this.props.id}
        style={{width:this.props.width,
           height:this.props.height,
           marginLeft:this.props.margin,
           marginRight:this.props.margin}}
        onClick={this.onClick}>
          <audio className="clip" id={this.props.text} src={this.props.url}></audio>
        {this.props.text}
      </button>
    );
  }
}

export default DrumPad;
