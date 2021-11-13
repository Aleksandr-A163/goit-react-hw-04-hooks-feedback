import style from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ feedbacks, onLeaveFeedback }) => (
  <>
    <div className={style.message}>
      <h1 className={style.message__title}>Please leave feedback</h1>
      <div className={style.message__section}>
        {feedbacks.map(feedback => (
          <button
            className={style.message_buttons}
            value={feedback}
            key={feedback}
            type="button"
            onClick={onLeaveFeedback}
          >
            {feedback}
          </button>
        ))}
      </div>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
