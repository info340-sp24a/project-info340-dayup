import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className="navbar-item">
          <Link to="/puppy-cards">Puppy Cards</Link>
        </li>
        <li className="navbar-item">
          <Link to="/your-puppy">Your Puppy</Link>
        </li>
      </ul>
    </nav>
  );
}
