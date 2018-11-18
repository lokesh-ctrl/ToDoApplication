import {TodoHeader} from "./todoheader";
import {InputTaker} from "./InputTaker";
import {ToDoItemsList} from "./ToDoItemsList";
import {Footer} from "./Footer";

const React = require('react')

export class Index extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader/>
                <InputTaker addTask={this.props.addTask}/>
                <ToDoItemsList deleteATask={this.props.deleteATask} updateTaskStatus={this.props.updateTaskStatus}
                               onClearCompleted={this.props.onClearCompleted} taskList={this.props.tasks}/>
                <Footer/>
            </div>)
    }
}