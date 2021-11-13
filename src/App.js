import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

function App() {
  
  const feedbacks = ["good", "neutral", "bad"];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const onLeaveFeedback = (e) => {
    switch (e.target.value) {
      case "good":
        return setGood((good) => good + 1);

      case "neutral":
        return setNeutral((neutral) => neutral + 1);

      case "bad":
        return setBad((bad) => bad + 1);

      default:
        return;
    }
  };

 const countTotalFeedback = () => {
   return good + neutral + bad;
  };

  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total
      ? Math.round((good * 100) / total)
      : 0;
  };

    const total = countTotalFeedback();
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            feedbacks={feedbacks}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }


export default App;
