const React = require('react')
const axios = require('axios');

export class InputTaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newTaskName: null}

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    keyPress(pressedKey) {
        if (pressedKey.keyCode == 13) {
            if (this.state.value){
            axios({
                method:'post',
                url:'/tasks',
                inputType:'application/json',
                data:{newTaskName:this.state.value}
            }).then(function (response) {
                console.log(response)
            })
        }}
    }

    render() {
        return (
            <input className="new-todo" autoFocus={true} type="text" value={this.state.newTaskName} onKeyDown={this.keyPress}
                   onChange={this.handleChange} placeholder="What needs to be done?"/>
        )
    }
}