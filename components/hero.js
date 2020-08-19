import React from 'react'

function hero({heroName}) {
    if(heroName==='Joker'){
        throw new console.error('Not a Hero name');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default hero
