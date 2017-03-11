import React from 'react'

const Person = (props) => {
  if(props.disabled){
    return <img onDoubleClick={props.onPersonDoubleClick}
      data-person={JSON.stringify(props.person)}
      className="disabled"
      src={props.person.url} />
  }
    return <img onDoubleClick={props.onPersonDoubleClick}
      data-person={JSON.stringify(props.person)}
      className="person-image"
      src={props.person.url} />
}

export default Person
