import React from 'react'
import PeopleSeeds from '../models/PeopleSeeds.js'
import QuestionInput from '../components/QuestionInput.jsx'
import Board from '../components/Board.jsx'

class GameContainer extends React.Component {
  constructor() {
    super()

    const peopleSeeds = PeopleSeeds();

    const randomIndex = (Math.random() * (peopleSeeds.length - 1)).toFixed(0);
    const randomPerson = peopleSeeds[randomIndex]

    this.state = {people: peopleSeeds, correctPerson: randomPerson}
  }

  onPersonDoubleClick(event) {
    const personClicked = JSON.parse(event.target.dataset.person);
    if(personClicked.name === this.state.correctPerson.name){
      console.log("winner");
    }
  }

  filterByProperty(answer) {
    const key = document.getElementById('key-select').value;
    const value = document.getElementById('value-select').value;

    const peopleArray = this.state.people
    const peopleToBeDeleted = peopleArray.filter((person, index, self) => {
      if(answer === false && person[key] === value){
        return true
      }
      if(answer === true && person[key] !== value){
        return true
      }
    })

    peopleToBeDeleted.forEach((person) => {
      const personIndex = peopleArray.indexOf(person)
      peopleArray.splice(personIndex, 1)
    })

    this.setState({people: peopleArray})
  }

  onSubmit() {
    const key = document.getElementById('key-select').value;
    const value = document.getElementById('value-select').value;

    if(this.state.correctPerson[key] === value){
      this.filterByProperty(true)
    } else {
      this.filterByProperty(false)
    }
  }

  render() {
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
