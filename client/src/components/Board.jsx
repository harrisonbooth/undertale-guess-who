import React from 'react'

const Board = (props) => {
  const personNodes = props.people.map((person) => {
    // return <Person person={person} />
    return <div>{person.name}</div>
  })

  return (
    <div>
      {personNodes}
    </div>
  )
}

export default Board
