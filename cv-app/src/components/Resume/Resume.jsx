import React, { useEffect, useState } from 'react'
import styles from "./Resume.module.css"
import { AtSign, GitHub, Phone, Linkedin, Paperclip } from 'react-feather';
const Resume = (props) => {

    const [columns , setColumns] = useState([[
], [] ]);

    const workExpSection = (
        <div key={"workExp"} className={`${styles.section}${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Full Stack Developer</p>
                    <p className={styles.subtitle}>Company Name</p>
                    <a className={styles.link}>
                        <Paperclip/>
                        https://we4we4f.com/wefws/wef
                    </a>
                    <a className={styles.link}>
                        <GitHub/>
                        https://we4we4f.com/wefws/wef
                    </a>
                    <p className={styles.overview}>This project is a dummy Project built</p>
                    <ul className={styles.points}>
                        <li className={styles.point}>It is Point 1</li>
                        <li className={styles.point}>It is Point 2</li>
                        <li className={styles.point}>It is Point 3</li>
                    </ul>

                </div>
            </div>
        </div>
    );
    const projectSection = (
        <div key={"project"} className={`${styles.section}${styles.project}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
        </div>
    );
    const educationSection = (
        <div key={"education"} className={`${styles.section}${styles.education}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
        </div>
    );
    const achievementSection = (
        <div key={"achievement"} className={`${styles.section}${styles.achievement}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
        </div>
    );
 
    const summarySection = (
        <div key={"summary"} className={`${styles.section}${styles.other}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
        </div>
    );
    const otherSection = (
        <div key={"other"} className={`${styles.section}${styles.other}`}>
            <div className={styles.sectionTitle}>Work Experience
            </div>
        </div>
    );
    useEffect(()=> {
    setColumns([
    [projectSection, educationSection, summarySection],
    [workExpSection, achievementSection, otherSection]
    ])
    }, [])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Block Chain developer</p>

        <div className={styles.links}>
            <a className={styles.link}>
                <AtSign/>Email@gmail.com 
                </a>
            <a className={styles.link}>
                <Phone/>Email@gmail.com 
                </a>
            <a href="" className={styles.link}>
                <Linkedin />https://linkedin/aswewef
                </a>
            <a href="" className={styles.link}>
                <GitHub />https://github.in/aswewef
                </a>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.coll}>{columns[0]}</div>
        <div className={styles.coll}>{columns[1]}</div>
      </div>
    </div>
  )
}

export default Resume;
