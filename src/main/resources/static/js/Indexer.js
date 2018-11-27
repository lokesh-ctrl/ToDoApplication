import {Todoheader} from "./Todoheader";
import {InputTaker} from "./InputTaker";
import {ToDoItemsList} from "./ToDoItemsList";
import {Footer} from "./Footer";
import '../css/Indexer.css'

const React = require('react')

export class Index extends React.Component {
    render() {
        return (
            <div>
                <Todoheader/>
                <section className="todoapp">
                    <InputTaker addTask={this.props.addTask}/>
                    <ToDoItemsList deleteATask={this.props.deleteATask} updateTaskStatus={this.props.updateTaskStatus}
                                   onClearCompleted={this.props.onClearCompleted} taskList={this.props.tasks}
                                   nowShowing={this.props.nowShowing} updateTask={this.props.updateTask}/>
                    <Footer pendingTasksCount={this.props.pendingTasksCount}
                            completedTasksCount={this.props.completedTasksCount}
                            clearCompleted={this.props.clearCompletedTasks}
                            switchNowShowing={this.props.switchNowShowing}/>
                </section>
            </div>)
    }
}