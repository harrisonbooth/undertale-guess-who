import React from 'react'
import PeopleSeeds from '../models/PeopleSeeds'

class GameContainer extends React.Component {
  constructor() {
    super()
    this.state = {people: PeopleSeeds()}
  }

  render() {
    return (
      <div id="game-container">
        <QuestionInput />
        <Board />
      </div>
    )
  }
}

export default GameContainer
