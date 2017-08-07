import React from 'react'

const Person = (props) => {
  return (
    <img onDoubleClick={props.onPersonDoubleClick}
      data-person={JSON.stringify(props.person)}
      className={(props.disabled) ? 'disabled' : 'person-image'}
      src={props.person.url} />
  )
}

export default Person
