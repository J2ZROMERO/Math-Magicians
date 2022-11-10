import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setdata] = useState({
    total: null,
    next: 0,
    operation: '',
  });

  const handleClick = (e) => {
    const val = calculate(data, e.target.textContent);
    setdata(val);
  };

  const { next, operation, total } = data;
  let valfinal = '';
  valfinal = next;
  if (next === null && operation === null) {
    valfinal = total;
  }
  if (next === null && operation === null && total === null) {
    valfinal = 0;
  }
  return (
    <>
      <Header />
      <h3>Lets do some math!</h3>
      <div id="calculator">
        <input id="value_result" htmlFor="textarea" placeholder={valfinal} />
        <button type="button" id="value_AC" onClick={handleClick}>AC</button>
        <button type="button" id="value_+/-" onClick={handleClick}>+/-</button>
        <button type="button" id="value_%" onClick={handleClick}>%</button>
        <button type="button" id="value_/" className="principal_operators" onClick={handleClick}>÷</button>
        <button type="button" id="value_7" onClick={handleClick}>7</button>
        <button type="button" id="value_8" onClick={handleClick}>8</button>
        <button type="button" id="value_9" onClick={handleClick}>9</button>
        <button type="button" id="value_x" className="principal_operators" onClick={handleClick}>x</button>
        <button type="button" id="value_4" onClick={handleClick}>4</button>
        <button type="button" id="value_5" onClick={handleClick}>5</button>
        <button type="button" id="value_6" onClick={handleClick}>6</button>
        <button type="button" id="value_-" className="principal_operators" onClick={handleClick}>-</button>
        <button type="button" id="value_1" onClick={handleClick}>1</button>
        <button type="button" id="value_2" onClick={handleClick}>2</button>
        <button type="button" id="value_3" onClick={handleClick}>3</button>
        <button type="button" id="value_+" className="principal_operators" onClick={handleClick}>+</button>
        <button type="button" id="value_0" onClick={handleClick}>0</button>
        <button type="button" id="value_." onClick={handleClick}>.</button>
        <button type="button" id="value_=" onClick={handleClick} className="principal_operators">=</button>
      </div>
    </>
  );
};

export default Calculator;
