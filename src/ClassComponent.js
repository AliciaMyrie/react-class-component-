import React, {Component} from "react"

class ClassComponent extends Component {

    constructor(props) {
        // this.props = props 
        super(props)


        this.state = {
            count: props.count,
            // color: props.color 
        }
    }

    render() {
        return (
            <>
            <h1>this is a class component {this.state.count}</h1>
            <button onClick={()=> {

                this.setState({count: this.state.count + 1})
            }}>add one</button>
            </>
        )
    }
}

export default ClassComponent;

