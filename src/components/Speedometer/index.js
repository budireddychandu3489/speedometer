// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerateSpd = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevValue => ({count: prevValue.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="speed-container">
        <h1 className="speed-heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="pic"
        />
        <h1 className="speed-limit">Speed is {count}mph</h1>
        <p className="caution">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            className="acc-button"
            type="button"
            onClick={this.accelerateSpd}
          >
            Accelerate
          </button>
          <button
            onClick={this.applyBrake}
            className="brake-button"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
