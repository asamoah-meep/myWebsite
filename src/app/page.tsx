import React from 'react';

import StickyBar from 'src/components/stickyBar/stickyBar';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import Dropdown from 'src/components/dropdown/dropdown';
import styles from "./page.module.css";
import portrait from "../../public/misc/jef.jpg";
import Skill from 'src/components/skill/skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectHeader from 'src/components/projectHeader';

export const metadata: Metadata = {
    title: "Jef Asamoah",
    description: "Jeffrey Asamoah's personal website"
}

export default function Page() {

    const careerStart: number = new Date(2020, 10, 15).getTime();
    const today: number = Date.now();
    const yoe = Math.round((today-careerStart) / (1000 * 60 * 60 * 24 *365));
    const yoeString = `${yoe} Years of Experience`;

    return (
        <>
            <StickyBar/>
            <div className={styles.home}>
                <section id='AboutMe' className={styles.description}>
                    <div className={styles.aboutMeDescription}>
                        <h2>I&apos;m Jeffrey Asamoah</h2>
                        <Dropdown title="About Me" openOnStart>
                            <p>Hey, looks like you found my website!</p>
                            <p>My name is Jeffrey Asamoah, and I&apos;m currently living in Queens, NY.
                                I studied Mathematics and Computer Science at New York University and graduated 
                                in May 2020.
                            </p>
                            <p> My hobbies include running, coding, and 3D modelling. In November 2024
                                the NYC Marathon, and I&apos;m hoping to get some more marathons under my belt in the coming years!
                                For a list of my coding projects and recent 3D works, you can hit the projects and gallery tabs respectively.
                            </p>
                            <p>Currently I am working at Amazon as an SDE II. I&apos;ve been at Amazon since November 2021, working primarily on the DEX prime team.
                                This team is responsible for ensuring Amazon prime customers recieve an elevated delivery experience, and that their prime membership is worthwhile.
                                We do this by ensuring sellers on Amazon.com are meeting certain criteria for prime eligibility, and promoting sellers with the best offerings.
                            </p>
                        </Dropdown>
                        <Link href="/about"></Link>
                    </div>
                    <div className={styles.aboutMeImage}>
                        <Image src={portrait} alt="Jeff Portrait" className={styles.portait}/>
                    </div>
                </section>
                <section id="Stats">
                    <h3>Summary</h3>
                    <div className={styles.summary}>
                        <Skill title={yoeString}/>
                        <Skill title="Languages">
                            <ul>
                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>Scala</li>
                                <li>C#</li>
                                <li>Ruby</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                            </ul>
                         </Skill>
                        <Skill title="Libraries">
                            <ul>
                                <li>Spark</li>
                                <li>Airflow</li>
                                <li>React</li>
                                <li>NextJS</li>
                                <li>ThreeJS</li>
                            </ul>
                        </Skill>
                        <Skill title="Services">
                            <ul>
                                <li>Git</li>
                                <li>AWS</li>
                                <li>Azure</li>
                                <li>GCP</li>
                                <li>PostgresQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </Skill>
                    </div>
                </section>
                <section id="Projects">
                    <h3>Projects</h3>
                        <ProjectHeader subject='Timeline' name='Tutor Timeline' link="tutorTimeline"/>
                        <ProjectHeader subject='KMeans' name='K-Means Demo'/>
                        <ProjectHeader subject='Website' name='This Website'/>
                        <ProjectHeader subject='QR' name='QR Marketing Project'/>
                </section>
                <section id="contact">
                    <h3>Contact Me</h3>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faEnvelope}/>E-mail: meeplings@gmail.com</p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faPhoneSquare} />Telephone: 914-224-6241</p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faLinkedin}/><a href="https://www.linkedin.com/in/jeffrey-asamoah-07991a125/" target="_blank" rel="noreferrer">LinkedIn</a><br/></p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faGithub}/><a href="https://github.com/asamoah-meep" target="_blank" rel="noreferrer">Github</a></p>
                </section>
            </div>
        </>
    )
}