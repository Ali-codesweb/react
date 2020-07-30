import React, { Component } from 'react'

export class classClick extends Component {

    clickHandler(){
        console.log(`Buttoon is clicked(class)`)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default classClick
