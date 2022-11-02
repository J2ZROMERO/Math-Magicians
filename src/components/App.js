import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';

export default class AppCalculator {
  static showCalculator() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Calculator />);
  }
}
