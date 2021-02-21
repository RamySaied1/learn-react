import './Calculater.css';
import React from 'react';
import Pad from './Pad.js';
import Result from './Result';


class Calculater extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      history:"",
      current:"0",
    }

  }

  addDot=(text)=>
  {
    if (this.state.current.indexOf(".")==-1)
      this.setState(Object.assign({},this.state,{current:this.state.current+text}));
  }
  addNumber=(text)=>
  {
    if (this.state.current!="0")
      this.setState(Object.assign({},this.state,{current:this.state.current+text}));
    else
      this.setState(Object.assign({},this.state,{current:text}));

  }

  ac=()=>
  {
    this.setState(Object.assign({},this.state,{current:'0',history:""}));
  }
  op=(op)=>
  {
    let history=this.state.history;
    if (this.state.current !='0' )
      this.setState(Object.assign({},this.state,{current:'0',history:this.state.history+this.state.current+op}));
    else 
    {
      let l=history[history.length-1];
      if (op!='-' && (l=='+' || l=='-' || l=='/' || l=='*') )
      {
        let ll=history[history.length-2];
        if (ll=='+' || ll=='-' || ll=='/' || ll=='*')
          history=history.substring(0,history.length-2)+op;
        else
          history=history.substring(0,history.length-1)+op;
        this.setState(Object.assign({},this.state,{current:'0',history:history}));
      }
      else if ((op == '-') &&  (l=='+' || l=='/' || l=='*'))
      {
        this.setState(Object.assign({},this.state,{current:'0',history:history+op}));
      }
    }

  }
  equals=()=>
  {
    let history=this.state.current !='0'? this.state.history+this.state.current:this.state.history;
    console.log(history);
    let result=this.getResult(history);
    this.setState(Object.assign({},this.state,{current:result,history:""}));
  }
  
  round=(ops,equation)=>
  {
    let result;
    let i=0;
    while (i <equation.length)
    {
      console.log(equation[i]);
      if (equation[i]==ops[0] || equation[i]==ops[1])
      {
        let op1=Number(equation[i-1]);
        let op2=Number(equation[i+1]);
        if (equation[i+1]==""){ i++;continue;}
        switch(equation[i])
        {
          case "/":
            result=op1/op2;
            break
          case "*":
            result=op1*op2;
            break;
          case "+":
            result=op1+op2;
            break;
          default:
            if (equation[i-1]=="")
              result=-1*op2;
            else 
              result=op1-op2;
        }
        equation=[...(equation.slice(0,i-1)),String(result),...(equation.slice(i+2,equation.length))];
        console.log("r ",equation);
      }
      else
        i++;
    }
    return equation;

  }
  getResult=(history)=>
  {
    history=history.split( /(\-|\+|\*|\/)/ );
    console.log(history);
    history=this.round(['*','/'],history);
    console.log(history);
    history=this.round(['+','-'],history);
    console.log(history);
    history=this.round(['*','/'],history);
    console.log(history);
    history=this.round(['+','-'],history);
    console.log(history);
    return String(history[0]); 
  }

 
  render()
  {
    let numCol="#4d4d4d";
    let opCol="#666666";
    let acCol="#ac3939";
    let eqCol="#004466";

    return (
      <div  id="calculater"  className="Calculater" >
        <Pad text="1" addNumber={this.addNumber} id="one" colStart="1" colEnd="2" rowStart="5" rowEnd="6" color={numCol}/>
        <Pad text="2" addNumber={this.addNumber} id="two" colStart="2" colEnd="3" rowStart="5" rowEnd="6"color={numCol}/>
        <Pad text="3" addNumber={this.addNumber} id="three" colStart="3" colEnd="4" rowStart="5" rowEnd="6"color={numCol}/>
        <Pad text="4" addNumber={this.addNumber} id="four" colStart="1" colEnd="2" rowStart="4" rowEnd="5"color={numCol}/>
        <Pad text="5" addNumber={this.addNumber} id="five" colStart="2" colEnd="3" rowStart="4" rowEnd="5"color={numCol}/>
        <Pad text="6" addNumber={this.addNumber} id="six" colStart="3" colEnd="4" rowStart="4" rowEnd="5"color={numCol}/>
        <Pad text="7" addNumber={this.addNumber} id="seven" colStart="1" colEnd="2" rowStart="3" rowEnd="4"color={numCol}/>
        <Pad text="8" addNumber={this.addNumber} id="eight" colStart="2" colEnd="3" rowStart="3" rowEnd="4"color={numCol}/>
        <Pad text="9" addNumber={this.addNumber} id="nine" colStart="3" colEnd="4" rowStart="3" rowEnd="4"color={numCol}/>
        <Pad text="0" addNumber={this.addNumber} id="zero" colStart="1" colEnd="3" rowStart="6" rowEnd="7"color={numCol}/>
        <Pad text="." addDot={this.addDot} id="decimal" colStart="3" colEnd="4" rowStart="6" rowEnd="7"color={numCol}/>
        <Pad text="/" op={this.op} id="divide" colStart="3" colEnd="4" rowStart="2" rowEnd="3"color={opCol}/>
        <Pad text="*" op={this.op} id="multiply" colStart="4" colEnd="5" rowStart="2" rowEnd="3"color={opCol}/>
        <Pad text="-" op={this.op} id="subtract" colStart="4" colEnd="5" rowStart="3" rowEnd="4"color={opCol}/>
        <Pad text="+" op={this.op} id="add" colStart="4" colEnd="5" rowStart="4" rowEnd="5"color={opCol}/>
        <Pad text="=" equals={this.equals} id="equals"  colStart="4" colEnd="5" rowStart="5" rowEnd="7" color={eqCol}/>
        <Pad text="AC" ac={this.ac} id="clear"  colStart="1" colEnd="3" rowStart="2" rowEnd="3"color={acCol}/>
        <Result current={this.state.current} history={this.state.history} colStart="1" colEnd="5" rowStart="1" rowEnd="2"/>
      </div>
    );
  }

}

export default Calculater;
