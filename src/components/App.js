import React, { useEffect, useState } from 'react';
import { PageHome } from './Home';
import { PageQuiz } from './Quiz';
import { PageQuizCompletion } from './QuizCompletion';
import { PagePuppyCards } from './PuppyCards';
import { YourPuppy } from './Puppy';
import { PageLogin } from './Login';
import { MoodLog } from './Moodlog';
//import { NavBar } from './navbar';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import DEFAULT_USERS from '../data/users.json';


export function App({ puppyData }) {
  const db = getDatabase();
  const messageRef = ref(db, "message");
//  const sarahRef = ref(db, "people/sarah");
    firebaseSet(messageRef, newMessageObj);

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;

  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    // changeUser(DEFAULT_USERS[1])

    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUserObj) => {
      console.log("auth state changed")
      console.log(firebaseUserObj);

      if(firebaseUserObj != null){ //user signed in
        firebaseUserObj.userId = firebaseUserObj.uid;
        firebaseUserObj.userName = firebaseUserObj.displayName;
        firebaseUserObj.userImg = firebaseUserObj.photoURL || "/img/null.png";
        setCurrentUser(firebaseUserObj);
      }
      else { //is null, user signed out
        setCurrentUser(DEFAULT_USERS[0]);
      }
    })
  }, [])



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
