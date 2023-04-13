import React,{useState} from 'react'
import styles from "./Body.module.css"
import Editor from '../Editor/Editor';
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
const sections  = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
};

const [resumeInformation , setResumeInformation] = useState({
  [sections.basicInfo]: {
  id: sections.basicInfo,
  title: sections.basicInfo,
  detail: [],
  },
  [sections.workExp]:{
    id: sections.workExp,
    title: sections.workExp,
    detail: [],
  },
  [sections.project]:{
    id: sections.project,
    title: sections.project,
    detail:[],
  },
   [sections.education]:{
    id: sections.education,
    title: sections.education,
    detail: [],
   },
   [sections.achievements]: {
    id: sections.achievements,
    title: sections.achievements,
    points: [],
   },
   [sections.summary]: {
    id: sections.summary,
    title: sections.summary,
    detail: "",
   },
   [sections.other]: {
    id: sections.other,
    title: sections.other,
    detail: "",
   }
    
})

  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.color}>
            {
                colors.map(item=>(
                    <span
                    key={item} 
                    style={{backgroundColor: item}}
                    className={styles.color}></span>
                  
                ))
            }
        </div>
        <button>Download</button>
      </div>
      <div className={styles.main}>
        <Editor sections={sections} information={resumeInformation}/>
      </div>
    </div>
  )
}

export default Body
