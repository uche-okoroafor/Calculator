import React  from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './componets/Button'
import { evaluate } from 'mathjs'; 


class App extends React.Component {
constructor(props){
super(props)
this.state = {
         
            initalState:'',
            input:'',
            operator:'',
            inputMemory:'',
           displayZero:0,
resetState:'',

}
}

handleAllClear=()=>{
 this.setState({initalState:''});
this.setState({input:''});
this.setState({inputMemory:''});
this.setState({operator:'',})
}


handleNumInput=(e)=>{
if(this.state.resetState.length > 0 && this.state.resetState.indexOf(e.target.value) < 0 ){
console.log(this.state.resetState.indexOf(e.target.value))
console.log(this.state.resetState,e.target.value)
 this.setState({initalState:''});
this.setState({input:''});
 this.setState({resetState:''});

setTimeout(() => {
  this.setState({initalState:this.state.initalState + e.target.value});
this.setState({input:this.state.input + e.target.value});
}, 10);
 
return
}
this.setState({displayZero:''});
 this.setState({initalState:this.state.initalState + e.target.value});
this.setState({input:this.state.input + e.target.value});
}


handleOperations=(e)=>{
let operator = e.target.value;
let mutiDiv = '*/';
let addSub = '+-';
if(mutiDiv.indexOf(operator)>=0){
if( this.state.initalState.length>0 && mutiDiv.indexOf(this.state.initalState.slice(-1)) < 0){
this.setState({operator:operator});
this.setState({initalState:this.state.initalState + operator});
this.setState({input:''});
this.setState({inputMemory:this.state.input});
}

}
else if(addSub.indexOf(this.state.initalState[0])<0 && addSub.indexOf(this.state.initalState.slice(-1))< 0){

this.setState({operator:operator});
this.setState({initalState:this.state.initalState + operator});
this.setState({input:''});
this.setState({inputMemory:this.state.input});

}

}




handleDot=(e)=>{
   if (this.state.initalState.indexOf(".") === -1) {
      this.setState({ initalState: this.state.initalState + e.target.value });
      this.setState({ input: this.state.input + e.target.value });

    }
  
  }


handleEqualSign=(ops)=>{
if(this.state.initalState.indexOf('.')>=0 ){

return this.setState({input:evaluate(this.state.initalState),
resetState:['/','*','-','+',''],

 });
}

switch (ops) {
  case '+':
     this.setState({
        input:
          parseInt(this.state.inputMemory) +
          parseInt(this.state.input),
resetState:['/','*','-','+',''],
      });
    break;
  case '-':
     this.setState({
        input:
          parseInt(this.state.inputMemory) -
          parseInt(this.state.input),
resetState:['/','*','-','+',''],
      });
    break;
  case '*':
      this.setState({
        input:
          parseInt(this.state.inputMemory) *
          parseInt(this.state.input),
resetState:['/','*','-','+',''],
      });
    break;
  case '/':
      this.setState({
        input:
          parseInt(this.state.inputMemory) /
          parseInt(this.state.input),
resetState:['/','*','-','+'],
      });
    break;
 default:
 this.setState({
        initalState:this.state.input
      });
}
}

  render() {


    return (

  <div className="calculator card">
    <input type="text" className="calculator-screen z-depth-1" value={ this.state.initalState} disabled />
    <input type="text" className="calculator-screen z-depth-1 text-warning" value={this.state.input} disabled />
    <React.Fragment>
       <Button  handleNumInput={this.handleNumInput}   handleAllClear={this.handleAllClear} handleOperations={this.handleOperations} handleEqualSign={()=>this.handleEqualSign(this.state.operator)}
          handleDot={this.handleDot}     />
    </React.Fragment>

  </div>

  );
  }
}





export default App;


