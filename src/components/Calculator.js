import React from 'react';
import '../style.css';

export default class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  render() {
    return (
      <div id="calculator">
        <input id="value_result" htmlFor="textarea" placeholder={this.state} />
        <div id="value_AC">AC</div>
        <div id="value_+/-">+/-</div>
        <div id="value_%">%</div>
        <div id="value_/" className="principal_operators">/</div>
        <div id="value_7">7</div>
        <div id="value_8">8</div>
        <div id="value_9">9</div>
        <div id="value_x" className="principal_operators">x</div>
        <div id="value_4">4</div>
        <div id="value_5">5</div>
        <div id="value_6">6</div>
        <div id="value_-" className="principal_operators">-</div>
        <div id="value_1">1</div>
        <div id="value_2">2</div>
        <div id="value_3">3</div>
        <div id="value_+" className="principal_operators">+</div>
        <div id="value_0">0</div>
        <div id="value_=" className="principal_operators">=</div>
      </div>
    );
  }
}
