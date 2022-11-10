import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Quote from '../pages/Quote';
import Home from '../pages/Home';

import '../style.css';

export default class AppCalculator extends React.Component {
  static showCalculator() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </Router>

      </React.StrictMode>,
    );
  }

  constructor(props) {
    super(props);
    this.state = 0;
  }
}
