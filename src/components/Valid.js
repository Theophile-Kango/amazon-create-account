import React from 'react';
import styles from './../App.module.scss';

const Valid = ({name, email, password}) => (
    <div className={styles.isValid}>
        <p>Name : <span>{name}</span></p>
        <p>Email: <span>{email}</span></p>
        <p>Password: <span>{password}</span></p>
    </div>
)


export default Valid
