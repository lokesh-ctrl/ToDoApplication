const React = require('react')

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteTask = this.deleteTask.bind(this);
        this.updateStatusOfTask = this.updateStatusOfTask.bind(this)
    }

    render() {
        deleteTask()
        {
            //remove this task in db
        }
        updateStatusOfTask()
        {
            //update status of task in db
        }

        return (
            <div className="viewtask">
                <input id="checkBoxOfTask" onClick={this.updateStatusOfTask} type="checkbox"
                       checked={this.props.task.isFinished}/>
                <label id="taskName">{this.props.task.taskName}</label>
                <button id="deleteTask" onClick={this.deleteTask()}/>
            </div>
        )
    }
}