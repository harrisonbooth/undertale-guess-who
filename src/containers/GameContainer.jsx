import React from 'react'
import PeopleSeeds from '../models/PeopleSeeds.js'
import QuestionInput from '../components/QuestionInput.jsx'
import Board from '../components/Board.jsx'
import WinScreen from '../components/WinScreen.jsx'

class GameContainer extends React.Component {
  constructor() {
    super()
    const peopleSeeds = PeopleSeeds()

    const randomIndex = (Math.random() * (peopleSeeds.length - 1)).toFixed(0)
    const randomPerson = peopleSeeds[randomIndex]

    this.state = {people: peopleSeeds, correctPerson: randomPerson, winner: false}
  }

  onPersonDoubleClick(event) {
    const personClicked = JSON.parse(event.target.dataset.person);
    if(personClicked.name === this.state.correctPerson.name){
      this.setState({winner: true})
    } else {
      event.target.classList.add('disabled')
      event.target.classList.remove('person-image')
    }
  }

  filterByProperty(isQuestionCorrect, key, value) {
    const peopleArray = this.state.people
    const peopleToBeDisabled = peopleArray.filter((person, index, self) => {
      return ( isQuestionCorrect !== (person[key] === value) )
    })

    peopleToBeDisabled.forEach((person) => {
      const personIndex = peopleArray.indexOf(person)
      person.disabled = true;
    })

    this.setState({people: peopleArray})
  }

  onSubmit(key, value) {
    if(this.state.correctPerson[key] === value){
      this.filterByProperty(true, key, value)
    } else {
      this.filterByProperty(false, key, value)
    }
  }

  render() {

    if(this.state.winner){
      return (
        <WinScreen />
      )
    }

    return (
      <div id="game-container">
        <QuestionInput
          onSubmit={this.onSubmit.bind(this)}
          people={this.state.people}/>
        <Board people={this.state.people}
          onPersonDoubleClick={this.onPersonDoubleClick.bind(this)}/>
      </div>
    )
  }
}

export default GameContainer
