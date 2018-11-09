const React = require('react');
const ReactDOM = require('react-dom');

class ToDoItem extends React.Component{

    render(){
        return(
            <div className="viewtask">
                <input className="toggle" type="checkbox" checked={this.props.isFinished}/>
                <label className="taskName">{this.props.taskName}</label>
                <button className="deleteTask" />
            </div>
        )
    }
}