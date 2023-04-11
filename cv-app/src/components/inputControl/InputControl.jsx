import React from 'react'
import styles from "./InputControl.module.css"
const inputControl = ({label, ...props}) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type='text' {...props} />
    </div>
  );
}

export default inputControl
