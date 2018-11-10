const React = require('react');


export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            taskName: null,
            isChecked: null
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.updateStatusOfTask = this.updateStatusOfTask.bind(this);
        this.renderTask = this.renderTask.bind(this)
    }

    componentAboutToMount(){
    }

    renderTask() {
        return (
            <div className="viewtask">
                <input id="checkBoxOfTask" onClick={this.updateStatusOfTask} type="checkbox"
                       checked={this.props.task.isFinished}/>
                <label id="taskName">{this.props.task.taskName}</label>
                <button id="deleteTask" onClick={this.deleteTask()}/>
            </div>
        )
    }

    deleteTask() {

    }

    updateStatusOfTask() {
        //update status of task in db
    }


    render() {
        return this.renderTask()
    }
}