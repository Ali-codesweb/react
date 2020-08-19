//Lecture  16 Conditional operator
import React, { Component } from 'react'

class usergreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggeed : false
    }
}


    render() {

        // if(this.state.isLoggeed){
        //     return(
        //         <div>Welcome Aliasgar</div>
        //     ) 
        // }else{
        //     return(
        //         <div>Welcome GUest</div>
        //     )
        // }

    //     let message
    //     if(this.state.isLoggeed){
    //         message = <div>Welcome ALiasgar</div>
    //     }else{
    //         message = <div>Welcome Guest</div>
    //     }

    // return <div>{message}</div>

        return(this.state.isLoggeed ? (<div>Welcome ALiasgar</div>) : (<div>Welcome Guest</div>))
        
    }
}

export default usergreeting
