import './Result.css';
import React from 'react';


class Result extends React.Component{
  constructor(props)
  {
    super(props);
  }


  render()
  {
    return (
    <div className="Result"       
      style={{gridColumnStart:this.props.colStart,
        gridColumnEnd:this.props.colEnd,
        gridRowStart:this.props.rowStart,
        gridRowEnd:this.props.rowEnd,
      }}>
      <p className="Result-past"> {this.props.history}</p>
      <p id="display" className="Result-current">{this.props.current}</p>

    </div>
    );
  }
}

export default Result;
