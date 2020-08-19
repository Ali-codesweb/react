import React from 'react'

const withCounter = (WrappedComponent,increamentNumber)=>{
    
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 click : 0
            }
        }
        clickedTimes = ()=>{
            this.setState((prevState)=>{
                return {click : prevState.click+increamentNumber}
            })
        }

        
        render(){
            return <WrappedComponent {...this.props} count={this.state.click} increamentCont={this.clickedTimes} />
        }
              
    }
    return WithCounter
}

export default withCounter