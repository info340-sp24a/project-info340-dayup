// Page 1.a - Home Page

import { PageHeader } from "./Header";
import { PageFooter } from "./Footer";
import { NavBar } from "./navbar";

export function PageHome(props) {
  return (
    <body>
      < NavBar />
      <PageHeader />
      <main>
          <section id="home-page">
              <h2>How do you feel today?</h2>
              <h3>Record your mood and get your daily MoodyBuddy puppy!</h3>
              <img src="img/heart-bar.png" alt="A heart bar" />
              <button type="button" className="button" id="home-quiz-btn"><a href="quiz.html">Record Today's Mood</a></button>
          </section>
      </main>
      <PageFooter />
    </body>
  );
}
