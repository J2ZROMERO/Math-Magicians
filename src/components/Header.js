import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <header>
      <h1 style={{
        color: 'black',
        marginLeft: '2%',
      }}
      >
        Math Magicians
      </h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
