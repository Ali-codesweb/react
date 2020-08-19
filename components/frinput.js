import React from 'react'

// function frinput() {
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// }

const frinput = React.forwardRef((props, ref)=>{
    return (
                <div>
                    <input type="text" ref={ref}/>
                </div>
            )
}) 

export default frinput
