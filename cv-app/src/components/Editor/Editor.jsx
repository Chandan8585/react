import React, { useEffect } from 'react'
import { X } from "react-feather";
import styles from "./Editor.module.css"
import { useState } from 'react';
import InputControl from '../inputControl/inputControl';

const Editor = (props) => {
    const sections = props.sections;
    const information = props.information;

const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

const [activeInfromation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
);
const [sectionTitle , setSectionTitle] = useState(
  sections[Object.keys(sections)[0]]
);
const [values, setValues] = useState({
  name:activeInfromation?.detail?.name || "", 
  title:activeInfromation?.detail?.title || "", 
  linkedIn:activeInfromation?.detail?.linkedin || "", 
  github:activeInfromation?.detail?.github || "",
  phone:activeInfromation?.detail?.phone || "", 
  email:activeInfromation?.detail?.email || "", 

});
const workExpBody = (
<div className={styles.detail}>
  <div className={styles.row}>
    <InputControl 
    label="Title"
    placeholder = "Enter title eg. Frontend devloper"
    defaultValue = {values.title}
    />
<InputControl
label="Company Name"
placeholder="Enter title eg. amazon"
defaultValue={values.companyName}
/>
  </div>
  <div className={styles.row}>
    <InputControl 
    label="Certificate Link"
    placeholder="Enter certificate link"
    defaultValue={values.certificateLink}
    />
    <InputControl
    label="Location"
    placeholder="Enter certificate link"
    defaultValue={values.location}
    />
  </div>
  <div className={styles.row}>
    <InputControl 
    label="Start Date"
    type="date"
    placeholder="Enter start date of work"
    defaultValue={values.startDate}
    />
    <InputControl
    label="End Date"
    type="date"
    placeholder="Enter end date of work"
    defaultValue= {values.endDate}
    />
  </div>
  <div className={styles.column}>
      <label>Enter work description</label>
      <InputControl placeholder="Line 1"
      defaultValue = {values.points ? values.points[0] : ""}
      />
      <InputControl placeholder="Line 2"
      defaultValue = {values.points ? values.points[1] : ""}
      />
      <InputControl placeholder="Line 3"
      defaultValue = {values.points ? values.points[2] : ""}
      />
  </div>
</div>
);
const projectBody = (
  <div className={styles.detail} >
    <div className={styles.row}>
      <InputControl 
      label="Title"
      defaultValue = {values.title}
      placeholder = "Enter title eg. Chat app"
      />

  <InputControl
  label="Overview"
  placeholder="Enter basic overview of project"
  defaultValue = {values.overview}
  />
    </div>
    <div className={styles.row}>
      <InputControl 
      label="Deployed Link"
      defaultValue = {values.link}
      placeholder="Enter deployed link"
      />
      <InputControl
      label="Github Link"
      placeholder="Enter github link of Project"
      defaultValue={values.github}
      />
    </div>
  
    <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl placeholder="Line 1"
        defaultValue={values.points ? values.points[0]:""}
        />
        <InputControl placeholder="Line 2"
        defaultValue={values.points ? values.points[1]:""}
        />
        <InputControl placeholder="Line 3"
        defaultValue={values.points ? values.points[2]:""}
        />
        <InputControl placeholder="Line 4"
        defaultValue={values.points ? values.points[3]:""}
        />
    </div>
  </div>
  );
  const educationBody = (
    <div className={styles.detail} >
      <div className={styles.row}>
        <InputControl 
        label="Title"
        placeholder = "Enter title eg. Btech"
        defaultValue = {values.title}
        />
    <InputControl
    label="College/School Name"
    placeholder="Enter Name of your School / College"
    defaultValue={values.college}
    />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Start Date"
        type="date"
        placeholder="Enter Session Starting Date"
        defaultValue={values.startDate}
        />
        <InputControl
        label="End Date"
        placeholder="Enter Session Ending Date"
        defaultValue= {values.endDate}
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
        label="Name"
        placeholder="Enter your full name eg. Ashu"
        defaultValue={values.name}
        />
        <InputControl
        label="Title"
        placeholder="Enter your title"
        defaultValue={values.title}
        />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Email ID"
        placeholder="Enter your Email Id"
        defaultValue={values.email}
        />
        <InputControl
        label="Enter Phone"
        placeholder="Enter your phone Number"
        defaultValue={values.phone}
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
  };

  useEffect(()=>{
    
 setActiveInformation(information[sections[activeSectionKey]]);
 setSectionTitle(sections[activeSectionKey]);
  },[activeSectionKey]);



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
       
          <InputControl
           label="Title" 
           placeholder="Enter Section Title"
           value={sectionTitle}
           onChange={(event)=> setSectionTitle(event.target.value)}
           />
      
           <div className={styles.chips}>

              {
                activeInfromation?.details ? 
                activeInfromation?.details?.map((item, index)=> (
                  <div className={styles.chip} key={item.title+ index}>
                              <p>{sections[activeSectionKey]} {index+1}</p>
                              <X/>
                  </div>
                ))
                : ""}
              </div>
          {generateBody()}
          <button>Save</button>
        </div>
      
    </div>
  )
}

export default Editor
