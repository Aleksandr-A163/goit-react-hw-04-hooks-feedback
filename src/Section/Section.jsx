import React from 'react';
import PropTypes from 'prop-types';
import cs from './Section.module.css';

const Section = ({ children }) => (
  <div className={cs.Container}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
