import React from 'react'

function memoComponent({name}) {
    console.log(`Rendering memo component`)
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(memoComponent)
