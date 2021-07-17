import React from 'react'
import styles from './../App.module.scss';

const Error = ({password1, password2}) => (
    <div className={styles.error}>
        {password1 !== password2 && (<p>Password and repepeted passord fields don't much</p>)}
        {password1.length < 6 && (<p>Password must be at least 6 characters</p>)}
    </div>
)

export default Error;
