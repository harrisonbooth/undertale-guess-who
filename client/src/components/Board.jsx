import React from 'react'
import Person from './Person.jsx'

const Board = (props) => {
  const personNodes = props.people.map((person) => {
    return <Person person={person} />
  })

  return (
    <div>
      {personNodes}
    </div>
  )
}

export default Board
