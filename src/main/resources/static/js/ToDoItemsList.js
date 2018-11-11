import {ToDoItem} from "./ToDoItem";

const React = require('react')

export class ToDoItemsList extends React.Component {
    render() {
        const tasksList = this.props.taskList.map(task =>
            <ToDoItem task={task} key={task.id}/>
        );
        return (
            <div className="taskList">
                {tasksList}
            </div>
        )
    }
}