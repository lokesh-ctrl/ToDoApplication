const React = require('react')

export class TodoHeader extends React.Component{
    render(){
        return(
            <div id="todoHeader" className={"header"}>
                <h1>todos</h1>
            </div>
        )
    }
}