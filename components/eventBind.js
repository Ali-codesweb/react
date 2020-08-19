import React, { Component } from 'react'

class eventBind extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             init : 'Hello'
        }
        //this.change = this.change.bind(this)
    }
    // change(){
    //     this.setState({
    //         init : 'GoodBye'
    //     })
    // }
    change = ()=>{
        this.setState({
            init : 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.init}</div>
                {/* <button onClick={this.change.bind(this)}>Click</button> */}
                {/* <button onClick={()=> this.change()}>Click</button> */}
                <button onClick={this.change}>Click</button>
            </div>
        )
    }
}

export default eventBind
