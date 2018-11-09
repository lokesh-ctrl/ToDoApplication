import {TodoHeader} from "./todoheader";

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
    render(){
        <Index/>,document.getElementById("app")
    }

}

class Index extends React.Component{
    render(){
        return(
            <div>
            <TodoHeader/>
            <InputTaker />
            </div>)
    }
}

class InputTaker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:''}

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    keyPress(pressedKey){
        if(pressedKey.keyCode == 13){
            //add task to the database
        }
    }

    render(){
        return(
            <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} fullWidth={true} />
        )
    }
}