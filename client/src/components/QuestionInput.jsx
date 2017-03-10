import React from 'react'

class QuestionInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({currentKey: "name"})
  }

  handleKeySelect(event) {
    const newKey = event.target.value
    this.setState({currentKey: newKey})
  }

  render() {
    const keySet = Object.keys(this.props.people[0])
    const keyNodes = keySet.map((key) => {
      return <option value={key}>{key}</option>
    })

    const currentKey = this.state.currentKey

    const valueSet = this.props.people.map((person) => {
      return person[currentKey]
    })

    const valueSetUniq = [...new Set(valueSet)];

    const valueNodes = valueSetUniq.map((value, index) => {
      return <option key={index} value={value}>{value}</option>
    })

    return (
      <div id="question-input">
        <select id="key-select" onChange={this.handleKeySelect.bind(this)}>
          {keyNodes}
        </select>
        <select id="value-select">{valueNodes}</select>
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default QuestionInput
