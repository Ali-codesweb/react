import React, { Component } from 'react'
import withCounter from './withCounter'

class clickCounter extends Component {
    render() {
        const {count , increamentCont } = this.props
        return (
            
            <div>
                <button onClick={increamentCont}>Clicked {count} {this.props.name} times</button>
            </div>
        )
    }
}

export default withCounter(clickCounter, 5)
