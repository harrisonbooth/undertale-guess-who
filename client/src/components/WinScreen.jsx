import React from 'react'

class WinScreen extends React.Component{
  constructor() {
    super()
    const message = "* well done. you have won. refresh to play again..."
    this.state = {currentCharacterIndex: 0, winMessage: message, typedMessage: ""}
  }

  typeLetter(n) {
    if(!this.state.winMessage[n]){
      return
    }

    let typedMessage = this.state.typedMessage
    console.log(n);
    console.log(this.state.winMessage[n]);
    typedMessage += this.state.winMessage[n]
    this.setState({typedMessage: typedMessage})
    n++;
    setTimeout(() => {this.typeLetter(n)}, 100)
  }

  componentDidMount() {
    if(this.state.typedMessage.length === 0){
      var audio = new Audio('sanss.mp3');
      audio.play();
      this.typeLetter(0)
    }
  }

  render() {
    return (
      <div id="win-wrapper">
        <img id="sans-face" src="http://2static4.fjcdn.com/thumbnails/comments/Wow18+chicks+at+your+place+souns+rad+_8882c92243d0c049cf4402662537d308.jpg" />
        <p id="win-message">{this.state.typedMessage}</p>
      </div>
    )
  }
}

export default WinScreen
