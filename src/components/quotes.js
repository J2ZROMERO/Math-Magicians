/* eslint-disable */
import React from 'react';

const QuoteDisplay = (props) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>TRIVIA MATH by   <a href='https://apilist.fun/category/math' >API list [...]</a> </p>
            

            
            <footer className="blockquote-footer">{props.quote}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
