import { PageHeader } from "./Header";
import { PageFooter } from "./Footer";
import React, {useState} from 'react';


export function MoodLog() {
    const [entries, setEntries] = useState(Array.from({ length: 4 }, () => ({
      date: getRandomDate(),
      mood: '',
      sleep: '',
      motivation: '',
      note: ''
    })));
  
    const [newEntry, setNewEntry] = useState({
      date: getRandomDate(),
      mood: '',
      sleep: '',
      motivation: '',
      note: ''
    });
  
    const addNewEntry = () => {
      setEntries([...entries, newEntry]);
      setNewEntry({
        date: getRandomDate(),
        mood: '',
        sleep: '',
        motivation: '',
        note: ''
      });
    };
  
    const renderEntries = () => {
      return entries.map((entry, index) => (
        <div key={index} className="mood-tracker-item">
          <div className="date-box">
            <div>{entry.date.split(' ')[0]}</div>
            <div>{entry.date.split(' ')[1]}</div>
          </div>
          <div className="mood-indicators">
            <div>
              <div className="mood-indicator">{entry.mood}</div>
              <div className="indicator-label">Mood</div>
            </div>
            <div>
              <div className="mood-indicator">{entry.sleep}</div>
              <div className="indicator-label">Sleep</div>
            </div>
            <div>
              <div className="mood-indicator">{entry.motivation}</div>
              <div className="indicator-label">Motivation</div>
            </div>
          </div>
          <input 
            type="text" 
            className="mood-note" 
            placeholder="How are you feeling?" 
            value={entry.note} 
            onChange={(e) => updateNote(index, e.target.value)} 
          />
        </div>
      ));
    };
}