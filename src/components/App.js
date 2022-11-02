import ReactDOM from 'react-dom/client';
import React from 'react';
import Calculator from './Calculator';

export default class AppCalculator extends React.Component {
  static showCalculator() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Calculator />);
  }

  constructor(props) {
    super(props);
    this.state = 0;
  }
}
