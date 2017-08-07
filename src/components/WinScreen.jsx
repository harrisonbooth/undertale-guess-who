import React from 'react'

class WinScreen extends React.Component{
  constructor() {
    super()
    const message = "* well done. you have won. refresh to play again..."

    this.state = {
      currentCharacterIndex: 0,
      winMessage: message,
      typedMessage: ""
    }
  }

  typeLetter(n) {
    if(!this.state.winMessage[n]){
      return
    }

    let typedMessage = this.state.typedMessage
    typedMessage += this.state.winMessage[n]

    this.setState({typedMessage: typedMessage})
    n++

    setTimeout(() => {this.typeLetter(n)}, 100)
  }

  componentDidMount() {
    if(this.state.typedMessage.length === 0){
      var audio = new Audio('build/sanss.mp3');
      audio.play();
      this.typeLetter(0)
    }
  }

  render() {
    return (
      <div id="win-wrapper">
        <img 
        id="sans-face" 
        src="build/images/sans-head.jpg" />

        <p id="win-message">
          {this.state.typedMessage}
        </p>
      </div>
    )
  }
}

export default WinScreen
