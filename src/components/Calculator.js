import React from 'react';
import '../style.css';
import calculate from '../logic/calculate';

export default class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: 0,
      operation: '',
    });
  }

  handleClick = (e) => {
    console.log(e.target.textContent);
    const val = calculate(this.state, e.target.textContent);
    this.setState(val);
  }

  render() {
    const { next, operation, total } = this.state;
    let valfinal = '';
    valfinal = next;
    if (next === null && operation === null) {
      valfinal = total;
    }
    if (next === null && operation === null && total === null) {
      valfinal = 0;
    }
    return (
      <div id="calculator">
        <input id="value_result" htmlFor="textarea" placeholder={valfinal} />
        <button type="button" id="value_AC" onClick={this.handleClick}>AC</button>
        <button type="button" id="value_+/-" onClick={this.handleClick}>+/-</button>
        <button type="button" id="value_%" onClick={this.handleClick}>%</button>
        <button type="button" id="value_/" className="principal_operators" onClick={this.handleClick}>÷</button>
        <button type="button" id="value_7" onClick={this.handleClick}>7</button>
        <button type="button" id="value_8" onClick={this.handleClick}>8</button>
        <button type="button" id="value_9" onClick={this.handleClick}>9</button>
        <button type="button" id="value_x" className="principal_operators" onClick={this.handleClick}>x</button>
        <button type="button" id="value_4" onClick={this.handleClick}>4</button>
        <button type="button" id="value_5" onClick={this.handleClick}>5</button>
        <button type="button" id="value_6" onClick={this.handleClick}>6</button>
        <button type="button" id="value_-" className="principal_operators" onClick={this.handleClick}>-</button>
        <button type="button" id="value_1" onClick={this.handleClick}>1</button>
        <button type="button" id="value_2" onClick={this.handleClick}>2</button>
        <button type="button" id="value_3" onClick={this.handleClick}>3</button>
        <button type="button" id="value_+" className="principal_operators" onClick={this.handleClick}>+</button>
        <button type="button" id="value_0" onClick={this.handleClick}>0</button>
        <button type="button" id="value_." onClick={this.handleClick}>.</button>
        <button type="button" id="value_=" onClick={this.handleClick} className="principal_operators">=</button>
      </div>
    );
  }
}
