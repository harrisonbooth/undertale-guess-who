import React from 'react'
import _ from 'lodash'

class QuestionInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      currentKey: "name",
      currentValue: this.props.people[0].name
    })
  }

  handleKeySelect(event) {
    const newKey = event.target.value
    this.setState({
      currentKey: newKey,
      currentValue: this.props.people[0][newKey]
    })
  }

  handleValueSelect(event) {
    const newValue = event.target.value
    this.setState({ currentValue: newValue })
  }

  getValueSet(key) {
    const valueSet = this.props.people.map((person) => {
      return person[key]
    })
    return _.uniq(valueSet)
  }

  createSelectOptions(array, suffix = "") {
    return array.map((item, index) => {
      return (
        <option key={index} value={item}>
          {_.capitalize(item) + suffix}
        </option>
      )
    })
  }

  render() {
    const keySet = Object.keys(this.props.people[0])
      .filter((key) => key !== 'url')

    const keyNodes = this.createSelectOptions(keySet, ":")

    const valueSet = this.getValueSet(this.state.currentKey)

    const valueNodes = this.createSelectOptions(valueSet, "?")

    return (
      <div id="question-input">
        
        <select id="key-select" 
        onChange={this.handleKeySelect.bind(this)}>
          {keyNodes}
        </select>

        <select 
        id="value-select" 
        onChange={this.handleValueSelect.bind(this)}>
          {valueNodes}
        </select>

        <button 
        onClick={() => {
          this.props.onSubmit(this.state.currentKey, this.state.currentValue)
        }}>
          Submit
        </button>

      </div>
    )
  }
}

export default QuestionInput
