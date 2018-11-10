import {TodoHeader} from "./todoheader";
import {InputTaker} from "./InputTaker";
import {ToDoItemsList} from "./ToDoItemsList";

const React = require('react')
export class Index extends React.Component{
    render(){
        return(
            <div>
                <TodoHeader/>
                <InputTaker />
                <ToDoItemsList/>
            </div>)
    }
}