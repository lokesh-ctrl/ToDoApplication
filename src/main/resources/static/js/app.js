import {Index} from "./indexer";

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                //sample data
                {
                    id: 1,
                    taskName: "hi5",
                    isFinished: false
                },
                {
                    id: 2,
                    taskName: "hi4",
                    isFinished: true
                },
                {
                    id: 4,
                    taskName: "hi3",
                    isFinished: true
                },
                {
                    id: 5,
                    taskName: "hi2",
                    isFinished: false
                }
            ]
        }
        this.getTasksFromDb = this.getTasksFromDb.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        this.clearCompletedInDb = this.clearCompletedInDb.bind(this)
    }

    componentDidMount() {
        this.getTasksFromDb()
    }

    getTasksFromDb() {
        axios({
            method: 'get',
            url: '/tasks',
            responseType: 'application/json'
        }).then(function (response) {
            console.log(response)
            this.setState({tasks: response})
        })
    }

    render() {
        return (
            <Index tasks={this.state.tasks}/>
        )
    }

    clearCompleted() {
        this.clearCompletedInDb()
        this.getTasksFromDb()
    }

    clearCompletedInDb() {
        this.state.tasks.map(function (task, index) {
            deleteTask(task.id)
        })
    }

    deleteTask(taskId) {
        axios({
            method: 'delete',
            url: '/tasks' + taskId
        }).then(function (response) {
            console.log(response);
        })
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)



