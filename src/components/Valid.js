import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.scss';

const Valid = ({ name, email, password }) => (
  <div className={styles.isValid}>
    <p>
      Name :
      <strong>{name}</strong>
    </p>
    <p>
      Email:
      <strong>{email}</strong>
    </p>
    <p>
      Password:
      <strong>{password}</strong>
    </p>
  </div>
);

Valid.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Valid;
