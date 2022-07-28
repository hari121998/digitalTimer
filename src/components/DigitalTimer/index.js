// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isStart: false}

  startBtnClicked = () => {
    this.setState(() => {
      const {isStart} = this.state
      return {isStart: !isStart}
    })
  }

  render() {
    const {isStart} = this.state

    return (
      <div className="container">
        <h1 className="heading">Digital Timer</h1>
        <div className="set-timer-container">
          <div className="bg-image-container">
            <div className="start-time-container">
              <p className="count-time">25:0</p>
              <p className="time-status">{isStart ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="set-container">
            <div className="reset-container">
              <button
                onClick={this.startBtnClicked}
                type="button"
                className="timer-btn"
              >
                {isStart ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                    className="play-pause-icon"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="play-pause-icon"
                  />
                )}
              </button>
              <p className="status-name">{isStart ? 'Pause' : 'Start'}</p>
              <button type="button" className="timer-btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="play icon"
                  className="play-pause-icon"
                />
              </button>

              <p className="status-name">Reset</p>
            </div>
            <div className="set-timer-limit-container">
              <p className="timer-limit-heading">Set Timer limit</p>
              <div className="increment-decrement">
                <button type="button" className="inc-dec-btn">
                  -
                </button>
                <button type="button" className="num-btn">
                  25
                </button>
                <button type="button" className="inc-dec-btn">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
