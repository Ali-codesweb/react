import React from 'react'

const hello = (props)=>{
    // return(
    //      <div>
    //          <h1>This is JSX lecture</h1>
    //      </div>
    // )
    return React.createElement(
        'div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, "Hello, This is without JSX")
        )
}

export default hello