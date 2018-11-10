const React = require('react')

export class ToDoItem extends React.Component{

    render(){
        return(
            <div className="viewtask">
                <input className="toggle" type="checkbox" checked={this.props.task.isFinished}/>
                <label className="taskName">{this.props.task.taskName}</label>
                <button className="deleteTask" />
            </div>
        )
    }
}