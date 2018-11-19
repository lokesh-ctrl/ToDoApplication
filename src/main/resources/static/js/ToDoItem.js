const React = require('react');
import './../css/ToDoItem.css'

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: null,
            classNameOnTaskCompleted: ""
        };
        this.renderTask = this.renderTask.bind(this);
        this.handleStatusClick = this.handleStatusClick.bind(this);
    }

    componentWillMount() {
        if (this.props.task.isFinished == true) {
            this.setState({classNameOnTaskCompleted: "completed"})
        }
    }

    handleStatusClick() {
        if (this.props.task.isFinished == true) {
            this.setState({classNameOnTaskCompleted: ""})
        }
        else {
            this.setState({classNameOnTaskCompleted: "completed"})
        }
        this.props.updateTaskStatus(this.props.task[".key"], this.props.task.isFinished, this.props.task.id, this.props.task.taskName)
    }
    renderTask() {
        return (
            <div className={"viewtask " + this.state.classNameOnTaskCompleted}>
                <input className="checkBoxOfTask" onChange={() => {
                    this.handleStatusClick()
                }} type="checkbox"
                       checked={this.props.task.isFinished}/>
                <label className="taskNameView">{this.props.task.taskName}</label>
                <button className="deleteTaskButton" onClick={() => {
                    this.props.deleteATask(this.props.task[".key"])
                }}>x
                </button>
            </div>
        )
    }

    render() {
        return (this.renderTask())
    }
}