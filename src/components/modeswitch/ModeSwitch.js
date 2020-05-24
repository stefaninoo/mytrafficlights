import React from 'react';
import Switch from 'react-switch';

import './ModeSwitch.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.props.handleModeChange(checked);
  }

  render() {
    return (
      <div className="switch">
        <label>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
        <p>Night mode is <span>{this.state.checked ? "on" : "off"}</span>.</p>
      </div>
    )
  }
}

export default App