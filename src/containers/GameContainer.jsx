import React from 'react'
import PeopleSeeds from '../models/PeopleSeeds.js'
import QuestionInput from '../components/QuestionInput.jsx'
import Board from '../components/Board.jsx'
import WinScreen from '../components/WinScreen.jsx'

class GameContainer extends React.Component {
  constructor() {
    super()
    const peopleSeeds = PeopleSeeds()

    this.state = {
      people: peopleSeeds,
      correctPerson: this.getRandomPerson(peopleSeeds),
      winner: false
    }
  }

  getRandomPerson(people) {
    const randomIndex = (Math.random() * (people.length - 1)).toFixed(0)
    return people[randomIndex]
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

  resetGame() {
    const peopleSeeds = PeopleSeeds()
    this.setState({
      people: peopleSeeds,
      correctPerson: this.getRandomPerson(peopleSeeds),
      winner: false
    })
  }

  render() {

    if(this.state.winner){
      return (
        <WinScreen 
          onReset={this.resetGame.bind(this)} 
        />
      )
    }

    return (
      <div id="game-container">
        <QuestionInput
          onSubmit={this.onSubmit.bind(this)}
          people={this.state.people}
        />
        <Board 
          people={this.state.people}
          onPersonDoubleClick={this.onPersonDoubleClick.bind(this)}
        />
      </div>
    )
  }
}

export default GameContainer
