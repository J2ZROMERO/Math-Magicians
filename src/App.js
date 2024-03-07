/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Basic from './components/basic_calculator';
import QuoteDisplay from './components/quotes';
import apiRequest from './api/ninja';



(async () => {
  const result = await apiRequest();
  console.log(result);
})();


function App() {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quote = await apiRequest();
        setRandomQuote(quote);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 // Fetch data initially
 fetchData();
 // Set up interval to fetch data every 5 seconds
 const intervalId = setInterval(fetchData, 8000);
 // Clean up the interval when the component is unmounted
 return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (
    <div>
      <Basic />
      <QuoteDisplay quote={randomQuote} />
    </div>
  );
}

export default App;
