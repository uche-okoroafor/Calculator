import React  from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './componets/Button'


class App extends React.Component {
constructor(props){
super(props)
this.state = {
         
            initalState:'',
            input:0,
            operator:'',
            inputMemory:''

}
}


handleAllClear=()=>{
 this.setState({initalState:''});
this.setState({input:0});
}


handleNumInput=(e)=>{
 this.setState({initalState:this.state.initalState + e.target.value});
this.setState({input:this.state.input + e.target.value});
}


handleOperations=(e)=>{
this.setState({operator:e.target.value});
this.setState({initalState:this.state.initalState + e.target.value});
this.setState({input:''});
this.setState({inputMemory:this.state.input});
}


handleEqualSign=(ops)=>{
switch (ops) {
  case '+':
     this.setState({
        input:
          parseInt(this.state.inputMemory) +
          parseInt(this.state.initalState)
      });
    break;
  case '-':
     this.setState({
        input:
          parseInt(this.state.inputMemory) -
          parseInt(this.state.initalState)
      });
    break;
  case '*':
      this.setState({
        input:
          parseInt(this.state.inputMemory) *
          parseInt(this.state.initalState)
      });
    break;
  case '/':
      this.setState({
        input:
          parseInt(this.state.inputMemory) /
          parseInt(this.state.initalState)
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
    <input type="text" className="calculator-screen z-depth-1" value={this.state.initalState} disabled />
    <input type="text" className="calculator-screen z-depth-1 text-warning" value={this.state.input} disabled />
    <React.Fragment>
       <Button  handleNumInput={this.handleNumInput}   handleAllClear={this.handleAllClear} handleOperations={this.handleOperations} handleEqualSign={()=>this.handleEqualSign(this.state.operator)}
        />
    </React.Fragment>
  </div>

  );
  }
}





export default App;


