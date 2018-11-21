import {TodoHeader} from "./todoheader";
import {InputTaker} from "./InputTaker";
import {ToDoItemsList} from "./ToDoItemsList";
import {Footer} from "./Footer";
import './../css/indexer.css'

const React = require('react')

export class Index extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader/>
                <section className="todoapp">
                    <InputTaker addTask={this.props.addTask}/>
                    <ToDoItemsList deleteATask={this.props.deleteATask} updateTaskStatus={this.props.updateTaskStatus}
                                   onClearCompleted={this.props.onClearCompleted} taskList={this.props.tasks}
                                   nowShowing={this.props.nowShowing}/>
                    <Footer pendingTasksCount={this.props.pendingTasksCount}
                            completedTasksCount={this.props.completedTasksCount}
                            clearCompleted={this.props.clearCompleted} switchNowShowing={this.props.switchNowShowing}/>
                </section>
            </div>)
    }
}