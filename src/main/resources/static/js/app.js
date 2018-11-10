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
                    updateStatusOfTask: false
                },
                {
                    id: 2,
                    taskName: "hi4",
                    updateStatusOfTask: false
                },
                {
                    id: 4,
                    taskName: "hi3",
                    updateStatusOfTask: false
                },
                {
                    id: 5,
                    taskName: "hi2",
                    updateStatusOfTask: false
                }
            ]
        }
    }

    componentDidMount() {
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

}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)



