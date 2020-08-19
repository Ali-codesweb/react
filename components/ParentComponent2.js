import React, { Component } from 'react'
import Regularcomp from './Regularcomponent'
import Purecomp from './Purecomponent'
import MemoComp from './memoComponent'

//The pure component doesnt re-render same string...in this case ALiasgar is rendered every 2 secs but in pure component it renders only once resulting in performance boost

export class ParentComponent2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             me : 'Aliasgar'
        }

    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                me : 'Aliasgar2'
            })
        }, 20000)
    }
    render() {
        return (
            <div>
                ParentComponent2 {this.state.me}
                <MemoComp name={this.state.me} />
                {/* <Regularcomp name={this.state.me}/>
                <Purecomp name={this.state.me}/> */}
            </div>
        )
    }
}

export default ParentComponent2
