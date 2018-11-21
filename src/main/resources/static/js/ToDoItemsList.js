import {ToDoItem} from "./ToDoItem";

const React = require('react')

export class ToDoItemsList extends React.Component {
    renderList() {
        const nowShowing = this.props.nowShowing
        let tasks = this.props.taskList;
        let tasksToBeShow = tasks.filter(function (task) {
            switch (nowShowing) {
                case 'ACTIVE':
                    return !task.isFinished;
                case 'COMPLETED':
                    return task.isFinished;
                default:
                    return true;
            }
        });
        const tasksList = tasksToBeShow.map(task =>
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
                <div className="taskslist">
                    {this.renderList()}
                </div>
            );
        }
    }
}