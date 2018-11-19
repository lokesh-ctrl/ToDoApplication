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
            id: 0
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
            dataSnapShot.forEach(function (childSnapShot) {
                var task = childSnapShot.val();
                task['.key'] = childSnapShot.key;
                tasks.push(task);
            });
            this.setState({
                tasks: tasks
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
        this.state.tasks.map(function (task, index) {
            if (task.isFinished) {
                this.deleteTask(task[".key"])
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
        return (
            <Index onClearCompleted={this.clearCompleted} updateTaskStatus={this.updateTaskStatus}
                   addTask={this.addNewTask} deleteATask={this.deleteTask}
                   tasks={this.state.tasks}/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)



