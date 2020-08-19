//Lecture 17 list rendering

import React from 'react'
//import Person1 from './person'

function nameList() {
    const names = ['Aliasgar', 'Fatema', 'Kaed JOahr']

    // const persons = [
    //     {
    //         name : 'Aliasgar',
    //         age : 21
    //     },
    //     {
    //         name : 'Zainab',
    //         age : 14
    //     }
    // ]
const nameList = names.map((name,index)=><h2 key={index} >{name}</h2>)
//const personList = persons.map(person => <Person1 key={person.name} personq={person} />)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default nameList
