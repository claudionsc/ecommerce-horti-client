import React from "react";
import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";



export default class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }

    decrement(event){
        this.setState({
            contador: this.state.contador -1,

        });
        event.preventDefault();
    }

    increment(event){
        this.setState({
            contador: this.state.contador +1,
        });
        event.preventDefault();
    }

    render(){
        
        return (
            <StyleDivBtn>
                <StyleBtn onClick={this.decrement.bind(this)}>-</StyleBtn>
                <StyleNum>{this.state.contador}</StyleNum>
                <StyleBtn onClick={this.increment.bind(this)}>+</StyleBtn>
            </StyleDivBtn>
        )
    }
}