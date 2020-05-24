import React from 'react';

import * as CONSTANTS from './../../../utils/constants'

import Light from './light/Light';

import './Head.css';

class Head extends React.Component {

    constructor(props) {
        super(props)

        this.lights = CONSTANTS.TRAFFIC_LIGHT.LIGHTS;
    }

    render() {
        return (
            <div className="head">
                { this.lights.map((light,i) => (
                    <Light
                        key = {i}
                        color = {light.color}
                        on = {this.props.lightsState[i]}/>
                    ))}
            </div>
        )
    }
 }
 export default Head;
