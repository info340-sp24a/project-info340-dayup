import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Daily Check-in</Link>
        </li>
        <li className="navbar-item">
          <Link to="/your-puppy">Your Puppy</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Moodlog">Mood Log</Link>
        </li>
        <li className="navbar-item">
          <Link to="/PuppyCards">Puppy List</Link>
        </li>
      </ul>
    </nav>
  );
}
