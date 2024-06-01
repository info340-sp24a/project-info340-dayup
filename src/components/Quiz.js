// Page 1.b - Quiz Page

import { PageHeader } from "./Header";
import { PageFooter } from "./Footer";
import { NavBar } from "./navbar";

export function PageQuiz(props) {
  return (
    <body>
      < NavBar />
      <PageHeader />
      <main>
        <section id="quiz-container" className="container">
          <section id="quiz-left-side">
            {/* Question 1 */}
            <section id="question1" className="question">
              <h2>How was your day?</h2>
              <section id="day-selection" className="quiz-icon-sections">
                <img src="img/emojis/gray-face1.png" alt="This is a happy face - choosing this means users are happy and joyful, at the happiest end of the spectrum." id="face1" />
                <img src="img/emojis/gray-face2.png" alt="This is a smiling face - satisfaction, slightly below joy." id="face2" />
                <img src="img/emojis/gray-face3.png" alt="This is an okay face - calm, means users are at a state of peacefulness." id="face3" />
                <img src="img/emojis/gray-face4.png" alt="This is a sad face - sadness/disappointment, the second saddest emotion." id="face4" />
                <img src="img/emojis/gray-face5.png" alt="This is a crying face - the saddest end of the spectrum." id="face5" />
              </section>
            </section>
            {/* Question 2 */}
            <section id="question2" className="question">
              <h2>How well did you sleep?</h2>
              <section id="sleep-selection" className="quiz-icon-sections">
                <img src="img/emojis/gray-circle1.png" alt="This is an empty circle" className="circle1" />
                <img src="img/emojis/gray-circle2.png" alt="This is a 20% full circle" className="circle2" />
                <img src="img/emojis/gray-circle3.png" alt="This is a 40% full circle" className="circle3" />
                <img src="img/emojis/gray-circle4.png" alt="This is a 60% full  circle" className="circle4" />
                <img src="img/emojis/gray-circle5.png" alt="This is a full circle" className="circle5" />
              </section>
            </section>
            {/* Question 3 */}
            <section id="question3" className="question">
              <h2>How motivated are you?</h2>
              <section id="motivation-selection" className="quiz-icon-sections">
                <img src="img/emojis/gray-circle1.png" alt="This is an empty circle" className="circle1" />
                <img src="img/emojis/gray-circle2.png" alt="This is a 20% full circle" className="circle2" />
                <img src="img/emojis/gray-circle3.png" alt="This is a 40% full circle" className="circle3" />
                <img src="img/emojis/gray-circle4.png" alt="This is a 60% full  circle" className="circle4" />
                <img src="img/emojis/gray-circle5.png" alt="This is a full circle" className="circle5" />
              </section>
            </section>
          </section>
          {/* Right side page content */}
          <section id="quiz-right-side">
            <form className="form">
              <label htmlFor="thankful">What is something or someone that you feel thankful for today?</label><br />
              <input type="text" id="thankful" name="thankful" /><br />
              <label htmlFor="daily-note">Daily Note</label><br />
              <input type="text" id="daily-note" name="daily-note" value="Hiii" /><br /><br />
              <input type="submit" value="Submit" className="button" />
            </form>
          </section>
        </section>
      </main>
      <PageFooter />
    </body>
  );
}