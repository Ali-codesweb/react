import React, { Component } from 'react'
import withCounter from './withCounter'

class hoverCounter extends Component {
   
    render() {
        const {count, increamentCont} = this.props
        return (
            <div>
                <h1 onMouseOver={increamentCont}> Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(hoverCounter,15)
