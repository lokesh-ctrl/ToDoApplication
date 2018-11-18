import {Index} from "./indexer";

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
        this.clearCompletedInDb = this.clearCompletedInDb.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.deleteTaskInState = this.deleteTaskInState.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
    }

    componentDidMount() {
        console.log('getting data from firebase')
        this.getTasksFromDb()
    }

    getTasksFromDb() {
        axios({
            method: 'get',
            url: '/tasks',
        }).then(data => {
            console.log(data)
            this.setState({tasks: data.data})
        })
    }

    addNewTask(newTaskName) {
        this.setState({id: this.state.id + 1})
        let newTask = {"taskName": newTaskName, "id": this.state.id}
        this.setState({tasks: [...this.state.tasks], newTask})
        axios({
            method: 'post',
            url: '/tasks',
            inputType: 'application/json',
            data: newTask
        }).then(function (response) {
            console.log(response.status())
            console.log(response)
        })
    }

    clearCompleted() {
        this.clearCompletedInDb()
        this.getTasksFromDb()
    }

    clearCompletedInDb() {
        this.state.tasks.map(function (task, index) {
            if (task.isFinished) {
                deleteTask(task.id)
            }
        })
    }

    deleteTask(deleteTaskId) {
        if (deleteTaskId) {
            axios({
                method: 'delete',
                url: '/tasks/' + deleteTaskId
            }).then(function (response) {
                console.log(response);
            })
            this.deleteTaskInState(deleteTaskId)
        }
    }

    deleteTaskInState(taskId) {
        this.setState({
            tasks: this.state.tasks.filter(function (task) {
                return task.id !== taskId
            })
        })
    }

    updateTaskStatus(taskId, taskName, presentStatus) {
        let updatedStatus = (!presentStatus)
        let updatedTask = {"taskName": taskName, "id": taskId, "isCompleted": updatedStatus}
        this.deleteTaskInState(taskId)
        this.setState({tasks: [...this.state.tasks], updatedTask})
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



