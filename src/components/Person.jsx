import React from 'react'

const Person = ({ person, onPersonDoubleClick, disabled }) => (
  <img
    onDoubleClick={onPersonDoubleClick}
    data-person={JSON.stringify(person)}
    className={(disabled) ? 'disabled' : 'person-image'}
    src={person.url}
  />
)

export default Person
