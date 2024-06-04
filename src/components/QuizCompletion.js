// Page 1.c - Quiz Completion Page

//import React from 'react';
import { PageFooter } from "./footer";
import { Header } from "./Header";
import { NavLink } from "react-router-dom";

export function PageQuizCompletion(props){
  return (
    <body>
      < Header />
      <main>
        <section id="quiz-completion-page">
          <h1>Congratulations on completing today's check-in!</h1>
          <h2>Here is your today's MoodyBuddy!</h2>
          <img src="../img/doog 1.png" alt="A cute pixel art Shiba Inu" className="main" />
          <p>dog breed</p>
          <section className="name-input-container">
            <input type="text" placeholder="Name" />
          </section>
          <p className="quote">
            Remember, even on tough days, I'm here to wag my tail and remind you that brighter moments are just around the corner.
            You're doing great!
          </p>
          <button type="button" className="button"><NavLink to="/PageHome">Back to Home</NavLink></button>
        </section>
      </main>
      <PageFooter />
    </body>
  );
}
