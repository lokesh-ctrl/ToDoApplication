const React = require('react')

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingTasksCount: 0,
            completedTasksCount: 0
        }
        this.renderFooter = this.renderFooter.bind(this)
        this.renderClearCompletedDiv = this.renderClearCompletedDiv.bind(this)
    }

    renderFooter() {
        if (this.props.pendingTasksCount || this.props.completedTasksCount) {
            return (
                <footer>
                    <div className="pendingTasks">
                        <span><strong>{this.props.pendingTasksCount}</strong>" items left"</span>
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
        else {
            return (
                <div></div>
            )
        }
    }

    renderClearCompletedDiv() {
        if (this.props.completedTasksCount > 0) {
            return (<div>
                    <button onClick={this.props.clearCompleted}>clear Completed</button>
                </div>
            )
        }
        else return (
            <div></div>
        )
    }

    render() {
        return (this.renderFooter())
    }
}