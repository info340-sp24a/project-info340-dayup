import { NavBar } from './Navbar';
import { PageFooter } from "./footer";
import React, { useState } from 'react';
import moodlogData from '../data/moodlogdata-mock.json';
import '././index.css';
function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function MoodLog() {
    const [entries, setEntries] = useState(moodlogData);
    
    const getIcon = (type, value) => {
      if (type === 'mood') {
            return `img/emojis/color-face${value}.png`;
        } else if (type === 'sleep' || type === 'motivation') {
            return `img/emojis/color-circle${value}.png`;
        }
        return '';
    }

    const renderEntries = () => {
      return entries.map((entry, index) => (
        <div key={index} className="mood-tracker-item">
          <div className="date-box">
            <span>{formatDate(entry.date)}</span>
          </div>
          <div className="mood-details">
            <div className="mood-icon">
              <img src={getIcon('mood', entry.mood)} alt="Mood" />
              <span>Mood</span>
            </div>
            <div className="sleep-icon">
              <img src={getIcon('sleep', entry.sleep)} alt="Sleep" />
              <span>Sleep</span>
            </div>
            <div className="motivation-icon">
              <img src={getIcon('motivation', entry.motivation)} alt="Motivation" />
              <span>Motivation</span>
            </div>
          </div>
          <div className="note-box">
            <p>{entry.daily_note}</p>
          </div>
        </div>
      ));
    };
    
}