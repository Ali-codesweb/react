import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler(`Aliasgar`)}>Greet Parent</button>
        </div>
    )
}

export default childComponent
