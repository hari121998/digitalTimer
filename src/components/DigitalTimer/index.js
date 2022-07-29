// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isStart: false, limitCount: 25, timer: 1500}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(preState => ({timer: preState.timer - 1}))
  }

  startBtnClicked = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.timerId = setInterval(this.tick, 1000)
      this.setState({isStart: !isStart, limitCount: 25})
    } else if (isStart === true) {
      clearInterval(this.timerId)
      this.setState(preState => ({
        isStart: !isStart,
        limitCount: 25,
        timer: preState.timer,
      }))
    }
  }

  resetClicked = () =>
    this.setState(() => {
      clearInterval(this.timerId)
      return {isStart: false, limitCount: 25, timer: 1500}
    })

  decClicked = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.setState(preState => {
        if (preState.limitCount > 1) {
          return {
            limitCount: preState.limitCount - 1,
            timer: (preState.limitCount - 1) * 60,
          }
        }
        return {
          limitCount: preState.limitCount,
          timer: preState.limitCount * 60,
        }
      })
    }
  }

  incClicked = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.setState(preState => {
        if (preState.limitCount >= 0) {
          return {
            limitCount: preState.limitCount + 1,
            timer: (preState.limitCount + 1) * 60,
          }
        }
        return {limitCount: preState.limitCount, timer: preState.limitCount}
      })
    }
  }

  getMinTimer = () => {
    const {timer} = this.state
    let minValue = Math.floor(timer / 60)

    if (minValue > 0 && minValue / 10 < 1) {
      minValue = 0 + minValue.toString()
    }
    return minValue
  }

  getSecTimer = () => {
    const {timer} = this.state
    let secValue = Math.floor(timer % 60)
    if (secValue / 10 < 1) {
      secValue = 0 + secValue.toString()
    }
    return secValue
  }

  render() {
    const {isStart, limitCount} = this.state

    return (
      <div className="container">
        <h1 className="heading">Digital Timer</h1>
        <div className="set-timer-container">
          <div className="bg-image-container">
            <div className="start-time-container">
              <h1 className="count-time">
                {this.getMinTimer()}:{this.getSecTimer()}
              </h1>
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
              <button
                type="button"
                className="status-name"
                onClick={this.startBtnClicked}
              >
                {isStart ? 'Pause' : 'Start'}
              </button>
              <button
                type="button"
                className="timer-btn"
                onClick={this.resetClicked}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="play-pause-icon"
                />
              </button>

              <button
                type="button"
                className="status-name"
                onClick={this.resetClicked}
              >
                Reset
              </button>
            </div>
            <div className="set-timer-limit-container">
              <p className="timer-limit-heading">Set Timer limit</p>
              <div className="increment-decrement">
                <button
                  type="button"
                  className="inc-dec-btn"
                  onClick={this.decClicked}
                >
                  -
                </button>
                <p className="num-btn">{limitCount}</p>
                <button
                  type="button"
                  className="inc-dec-btn"
                  onClick={this.incClicked}
                >
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
