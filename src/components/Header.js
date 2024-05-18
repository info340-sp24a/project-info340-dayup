// Header & Nav Bar

export function PageHeader(props) {
  return (
    <header>
      <nav id="nav-bar">
        <img src="img/title.png" alt="MoodyBuddy Title" />
        <button id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></button>
        <button className="nav-button">Daily Check-in</button>
        <button className="nav-button">Your Puppy</button>
        <button className="nav-button">Mood Log</button>
        <button className="nav-button">Puppy List</button>
      </nav>
  </header>
  )
}