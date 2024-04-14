// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => this.setState({isEmojiClicked: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <div className="emojis-card-container">
          <h1 className="head-line">
            How satisfied are you with our <br />
            customer support performance ?
          </h1>
          <ul className="emojis-container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-image"
                  />
                  <br />
                  <span className="emoji-text">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props

    const {loveEmojiUrl} = resources

    return (
      <div className="love-emoji-card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer <br />
          performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="app-container">
        <div className="emojis-card-container">
          {isEmojiClicked ? this.renderThankyouScreen() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
