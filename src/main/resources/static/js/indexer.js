import {TodoHeader} from "./todoheader";
import {InputTaker} from "./InputTaker";

const React = require('react')
export class Index extends React.Component{
    render(){
        return(
            <div>
                <TodoHeader/>
                <InputTaker />
            </div>)
    }
}