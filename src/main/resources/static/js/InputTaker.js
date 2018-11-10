const React = require('react')

export class InputTaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    keyPress(pressedKey) {
        if (pressedKey.keyCode == 13) {
            //add task to the database
        }
    }

    render() {
        return (
            <input className="new-todo" autoFocus={true} type="text" value={this.state.value} onKeyDown={this.keyPress}
                   onChange={this.handleChange} placeholder="What needs to be done?" fullWidth={true}/>
        )
    }
}