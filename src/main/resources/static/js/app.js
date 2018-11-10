import {Index} from "./indexer";

const React = require('react');
const ReactDOM = require('react-dom');

export class App extends React.Component{
    render(){
        return(
            <Index />
        )
    }

}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)



