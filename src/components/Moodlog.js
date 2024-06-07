import { NavBar } from './navbar';
import { PageFooter } from "./footer";
import React, { useState, useEffect } from 'react';


function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function MoodLog({dataCollection}) {
  //const [entries, setEntries] = useState([moodlogData]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const data = await dataCollection();
        console.log("Fetched Data:", data);
        setData(data); 
    }
    fetchData();
  }, [dataCollection]);

  const renderEntries = () => {
    return data.map((entry, index) => (
      // return entries.map((entry, index) => (
      <div key={index} className="mood-tracker-item">
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