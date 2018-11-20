import {Index} from "./indexer";
import fire from './fire';
import './../css/app.css'

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
        this.getTasksFromDb = this.getTasksFromDb.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
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
                console.log(task)
                if (task.isFinished) {
                    completedTasksCount = completedTasksCount + 1;
                }
                else {
                    pendingTasksCount = pendingTasksCount + 1;
                }
            });
            this.setState({
                tasks: tasks,
                pendingTasksCount: pendingTasksCount,
                completedTasksCount: completedTasksCount
            })
        }.bind(this))
    }

    getTasksFromDb() {
        axios({
            method: 'get',
            url: 'https://todoapp-6c35d.firebaseio.com/tasks/.json',
        }).then(data => {
            console.log(data)
            this.setState({tasks: data.data})
        })
        console.log(this.state.tasks)
    }

    addNewTask(newTaskName) {
        let tasksRef = fire.database().ref('tasks');
        this.setState({id: this.state.id + 1})
        let newTask = {id: this.state.id, isFinished: false, taskName: newTaskName}
        this.setState({tasks: [...this.state.tasks], newTask})
        tasksRef.push(newTask)
    }

    clearCompleted() {
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

    render() {
        let nowShowing = this.state.nowShowing;
        let tasksToBeShow = this.state.tasks.filter(function (task) {
            switch (nowShowing) {
                case 'ACTIVE':
                    return !task.isFinished;
                case 'COMPLETED':
                    return task.isFinished;
                default:
                    return true;
            }
        });
        return (
            <Index onClearCompleted={this.clearCompleted} updateTaskStatus={this.updateTaskStatus}
                   addTask={this.addNewTask} deleteATask={this.deleteTask}
                   tasks={tasksToBeShow} pendingTasksCount={this.state.pendingTasksCount}
                   completedTasksCount={this.state.completedTasksCount}
                   clearCompleted={this.clearCompleted}
            />)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
