import React, { Component } from 'react'
import ChildCOmponent from './childComponent'

class parentcomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : "Kaed Johar"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
greetParent (childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
}
    render() {
        return (
            <div>
                <ChildCOmponent  greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default parentcomponent

