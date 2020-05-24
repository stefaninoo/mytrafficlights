import React from "react";

import { FaMoon, FaSun } from 'react-icons/fa';

import TrafficLight from './components/trafficlight/TrafficLight';
import ModeSwitch from './components/modeswitch/ModeSwitch';
import * as CONSTANTS from './utils/constants'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        nightMode : false
    }

  }

  handleModeChange = (nightMode) => {
    this.setState({nightMode})
  }

  render () {
    const { nightMode } = this.state;
    return (
      <div className="App">
        <div className="daynight-icon">{ nightMode ?  <FaMoon size="3rem"/> : <FaSun size="3rem"/> }</div>
        <div className={ "trafficlights-container " + ( nightMode ? "night" : "" ) }>
            <TrafficLight
                className="main"
                start={ CONSTANTS.TRAFFIC_LIGHT.CONFIG.GO }
                nightMode={ nightMode }>
            </TrafficLight>
            <TrafficLight
                className="subordinate"
                start={ CONSTANTS.TRAFFIC_LIGHT.CONFIG.STOP }
                nightMode= {nightMode }>
            </TrafficLight>
        </div>
        <ModeSwitch
            handleModeChange = { this.handleModeChange }>
        </ModeSwitch>
      </div>
    )
  }
}

export default App