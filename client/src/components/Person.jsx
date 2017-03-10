import React from 'react'

const Person = (props) => (
    <img onDoubleClick={props.onPersonDoubleClick} className="person-image" src={props.person.url} />
)

export default Person
