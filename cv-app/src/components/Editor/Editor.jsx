import React from 'react'
import { X } from "react-feather";
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
      placeholder = "Enter title eg. Chat app"
      />
  <InputControl
  label="Overview"
  placeholder="Enter basic overview of project"
  />
    </div>
    <div className={styles.row}>
      <InputControl 
      label="Deployed Link"
      placeholder="Enter deployed link"
      />
      <InputControl
      label="Github Link"
      placeholder="Enter github link of Project"
      />
    </div>
  
    <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl placeholder="Line 1"/>
        <InputControl placeholder="Line 2"/>
        <InputControl placeholder="Line 3"/>
        <InputControl placeholder="Line 4"/>
    </div>
  </div>
  );
  const educationBody = (
    <div className={styles.detail} >
      <div className={styles.row}>
        <InputControl 
        label="Title"
        placeholder = "Enter title eg. Btech"
        />
    <InputControl
    label="College/School Name"
    placeholder="Enter Name of your School / College"
    />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Start Date"
        type="date"
        placeholder="Enter Session Starting Date"
        />
        <InputControl
        label="End Date"
        placeholder="Enter Session Ending Date"
        />
      </div>
  
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail} >
      <div className={styles.row}>
        <InputControl 
        label="Name"
        placeholder = "Enter your Full Name"
        />
    <InputControl
    label="Title"
    placeholder="Enter your title eg. Frontend developer"
    />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Linkedin Link"
        placeholder="Enter your LinkedIn Profile link"
        />
        <InputControl
        label="Github Link"
        placeholder="Enter your github Profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Email ID"
        placeholder="Enter your Email Id"
        />
        <InputControl
        label="Enter Phone"
        placeholder="Enter your phone Number"
        />
      </div>
    
      <div className={styles.column}>
          <label>Enter work description</label>
          <InputControl placeholder="Line 1"/>
          <InputControl placeholder="Line 2"/>
          <InputControl placeholder="Line 3"/>
          <InputControl placeholder="Line 4"/>
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail} >
      
      <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl placeholder="Line 1"/>
          <InputControl placeholder="Line 2"/>
          <InputControl placeholder="Line 3"/>
          <InputControl placeholder="Line 4"/>
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail} >
      <InputControl
      label="Summary"
      placeholder="Enter your objective/summary"
      />
  
    </div>
  );
  const otherBody = (
    <div className={styles.detail} >
      <InputControl
      label="Other"
      placeholder="Enter your something"
      />
  
    </div>
  );
  const generateBody = ()=>{
    switch(sections[activeSectionKey]){
      case sections.basicInfo: 
      return basicInfoBody;
      case sections.workExp:
         return workExpBody;
      case sections.project: 
      return projectBody;
      case sections.education: 
      return educationBody;
      case sections.achievements:
         return achievementsBody;
      case sections.summary:
         return summaryBody;
      case sections.other: 
      return otherBody;
      default: return null;
    }
  }
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
       
          <InputControl label="Title" placeholder="Enter Section Title"/>

           <div className={styles.chips}>
            <div className={styles.chip}>
              <p>Project 1</p>
              <X/>
               </div>
              <div className={styles.chip}>
              <p>Project 2</p>
              <X/>
            </div>
          </div>
          {generateBody()}
        </div>
      
    </div>
  )
}

export default Editor
