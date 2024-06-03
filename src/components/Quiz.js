import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PageFooter } from "./footer";
import { NavBar } from "./navbar";

export function PageQuiz(props) {
  const formik = useFormik({
    initialValues: {
      day: '',
      sleep: '',
      motivation: '',
      thankful: '',
      dailyNote: 'Hiii',
    },
    validationSchema: Yup.object({
      thankful: Yup.string().required('This field is required'),
      dailyNote: Yup.string().required('This field is required'),
    }),
    onSubmit: values => {
      console.log(values);
      // Here, submit your form values to a server or handle them as needed
    },
  });

  return (
    <>
      <NavBar />
      <main>
        <section id="quiz-container" className="container">
          <form className="form" onSubmit={formik.handleSubmit}>
            {/* Questions with Images as Radio Buttons */}
            <section id="quiz-left-side">
              {/* Question 1 */}
              <section id="question1" className="question">
                <h2>How was your day?</h2>
                <section id="day-selection" className="quiz-icon-sections">
                  {['happy', 'smiling', 'okay', 'sad', 'crying'].map((emotion, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="day"
                        value={emotion}
                        onChange={formik.handleChange}
                        className="hidden"
                      />
                      <img src={`img/emojis/gray-face${index + 1}.png`} alt={`This is a ${emotion} face`} />
                    </label>
                  ))}
                </section>
              </section>
              {/* Question 2 */}
              <section id="question2" className="question">
                <h2>How well did you sleep?</h2>
                <section id="sleep-selection" className="quiz-icon-sections">
                  {[0, 20, 40, 60, 100].map((percent, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="sleep"
                        value={percent}
                        onChange={formik.handleChange}
                        className="hidden"
                      />
                      <img src={`img/emojis/gray-circle${index + 1}.png`} alt={`This is a ${percent}% full circle`} />
                    </label>
                  ))}
                </section>
              </section>
              {/* Question 3 */}
              <section id="question3" className="question">
                <h2>How motivated are you?</h2>
                <section id="motivation-selection" className="quiz-icon-sections">
                  {[0, 20, 40, 60, 100].map((percent, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="motivation"
                        value={percent}
                        onChange={formik.handleChange}
                        className="hidden"
                      />
                      <img src={`img/emojis/gray-circle${index + 1}.png`} alt={`This is a ${percent}% full circle`} />
                    </label>
                  ))}
                </section>
              </section>
            </section>
            {/* Right side page content */}
            <section id="quiz-right-side">
              <label htmlFor="thankful">What is something or someone that you feel thankful for today?</label><br />
              <input
                type="text"
                id="thankful"
                name="thankful"
                onChange={formik.handleChange}
                value={formik.values.thankful}
              /><br />
              <label htmlFor="daily-note">Daily Note</label><br />
              <input
                type="text"
                id="daily-note"
                name="dailyNote"
                onChange={formik.handleChange}
                value={formik.values.dailyNote}
              /><br /><br />
              <input type="submit" value="Submit" className="button" />
            </section>
          </form>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
