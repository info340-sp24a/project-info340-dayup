import { NavBar } from './navbar';
import { PageFooter } from "./footer";
import React, { useState } from 'react';
import moodlogData from '../data/moodlogdata-mock.json';
import { PageHeader } from "./Header";

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
export function MoodLog() {
  const [entries, setEntries] = useState(moodlogData);

  const renderEntries = () => {
    return entries.map((entry, index) => (
      <div key={index} className="mood-card">
        <div className="date-box">
          <span>{formatDate(entry.date)}</span>
        </div>
        <div className="mood-details">
          <div className="mood-icon">
            < img src={`img/emojis/color-face${entry.mood}.png`} alt="Mood"/><br />
            <span>Mood</span>
          </div>
          <div className="sleep-icon">
            < img src={`img/emojis/color-circle${entry.sleep}.png`} alt="Sleep"/><br />
            <span>Sleep</span>
          </div>
          <div className="motivation-icon">
            < img src={`img/emojis/color-circle${entry.motivation}.png`} alt="Motivation"/><br />
            <span>Motivation</span>
          </div>
        </div>
        <div className="note-box">
          <p>{entry.daily_note}</p >
        </div>
      </div>
    ));
  };

  return (
    <body>
      <NavBar />
      <main>
        <section className="moodlog-container">
          {renderEntries()}
        </section>
      </main>
      <PageFooter />
    </body>
  );
}