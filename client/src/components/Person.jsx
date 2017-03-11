import React from 'react'

const Person = (props) => (
    <img onDoubleClick={props.onPersonDoubleClick} data-person={JSON.stringify(props.person)} className="person-image" src={props.person.url} />
)

export default Person
