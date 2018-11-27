const React = require('react');
import './../css/ToDoItem.css'

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: null,
            classNameOnTaskCompleted: "",
            editText: "",
            classNameOnEdit: "notEditing"
        };
        this.renderTask = this.renderTask.bind(this);
        this.handleStatusClick = this.handleStatusClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    componentWillMount() {
        this.setState({task: this.props.task})
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

    handleEdit() {
        this.setState({classNameOnEdit: "editing"})
        this.setState({editText: this.props.task.taskName})
    }

    handleSubmit() {
        console.log(this.state.task)
        console.log(this.state.editText)
        this.props.updateTask(this.state.task[".key"], this.state.task.isFinished, this.state.task.id, this.state.editText);
        this.setState({classNameOnEdit: "notEditing"})
    }

    handleKeyDown(event) {
        if (event.which === 27) {
            this.setState({editText: this.props.task.taskName})
            this.setState({classNameOnEdit: "notEditing"})
        }
        else if (event.which === 13) {
            this.handleSubmit()
        }
    }

    handleChangeText(event) {
        console.log("triggered on change event")
        console.log(event.target.value)
        this.setState({editText: event.target.value})
        console.log(this.state.editText)
    }

    renderTask() {
        return (
            <div>
                <div className={"viewtask " + this.state.classNameOnTaskCompleted}>
                    <input className="checkBoxOfTask" onChange={() => {
                        this.handleStatusClick()
                    }} type="checkbox"
                           checked={this.props.task.isFinished}/>
                    <label onDoubleClick={this.handleEdit} className="taskNameView">{this.props.task.taskName}</label>
                    <button className="deleteTaskButton" onClick={() => {
                        this.props.deleteATask(this.props.task[".key"])
                    }}>x
                    </button>
                </div>
                <div className={"editTask " + this.state.classNameOnEdit}>
                    <input className="edit"
                           onChange={this.handleChangeText}
                           value={this.state.editText}
                           onBlur={this.handleSubmit}
                           onKeyDown={this.handleKeyDown}/>
                </div>
            </div>
        )
    }

    render() {
        return (this.renderTask())
    }
}