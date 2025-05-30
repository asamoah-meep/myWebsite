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
                        <h2>I'm Jeffrey Asamoah</h2>
                        <Dropdown title="About Me" openOnStart>
                            <p>Hey, looks like you found my website!</p>
                            <p>My name is Jeffrey Asamoah, and I'm currently living in Queens, NY.
                                I studied Mathematics and Computer Science at New York University and graduated 
                                in May 2020.
                            </p>
                            <p> My hobbies include running, coding, and 3D modelling. In November 2024
                                the NYC Marathon, and I'm hoping to get some more marathons under my belt in the coming years!
                                For a list of my coding projects and recent 3D works, you can hit the projects and gallery tabs respectively.
                            </p>
                            <p>Currently I am working at Amazon as an SDE II. I've been at Amazon since November 2021, working primarily on the DEX prime team.
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
                        <ProjectHeader subject='Timeline' name='Tutor Timeline'/>
                        <ProjectHeader subject='KMeans' name='K-Means Demo'/>
                        <ProjectHeader subject='Website' name='This Website'/>
                        <ProjectHeader subject='QR' name='QR Marketing Project'/>
                </section>
                <section id="contact">
                    <h3>Contact Me</h3>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faEnvelope}/>E-mail: meeplings@gmail.com</p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faPhoneSquare} />Telephone: 914-224-6241</p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faLinkedin}/><a href="https://www.linkedin.com/in/jeffrey-asamoah-07991a125/" target="_blank">LinkedIn</a><br/></p>
                        <p><FontAwesomeIcon className={styles.barIcon} icon={faGithub}/><a href="https://github.com/asamoah-meep" target="_blank">Github</a></p>
                </section>
                {/* <section id='TimelineHeader'>
                    <h3>Projects</h3>
                    <Dropdown title="Timeline App">
                    <p>I created this timeline app to emulate the project I worked on during my Comcast Internship. At my internship my project was 
                        to create a foward-facing visual to display how the Xfinity Fraud Managment (XFM) team monitored and mitigated fraud activity.
                        For my internship I displayed the ~40 use cases of potentially fraudulent activity and plotted the occurences of each usecase. The 
                        app allowed for you to filter which items you wanted to look at as well as select the timeframe on which you were looking.
                        I recreated that project using data from my tutoring experience at NYU. Here I display when each student would approach various tutors
                        and the success of the tutoring session.
                    </p>
                    <ul>
                        <li>Built using <a href="https://reactjs.org/" target="_blank"> React.js</a></li>
                        <li>Data was read from<a href="http://cassandra.apache.org/" target="_blank"> Cassandra DB (now static data)</a></li>
                        <li>Used <a href="https://d3js.org/" target="_blank">D3 libraries</a> to scale and plot data points according to their dates</li>
                        <li>Used D3 libraries to create a window frame to adjust the date window of viewing</li>
                    </ul>
                    </Dropdown>
                    <a href='https://github.com/asamoah-meep/101Timeline' target="_blank">View source</a><br/>
                    <Link href="/101Timeline">Live Demo</Link>
                </section>
                <section id='KMeansHeader'>
                    <Dropdown title="K-Means Demo">
                        <p>This <a href="https://en.wikipedia.org/wiki/K-means_clustering" target="_blank">K-Means</a> project is a self-made data clustering algorithm that 
                            I created for my predictive analytics class. The algorithm takes in 24 documents roughly concerned with 3 topics (Mouth and Foot Diseases, 
                            Airline Safety, and International Housing Prices) and clusters them into k centroids. The data is 1<sup>st</sup> converted into a TF-IDF matrix adjusted for 
                            the lengths of the respective documents. The data is then trimmed by removing low intra-dimensional words, combining highly correlated dimensions, 
                            and then adjusting the matrix using <a href="https://en.wikipedia.org/wiki/Principal_component_analysis" target="_blank">PCA</a>.The similarity is 
                            measured using <a href="https://en.wikipedia.org/wiki/Cosine_similarity" target="_blank">cosine similarity</a> into clusted determined by initial 
                            means furthest away from each other (see <a href="https://en.wikipedia.org/wiki/K-means%2B%2B" target="_blank">K-Means++</a>). 
                            After the data is clustered it is then transformed again by PCA onto 2 dimensions and plotted on a 2-D graph. 
                        </p>
                        <ul>
                            <li>Built in <a href="https://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html" target="_blank">Java</a></li>
                            <li>Used <a href="https://commons.apache.org/proper/commons-math/" target="_blank">Apache Commons</a> Math for vector/matrix manipulation</li>
                            <li>Used <a href="http://www.jfree.org/jfreechart/" target="_blank">JFree charts</a> to create plots</li>
                        </ul>
                    </Dropdown>
                    <a href='https://github.com/asamoah-meep' target="_blank">View source</a>
                </section>
                <section id='QRHeader'>
                    <Dropdown title='QR Marketing Project'>
                        <p>
                            This project was to build a mobile-friendly web page to demo the use of <a href="https://en.wikipedia.org/wiki/QR_code" target="_blank">QR codes </a> 
                            in advertising. QR codes are functionally 2-D bar codes and since most mobile phones come equipped to scan them, it makes sense to leverage them for 
                            quick access to a web page. The page makes use of CSS media queries and 
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank"> Responsive Design Practices</a> to be responsive 
                            to different devices in order to be visually appealing across all devices.
                        </p>
                        <ul>
                            <li>Build for <a href='https://www.pvh.com/' target='_blank'>PVH</a></li>
                            <li>Using <a href='https://en.wikipedia.org/wiki/QR_code' target='blank'>QR codes</a> for easy mobile marketing</li>
                        </ul>
                    </Dropdown>
                    <Link href='/Klein/pvh.html'>QR Project</Link>
                </section>
                <section id="WebsiteHeader">
                    <Dropdown title='This Website'>
                        <p>
                            The website you see here was built using Next.js. a server-side framework built on top of React. I wanted to create
                            a website to showcase all of projects and work that I am proud of. Since it is important to demo projects as transparently
                            and seemlessly as possible it made sense to host it all on a single website. This website will continuously be a work in progress
                            as I try to implement and add both new features and new projects.
                        </p>
                        <p>In Progress:</p>
                        <ul>
                            <li>About Me</li>
                            <li>Implementing more 3D models to gallery</li>
                            <li>Responsive Design</li>
                        </ul>
                        <ul>
                            <li>Built using <a href="https://nextjs.org/" target="_blank">Next.js</a></li>
                            <li>Hosted using <a href="https://zeit.co/docs#related" target="_blank">Zeit</a></li>
                        </ul>
                    </Dropdown>
                </section>
                <section id="ocrAPI">
                    <Dropdown title='OCR API'>
                        <p>My 1st project at GEP was to help construct an <a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank">API </a> 
                            for our <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank"> Optical Code Recognition (OCR)</a> project. 
                            Our API would recieve data from the AI that read the data (in our case invoices), identify key elements and information, save it into our database, and try
                            to create the invoice on our service with the data. My role was was to create unit tests for new components, migrate data accessing
                            points to seperate API calls for security/independence, and implement new errors for missing information within the documents. This 
                            project is one of the 1st enterprise projects I've worked on with a team and it has taught me a lot about the importance of communication,
                            both in clarity of code and working with colleges. </p>
                            <ul>
                                <li>Front End done in <a href="https://angular.io/" target="_blank">Angular5/</a></li>
                                <li>Back End done in <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">C# .NET framework</a></li>
                                <li>API hosted with <a href="https://docs.microsoft.com/en-us/iis/extensions/introduction-to-iis-express/iis-express-overview"
                                    target="_blank">IIS Express</a></li>
                                <li>Using <a href="https://www.oracle.com/mysql/" target="_blank">MySQL database</a></li>
                            </ul>
                    </Dropdown>
                </section> */}
            </div>
        </>
    )
}