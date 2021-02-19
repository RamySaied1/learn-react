import './OptionSelector.css';
import React from 'react';


class OptionSelector extends React.Component{
  constructor(props)
  {
    super(props);
  }


  render()
  {
    let direction= ( this.props.option=="1" ) ?"row":"row-reverse";
    return (
    <div className="Container">
      <h3 className="text">{this.props.text}</h3>
      <div className="OptionSelector" 
      style={{flexDirection:direction, width:this.props.width,height:this.props.height}}
      onClick={this.props.onClick} >
        <div className="OptionOne" />
      </div>
    </div>
    );
  }
}

export default OptionSelector;
