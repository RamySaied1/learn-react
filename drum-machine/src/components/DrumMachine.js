import './DrumMachine.css';
import React from 'react';
import DrumPad from './DrumPad.js';
import {bankOne,bankTwo} from '../banks.js';
import OptionSelector from './OptionSelector';


class DrumMachine extends React.Component{
  constructor(props)
  {
    super(props);

    this.divDrum=React.createRef();

    this.state={
      bankOne:bankOne,
      bankTwo:bankTwo,
      currentBank:0,
      power:1,
      currentClicked:null,
      lastAction:"Bank 1"
    };
  }
  componentDidMount()
  {
    this.divDrum.focus();
  }
  changeLastAction=(text)=>
  {
    this.setState(Object.assign({},this.state,{lastAction:text}));
  }
  onKeyPress=(event)=>
  {
    if (this.state.power!=1) return;
    let bank=this.state.currentBank==0?this.state.bankOne:this.state.bankTwo;
  
    for (let i=0;i<bank.length;i++)
    {
      if(Number(bank[i].keyCode) == event.keyCode )
        {
          document.getElementById(bank[i].keyTrigger).play();
          this.setState(Object.assign({},this.state,{currentClicked:bank[i].id,lastAction:bank[i].id}));
          setTimeout(() => {
            this.setState(Object.assign({},this.state,{currentClicked:null}));
          }, 100);
        }
    }
  }
  changeBank=()=>
  {
    if (this.state.power!=1) return;
    let currentBank=(this.state.currentBank+1)%2;
    let lastAction="Bank "+String((currentBank+1));
    console.log(currentBank);
    this.setState(
      Object.assign({},this.state,{currentBank:currentBank,lastAction:lastAction})
    );
  }
  changePower=()=>
  {
    let power=(this.state.power+1)%2;
    let lastAction=power==0? "Power "+"OFF": "Power "+"On";
    console.log(power);
    this.setState(
      Object.assign({},this.state,{power:power,lastAction:lastAction})
    );
  }

  render()
  {
    let bank=this.state.currentBank==0?bankOne:bankTwo;
    let optionBank=this.state.currentBank==0?"1":"2";
    let optionPower=this.state.power==0?"1":"2";
    let disabled=this.state.power==0?"Yes":"No";

    return (
      <div  id="drum-machine" tabIndex="0" className="DrumMachine" ref={(input) => { this.divDrum = input; }} onKeyDown={this.onKeyPress}>
        <div  className="DrumPads">
          {bank.map((el,i)=>
              <DrumPad 
            key={i}
            width="30%" 
            height="30%" 
            margin="1%"
            disabled={disabled}
            lastAction={this.changeLastAction}
            clicked={this.state.currentClicked==el.id?"Yes":"No"}
            innerRef={el.ref}
            text={el.keyTrigger}
            keyCode={el.keyCode}
            keyTrigger={el.keyTrigger}
            id={el.id}
            url={el.url}/>
          )}
        </div>
        <div className="Opions">
          <OptionSelector option={optionBank}  width="40px" height="20px" 
          text="Bank"  
          onClick={this.changeBank}/>
          <h3 id="display" className="LastAction">{this.state.lastAction}</h3>
          <OptionSelector  
          option={optionPower}  width="40px" height="20px" 
          text="Power" onClick={this.changePower}/>
        </div>
      </div>
    );
  }

}

export default DrumMachine;
