import {Index} from "./Indexer";
import fire from './fire';
import '../css/App.css'

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            id: 0,
            pendingTasksCount: 0,
            completedTasksCount: 0,
            nowShowing: 'ALL',
            showingTasks: []
        }
        this.addNewTask = this.addNewTask.bind(this)
        this.clearCompletedTasks = this.clearCompletedTasks.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.switchNowShowing = this.switchNowShowing.bind(this)
    }

    componentWillMount() {
        let tasksRef = fire.database().ref('tasks');
        tasksRef.orderByKey().limitToLast(100).on('value', function (dataSnapShot) {
            var tasks = [];
            var pendingTasksCount = 0;
            var completedTasksCount = 0;
            dataSnapShot.forEach(function (childSnapShot) {
                var task = childSnapShot.val();
                task['.key'] = childSnapShot.key;
                tasks.push(task);
                if (task.isFinished) {
                    completedTasksCount = completedTasksCount + 1;
                }
                else {
                    pendingTasksCount = pendingTasksCount + 1;
                }
            });
            this.setState({
                tasks: tasks,
                showingTasks: tasks,
                pendingTasksCount: pendingTasksCount,
                completedTasksCount: completedTasksCount
            })
        }.bind(this))
    }

    addNewTask(newTaskName) {
        let tasksRef = fire.database().ref('tasks');
        this.setState({id: this.state.id + 1})
        let newTask = {id: this.state.id, isFinished: false, taskName: newTaskName}
        this.setState({tasks: [...this.state.tasks], newTask})
        tasksRef.push(newTask)
    }

    clearCompletedTasks() {
        let deleteTask = this.deleteTask;
        this.state.tasks.map(function (task) {
            if (task.isFinished) {
                deleteTask(task[".key"])
            }
        })
    }

    deleteTask(taskKey) {
        let tasksRef = fire.database().ref('tasks');
        tasksRef.update({
            [taskKey]: null
        })
    }

    updateTask(taskKey, updatedStatus, updatedTaskId, updatedTaskName) {
        console.log("caling update status")
        console.log(taskKey+updatedStatus+updatedTaskId+updatedTaskName)
        let tasksRef = fire.database().ref('tasks');
        tasksRef.update({
            [taskKey]: {
                id: updatedTaskId,
                taskName: updatedTaskName,
                isFinished: updatedStatus
            }
        })
    }

    updateTaskStatus(taskKey, currentStatus, taskId, taskName) {
        let updateStatus = !currentStatus
        this.updateTask(taskKey, updateStatus, taskId, taskName)
    }

    switchNowShowing(clickedItem) {
        this.setState({nowShowing: clickedItem})
    }

    render() {
        return (
            <Index onClearCompleted={this.clearCompletedTasks} updateTaskStatus={this.updateTaskStatus}
                   addTask={this.addNewTask} deleteATask={this.deleteTask}
                   tasks={this.state.tasks} pendingTasksCount={this.state.pendingTasksCount}
                   completedTasksCount={this.state.completedTasksCount}
                   clearCompleted={this.clearCompletedTasks} switchNowShowing={this.switchNowShowing}
                   nowShowing={this.state.nowShowing}
                   updateTask={this.updateTask}
            />)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
