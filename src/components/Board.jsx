import React from 'react'
import Person from './Person.jsx'

const Board = (props) => {
  const personNodes = props.people.map((person, index) => {
    return (
      <Person 
        key={index} 
        disabled={(person.disabled) ? true : false} 
        onPersonDoubleClick={props.onPersonDoubleClick}
        person={person}
      />
    ) 
  })

  return (
    <div id='board'>
      {personNodes}
    </div>
  )
}

export default Board
