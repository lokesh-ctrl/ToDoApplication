import {ToDoItem} from "./ToDoItem";

const React = require('react')

export class ToDoItemsList extends React.Component {
    renderList() {
        console.log(this.props.taskList);
        const tasksList = this.props.taskList.map(task =>
            <ToDoItem task={task} key={task[".key"]} deleteATask={this.props.deleteATask}
                      updateTaskStatus={this.props.updateTaskStatus}/>
        );
        return (
            <div className="taskList">
                {tasksList}
            </div>
        )
    }

    render() {
        if (!this.props.taskList) {
            console.log("You dont have any tasks stored or refresh");
            return <div>You don't have any tasks</div>
        }
        else {
            return (
                <div>
                    {this.renderList()}
                </div>
            );
        }
    }
}