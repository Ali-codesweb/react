//Order of execution during mounting phase

import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             me : 'Aliasgar'
        }
        console.log(`LifeCycle B`)

    }
    static getDerivedStateFromProps(props,state){
            console.log(`Lifecycle B Gert derived state from [rops]`)
            return null
    }

    componentDidMount(){
        console.log(`Lifecycle B component did mount`)
    }
    shouldComponentUpdate(){
            console.log(`Should component update B`)
            return true
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log(`Get Snapshot before update B`)
            return null
        }
        componentDidUpdate(){
            console.log(`Component Did update B`)
        }
         render() {
             console.log(`Lifecycle B render`)
       
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB
