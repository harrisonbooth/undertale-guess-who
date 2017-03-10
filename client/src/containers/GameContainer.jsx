import React from 'react'
import PeopleSeeds from '../models/PeopleSeeds.js'
import QuestionInput from '../components/QuestionInput.jsx'

class GameContainer extends React.Component {
  constructor() {
    super()
    this.state = {people: PeopleSeeds()}
  }

  render() {
    return (
      <div id="game-container">
        <QuestionInput people={this.state.people}/>

      </div>
    )
  }
}

export default GameContainer
