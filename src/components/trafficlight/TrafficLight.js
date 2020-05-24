import React from 'react';

import * as CONSTANTS from '../../utils/constants';
import * as Utils from '../../utils/utils';

import Head from './head/Head';
import Pole from './pole/Pole';

import './TrafficLight.css';

class TrafficLight extends React.Component {

    constructor(props) {
        super(props)

        this.config = CONSTANTS.TRAFFIC_LIGHT.CONFIG;
        this.interval = null;

        this.state = {
            config : this.props.start,
            nightMode : this.props.nightMode
        }
    }

    componentDidMount() {
        this.start();
    }

    /**
     * Updates state when parent has switched to/from day/night.
     * When switch to night mode, then switch off the traffic lights first and prevent their initial state to be set.
     * @param {App/State} trafficlights
     */
    componentWillReceiveProps(trafficlights) {
        let nightMode = trafficlights.nightMode;
        this.setState({
            nightMode,
            config: nightMode ? this.config.OFF : this.props.start
        }, () => this.start());
    }

    /**
     * The function starts the loop circle for the traffic light.
     */
    start() {
        // Clear the previous interval, if it exists, before a new start.
        if (this.interval) {
            clearInterval(this.interval)
        }
        this.interval = setInterval(() => {
            let currentState = this.state;
            let nextState = Utils.getNextTrafficLightState(currentState);
            this.setState({
                config : nextState,
            })
        }, Utils.getLightDuration(this.state.nightMode))
    }

    render() {
        return (
            <div className={ "traffic-light " + this.props.className }>
                <Head lightsState = {this.state.config}></Head>
                <Pole></Pole>
            </div>
       )
    }
 }
 export default TrafficLight;
