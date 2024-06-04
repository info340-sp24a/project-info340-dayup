import React, { useState } from 'react';
import { PageHome } from './Home';
import { PageQuiz } from './Quiz';
import PageQuizCompletion from './QuizCompletion';
import { PagePuppyCards } from './PuppyCards';
import { YourPuppy } from './Puppy';
import { PageLogin } from './Login';
import { MoodLog } from './Moodlog';
//import { NavBar } from './navbar';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import { Routes, Route } from 'react-router-dom';

export function App({ puppyData }) {
//  const db = getDatabase();
//  const peopleRef = ref(db, "people");
//  const sarahRef = ref(db, "people/sarah");
//  firebaseSet(sarahRef, "thats me, sarah");

  return (
    <div className="component-app">
      <Routes>
        <Route path="/" element = { <PageLogin />} />
        <Route path="/PageLogin" element = { <PageLogin />} />
        <Route path="/PageHome" element = { <PageHome />} />
        <Route path="/PageHome/PageQuiz" element = { <PageQuiz />} />
        <Route path="/PageHome/PageQuizCompletion" element = { <PageQuizCompletion />} /> 
        <Route path="/YourPuppy" element = { <YourPuppy />} />
        <Route path="/MoodLog" element = { <MoodLog />} />  
        <Route path="/PagePuppyCards" element = { <PagePuppyCards puppyData={puppyData} />} />
      </Routes>

      {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
}
