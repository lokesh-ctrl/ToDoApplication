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
                        <Button content='ALL' nowShowing={this.props.nowShowing}
                                switchNowShowing={this.props.switchNowShowing}/>
                        <Button content='ACTIVE' nowShowing={this.props.nowShowing}
                                switchNowShowing={this.props.switchNowShowing}/>
                        <Button content='COMPLETED' nowShowing={this.props.nowShowing}
                                switchNowShowing={this.props.switchNowShowing}/>
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

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {classNameOfButton: ''}
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.switchNowShowing(this.props.content)
    }

    render() {
        return (
            <button onClick={this.onClick}
                    className={this.props.content == this.props.nowShowing ? 'active' : null}>{this.props.content}</button>
        )
    }
}