const React = require('react')

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingTasksCount: 1,
            completedTasksCount: 0
        }
        this.renderFooter = this.renderFooter.bind(this)
        this.renderClearCompletedDiv = this.renderClearCompletedDiv.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
    }

    componentWillMount() {
        this.setState({
            pendingTasksCount: this.props.pendingTasksCount,
            completedTasksCount: this.props.completedTasksCount
        })
    }

    renderFooter() {
        if (this.state.pendingTasksCount || this.state.completedTasksCount) {
            return (
                <footer>
                    <div className="pendingTasks">
                        <span><strong>{this.state.pendingTasksCount}</strong>" items left"</span>
                    </div>
                    <div className="taskFilters">
                        <ul>
                            <li>
                                <button>All</button>
                            </li>
                            <li>
                                <button>Active</button>
                            </li>
                            <li>
                                <button>Completed</button>
                            </li>
                        </ul>
                    </div>
                    {this.renderClearCompletedDiv()}
                </footer>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderClearCompletedDiv() {
        if (this.state.completedTasksCount > 0) {
            return (<div>
                    <button onClick={this.clearCompleted}>clear Completed</button>
                </div>
            )
        }
        else return (
            <div></div>
        )
    }

    clearCompleted(){

    }

    render() {
        return (this.renderFooter())
    }
}