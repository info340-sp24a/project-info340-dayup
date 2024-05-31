import React from 'react';
//import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

export function NavBar() {
  return (
    <nav className="navbar">
      <section className="nav-sidebar">
        <button className="nav-button">Daily Check-in</button>
        <button className="nav-button">Your Puppy</button>
        <button className="nav-button">Mood Log</button>
        <button className="nav-button">Puppy List</button>
      </section>
    </nav>
  );
}