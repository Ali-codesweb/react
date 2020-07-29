import React from 'react'

const Greet = (props)=>{
console.log(props)
return (
    <div>
        <h1>Hello {props.name} whose favorite hero is {props.heroname}</h1>
        {props.children}
    </div>
) 
}



export default Greet