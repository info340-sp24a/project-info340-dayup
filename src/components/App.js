import React, { useEffect, useState } from 'react';
import { PageHome } from './Home';
import PageQuiz from './Quiz';
import { PageQuizCompletion } from './QuizCompletion';
import { PagePuppyCards } from './PuppyCards';
import { YourPuppy } from './Puppy';
import { PageLogin } from './Login';
import { MoodLog } from './Moodlog';
import { getDatabase, ref, set as firebaseSet, push, onValue} from 'firebase/database';
import { Navigate, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import DEFAULT_USERS from '../data/users.json';
import { onSnapshot } from 'firebase/firestore';


export default function App({ puppyData }) {
  // const db = getDatabase();
  // const messageRef = ref(db, "message");
//  const sarahRef = ref(db, "people/sarah");
    // firebaseSet(messageRef, newMessageObj);


  // VIVIAN yesterday's
  // useEffect(() => {
  //   const db = getDatabase();
  //   const matchingRef = ref(db, 'matchingPuppy');
  //   //addEventListener(matchingRef, ()=> {})
  //   onValue(matchingRef, (snapshot) => {
  //     console.log("changed");
  //     const data = snapshot.val();
  //     console.log(data);
  //   })
  // }, [])

  const [data, setData] = useState({});

  // Function to handle data submission to Firebase
  const handleSubmitToFirebase = (formData) => {
    const db = getDatabase();
    const quizRef = ref(db, 'quizFormResponses');
    push(quizRef, formData)
      .then(() => console.log("Data submitted successfully!"))
      .catch(error => console.error('Error submitting data:', error));
  };

  const [currentUser, setCurrentUser] = useState(null); //initially null;

  // *** effect to run when the component first loads ***
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUserObj) => {
      if (firebaseUserObj) {
        // Properly set properties of currentUser
        setCurrentUser({
          userId: firebaseUserObj.uid,
          userName: firebaseUserObj.displayName,
        });
      } else {
        setCurrentUser(null);  // Handle logged out state
      }
    });
  }, []);

  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }


  return (
    <div className="component-app">
      {/* if the whole nav bar is seperated, add here */}
      <Routes>
        {/* protected routes */}
        <Route element={<RequireAuth currentUser={currentUser} />}>
          <Route path="/PageHome/PageQuiz" element = { <PageQuiz handleSubmit={handleSubmitToFirebase}/> } />
          <Route path="/PageHome/PageQuizCompletion" element = { <PageQuizCompletion /> } />
          <Route path="/YourPuppy" element = { <YourPuppy /> } />
          <Route path="/MoodLog" element = { <MoodLog /> } />
          <Route path="/PagePuppyCards" element = { <PagePuppyCards puppyData={puppyData} /> } />
        </Route>

        {/* public routes */}
        <Route path="/PageLogin" element = { <PageLogin currentUser={currentUser} changeUserFunction={changeUser} />} />
        <Route path="/PageHome" element = { <PageHome currentUser={currentUser} />} />

        {/* default route */}
        <Route path="/" element={<Navigate to="/PageHome" />} />
      </Routes>
    </div>
  );
}

function RequireAuth(props) {
  const { currentUser } = props;

  if(!currentUser) { //if no user, say so
    return (
      <p>Forbidden!</p>
    )
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}