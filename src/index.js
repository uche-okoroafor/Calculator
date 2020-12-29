
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { evaluate } from 'mathjs'; 
import 'bootstrap/dist/css/bootstrap.css';





class Calculator extends React.Component {
constructor(){
super()
 this.state = {
initalState:'',
currentState:0
  }
}
 


allClear=()=>{
 this.setState({initalState:''});
this.setState({currentState:0});
}

equalSign=()=>{
this.setState({currentState:evaluate(this.state.initalState)});

}
handleclick=(e)=>{
if(this.state.initalState ==='' && ["*","/"].indexOf(e.target.value)>=0){
this.setState({initalState:''})
}
else{
var arr = ["+","-","*","/"];
if(arr.indexOf(e.target.value)>=0){
this.setState({currentState:0});
 this.setState({initalState:this.state.initalState + e.target.value});
}else{
 this.setState({initalState:this.state.initalState + e.target.value});
this.setState({currentState:this.state.currentState + e.target.value});
}
}
}

  render() { 


    return (

  <div className="calculator card">
    <input type="text" className="calculator-screen z-depth-1" value={this.state.initalState} disabled />
    <input type="text" className="calculator-screen z-depth-1 text-warning" value={this.state.currentState} disabled />
    <div className="calculator-keys">

      <button onClick={this.handleclick}    type="button" className="operator btn btn-info" value="+">+</button>
      <button onClick= {this.handleclick}    type="button" className="operator btn btn-info" value="-">-</button>
      <button onClick= {this.handleclick}    type="button" className="operator btn btn-info" value="*">&times;</button>
      <button onClick= {this.handleclick}     type="button" className="operator btn btn-info" value="/">&divide;</button>

      <button onClick= {this.handleclick}     type="button" value="7" className="btn btn-light waves-effect">7</button>
      <button onClick= {this.handleclick}     type="button" value="8" className="btn btn-light waves-effect">8</button>
      <button onClick= {this.handleclick}     type="button" value="9" className="btn btn-light waves-effect">9</button>


      <button onClick= {this.handleclick}     type="button" value="4" className="btn btn-light waves-effect">4</button>
      <button onClick= {this.handleclick}     type="button" value="5" className="btn btn-light waves-effect">5</button>
      <button onClick= {this.handleclick}     type="button" value="6" className="btn btn-light waves-effect">6</button>


      <button onClick= {this.handleclick}     type="button" value="1" className="btn btn-light waves-effect">1</button>
      <button onClick= {this.handleclick}     type="button" value="2" className="btn btn-light waves-effect">2</button>
      <button onClick= {this.handleclick}     type="button" value="3" className="btn btn-light waves-effect">3</button>


      <button onClick= {this.handleclick}     type="button" value="0" className="btn btn-light waves-effect">0</button>
      <button onClick= {this.handleclick}     type="button" className="decimal function btn btn-secondary" value=".">.</button>
      <button onClick= {this.allClear}     type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

      <button onClick= {this.equalSign}     type="button" className="equal-sign operator btn btn-default" value="=">=</button>

    </div>
  </div>

  );
  }
}
 
export default Calculator;

ReactDOM.render(
  <React.Fragment>
    <Calculator />
  </React.Fragment>,
  document.getElementById('root')
);
