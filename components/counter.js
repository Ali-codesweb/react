import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                count : 0,
                increament : ()=>{
                    // this.setState({
                    //     count : this.state.count +1
                    // })
                    // console.log(this.state.count)
                    this.setState(prevState=>({
                        count:prevState.count +1
                    }))
                    console.log(this.state.count)
                },
                increamentFive: ()=>{
                    this.state.increament()
                    this.state.increament()
                    this.state.increament()
                    this.state.increament()
                    this.state.increament()
                }
        }
    }
    


    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={()=>this.state.increamentFive()}>Increament</button>
            </div>
        )
    }
}

export default counter


