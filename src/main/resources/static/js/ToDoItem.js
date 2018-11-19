const React = require('react');

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: null
        };
        this.renderTask = this.renderTask.bind(this);
    }

    renderTask() {
        return (
            <div className="viewtask">
                <input id="checkBoxOfTask" onChange={() => {
                    this.props.updateTaskStatus(this.props.task[".key"], this.props.task.isFinished, this.props.task.id, this.props.task.taskName)
                }} type="checkbox"
                       checked={this.props.task.isFinished}/>
                <label id="taskName">{this.props.task.taskName}</label>
                <button id="deleteTask" onClick={() => {
                    this.props.deleteATask(this.props.task[".key"])
                }}/>
            </div>
        )
    }

    render() {
        return (this.renderTask())
    }
}