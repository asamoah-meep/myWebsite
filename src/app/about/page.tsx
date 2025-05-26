import Link from 'next/link';
import styles from "./about.module.css";
import StickyBar from 'src/components/stickyBar/stickyBar';
import DropDown from 'src/components/dropdown/dropdown';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Jef",
}


export function About() {
    const courses = <div className={styles.aboutMe}>
        <ul>
            <li>Data structures</li>
            <li>Basic Algorithms</li>
            <li>Computer System Organization</li>
            <li>Applied Internet Technology</li>
            <li>Predictive Analytics</li>
        </ul>
        <ul>
            <li>Linear Algebra</li>
            <li>Theory of Probability</li>
            <li>Ordinary Differential Equations</li>
            <li>Mathematics of Finance</li>
            <li>Analytical Statistics</li>
            <li>Real Analysis</li>
            <li>Abstract Algebra</li>
            <li>Functions of a Complex Variable</li>
        </ul>
    </div>

    // const hobbies = <div className={styles.aboutMe}>
    //     <ul>
    //         <li>Running</li>
    //         <li>3-D Modelling</li>
    //     </ul>
    //     <ul>
    //         <li>Coding</li>
    //         <li>Video Games</li>
    //     </ul>
    // </div>
    
    const education = <div>
        <p>High School(2012-2016): Byram Hills High School</p>
        <p>Undergraduate(2016-2020): Mathematics and Computer Science at NYU</p>
    </div>
    
    const work = <div>
        <p>Laguardia Studio(July 2017- September 2018)</p>
        <p>Computer Science Tutoring(September 2017- May 2019)</p>
        <p>Comcast(May 2019 - August 2019)</p>
        <p>PVH Contractor (October 2019 - December 2019)</p>
        <p>Full Stack Engineer at GEP(January 2020-July 2020)</p>
        <p>Full Stack Engineer at Exiger(November 2020-November 2021)</p>
        <p>Software Developer Engineer I at Amazon(November 2021 - March 2024)</p>
        <p>Computer Science Tutor at Juni(October 2023 - May 2024) </p>
        <p>Software Developer Engineer II at Amazon (March 2024-Present)</p>
    </div>

    const races = <div>
        <p>Long Island City 5k (2024)</p>
        <p>New York City Marathon (2024)</p>
        <p>Brooklyn Experience Half Marathon (2025)</p>
    </div>

    const resume =
    <Link href="/misc/Resume.pdf" target='_blank'>My Resume</Link>

    return <>
        <StickyBar/>
        <h1 style= {{display:"inline"}}>About Me</h1>
        <img src="/misc/Jeff.png" alt="Jeff Asamoah" width="15%" height="15%" className={styles.me}></img>
        <DropDown title='Education' openOnStart>{education}</DropDown>
        <DropDown title='Work Experience' openOnStart>{work}</DropDown>
        <DropDown title="Relevant Coursework">{courses}</DropDown>
        <DropDown title="Memorable Races">{races}</DropDown>
        {/* <DropDown title="Hobbies">{hobbies}</DropDown> */}
        {resume}
    </>;
}

export default About;