import React from 'react'
import styles from "./Editor.module.css"
import { useState } from 'react';
import InputControl from '../inputControl/inputControl';
const Editor = (props) => {
    const sections = props.sections;
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

const workExpBody = (
<div className={styles.detail}>
  <div className={styles.row}>
    <InputControl 
    label="Title"
    placeholder = "Enter title eg. Frontend devloper"
    />
<InputControl
label="Company Name"
placeholder="Enter title eg. amazon"
/>
  </div>
  <div className={styles.row}>
    <InputControl 
    label="Certificate Link"
    placeholder="Enter certificate link"
    />
    <InputControl
    label="Location"
    placeholder="Enter certificate link"
    />
  </div>
  <div className={styles.row}>
    <InputControl 
    label="Start Date"
    type="date"
    placeholder="Enter start date of work"
    />
    <InputControl
    label="End Date"
    type="date"
    placeholder="Enter end date of work"
    />
  </div>
  <div className={styles.column}>
      <label>Enter work description</label>
      <InputControl placeholder="Line 1"/>
      <InputControl placeholder="Line 2"/>
      <InputControl placeholder="Line 3"/>
  </div>
</div>
);
const projectBody = (
  <div className={styles.detail} >
    <div className={styles.row}>
      <InputControl 
      label="Title"
      placeholder = "Enter title eg. Frontend devloper"
      />
  <InputControl
  label="Company Name"
  placeholder="Enter title eg. amazon"
  />
    </div>
    <div className={styles.row}>
      <InputControl 
      label="Certificate Link"
      placeholder="Enter certificate link"
      />
      <InputControl
      label="Location"
      placeholder="Enter certificate link"
      />
    </div>
    <div className={styles.row}>
      <InputControl 
      label="Start Date"
      type="date"
      placeholder="Enter start date of work"
      />
      <InputControl
      label="End Date"
      type="date"
      placeholder="Enter end date of work"
      />
    </div>
    <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl placeholder="Line 1"/>
        <InputControl placeholder="Line 2"/>
        <InputControl placeholder="Line 3"/>
    </div>
  </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map(key=>(
          <div 
      className={ `${styles.section} 
      ${activeSectionKey===key ? styles.active: ""}`}
      key={key}
      onClick={()=> setActiveSectionKey(key)}>{sections[key]}</div>
        ))}
      </div>
      <div className={styles.body}>
        <div className={styles.body}>
          <InputControl label="Title" placeholder="Enter Section Title"/>
        </div>
      </div>
    </div>
  )
}

export default Editor
