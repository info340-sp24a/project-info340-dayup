import React from 'react';
//import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation


export function NavBar() {
return (
<nav id="navBar">
<button className="navButtonSmall">Daily Check-in</button>
<button className="navButtonSmall">Your Puppy</button>
<button className="navButtonSmall">Mood Log</button>
<button className="navButtonSmall">Puppy List</button>
</nav>
);
}
