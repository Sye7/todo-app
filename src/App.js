
import { Component } from 'react';
import './App.css';
import Counter from './Counter/Component/counter';

function App() {
  return (
    <div className="App">
     
     <Counter/>
      
    </div>
  );
}

class SecondComponent extends Component
{
  render(){
    return (<div className="secondComp">Hello Syed</div>);
  }
}

function Third()
{
  return (<div className="secondComp">Hello Uchiha</div>);
}
export default App;
