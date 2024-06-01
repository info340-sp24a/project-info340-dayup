import React, { useState } from 'react';
import { PageHome } from './Home';
import { PageQuiz } from './Quiz';
import { PageQuizCompletion } from './QuizCompletion';
import { PagePuppyCards } from './PuppyCards';
import { YourPuppy } from './Puppy';
//import { NavBar } from './Navbar';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

export function App({ puppyData }) {
//  const db = getDatabase();
//  const peopleRef = ref(db, "people");
//  const sarahRef = ref(db, "people/sarah");
//  firebaseSet(sarahRef, "thats me, sarah");

  return (
    <div className="component-app">
      {/* <PageHome /> */}
      {/* <PageQuiz /> */}
      {/* <PageQuizCompletion /> */}
      {/* { < YourPuppy /> } */}


      {<PagePuppyCards puppyData={puppyData} />}

      {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
    </div>
  );
}
