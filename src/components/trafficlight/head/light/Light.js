import React from 'react';

import './Light.css';

class Light extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.color,
            on:  this.props.on
        }
    }

    componentWillReceiveProps(nextStatus) {
        this.setState({on : nextStatus.on})
    }

    render() {
        const { id, on } = this.state;
        return (
            <div id={id} className={ "light " + ( on ? "on" : "" ) }></div>
        )
    }
 }
 export default Light;
