//Order of execution during mounting phase

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             me : 'Aliasgar'
        }
        console.log(`LifeCycle A`)

    }
    static getDerivedStateFromProps(props,state){
            console.log(`Lifecycle A Gert derived state from [rops]`)
            return null
    }

    componentDidMount(){
        console.log(`Lifecycle A component did mount A `)
    }

        shouldComponentUpdate(){
            console.log(`Should component update A`)
            return true
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log(`Get Snapshot before update A`)
            return null
        }
        componentDidUpdate(){
            console.log(`Component Did update A`)
        }
        changeState = ()=>{
            this.setState({
                me : 'Burhani'
            })
        }
         render() {
             console.log(`Lifecycle A render`)
       
        return (
            <div>
                <LifecycleB/>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
