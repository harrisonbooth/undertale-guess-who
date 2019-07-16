import React from 'react'
import Person from './Person.jsx'

const Board = ({ people, onPersonDoubleClick }) => {
  const personNodes = people.map((person, index) =>
    <Person
      key={index}
      disabled={(person.disabled) ? true : false}
      onPersonDoubleClick={onPersonDoubleClick}
      person={person}
    />)

  return (
    <div id='board'>
      {personNodes}
    </div>
  )
}

export default Board
