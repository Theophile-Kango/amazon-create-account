import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.scss';

const Error = ({ password1, password2 }) => (
  <div className={styles.error}>
    {password1 !== password2 && (<p>Password and repepeted passord fields don&apos;t match</p>)}
    {password1.length < 6 && (<p>Password must be at least 6 characters</p>)}
  </div>
);

Error.propTypes = {
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
};

export default Error;
