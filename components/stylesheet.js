import React from 'react'
import './styles.css'

function stylesheet(props) {
    let classname = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${classname} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default stylesheet
