import style from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <div className={style.message}>
      <h1 className={style.message__title}>Please leave feedback</h1>
      <div className={style.message__section}>
        {options.map(btn => (
          <button
            className={style.message_buttons}
            value={btn}
            key={btn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
