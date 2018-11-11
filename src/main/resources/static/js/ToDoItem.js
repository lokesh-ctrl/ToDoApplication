const React = require('react');
const axios = require('axios');


export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            taskName: null,
            isChecked: null
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.updateStatusOfTask = this.updateStatusOfTask.bind(this);
        this.renderTask = this.renderTask.bind(this);
    }

    renderTask() {
        return (
            <div className="viewtask">
                <input id="checkBoxOfTask" onClick={this.updateStatusOfTask(this.state.id)} type="checkbox"
                       checked={this.props.task.isFinished}/>
                <label id="taskName">{this.props.task.taskName}</label>
                <button id="deleteTask" onClick={this.deleteTask(this.state.id)}/>
            </div>
        )
    }

    deleteTask(id) {
        // axios({
        //     method: 'delete',
        //     url: '/tasks'+id
        // }).then(function (response) {
        //     console.log(response);
        // })
    }

    updateStatusOfTask(id) {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }))
        // axios({
        //     method:'put',
        //     url:'/tasks'+id,
        //     data:{
        //         id:this.state.id,
        //         taskName:this.state.taskName,
        //         isChecked:this.state.isChecked
        //     }
        // })
    }


    render() {
        return( this.renderTask())
    }
}