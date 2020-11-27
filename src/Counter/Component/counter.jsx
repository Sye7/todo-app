import { Component } from 'react';
import './countCSS.css'
 export class CounterButton extends Component{

    constructor()
    {
        
        super();
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render(){

        return(
            <div className= "counter">
                <button onClick={this.increment}>{this.props.by}</button> 
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }
    // this.props.by

    decrement()
    {
        this.props.decrementMethod(this.props.by);
    }

    increment()
    {

        this.props.incrementMethod(this.props.by);
    }
}

// Setting Default Value for passed argument
CounterButton.defaultProps = {
    by : 1
}


export default class Counter extends Component{

    constructor()
    {
        super();
        this.state = {
            counter:0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this)
    }
    increment(by)
    {
        this.setState({
                counter: this.state.counter + by
        });
        console.log(this.state.counter);
    }

    decrement(by)
    {
        this.setState({
                counter: this.state.counter - by
        });
        console.log(this.state.counter);
    }

    reset(){

        this.setState({
            counter: 0
        });
    }

    render(){

        return(
            <div>
                <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by={50} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <div><span>{this.state.counter}</span></div>

               <button onClick={this.reset}>Reset</button>

            </div>
                

        );
    }

} 