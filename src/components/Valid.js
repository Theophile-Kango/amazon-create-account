import React from 'react';
import styles from './../App.module.scss';

const Valid = ({name, email, password}) => (
    <div className={styles.isValid}>
        <p>Name : <strong>{name}</strong></p>
        <p>Email: <strong>{email}</strong></p>
        <p>Password: <strong>{password}</strong></p>
    </div>
)


export default Valid
