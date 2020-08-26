import Link from 'next/link';
import styles from "./about.module.css";
import Bar from 'src/components/stickyBar.js';
import Dropdown from 'src/components/dropdown.js';
import Helmet from 'react-helmet';

class About extends React.Component{

    render(){

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
                <li>Math of Finance</li>
                <li>Analytical Statistics</li>
            </ul>
        </div>

        const hobbies = <div className={styles.aboutMe}>
            <ul>
                <li>Running</li>
                <li>3-D Modelling</li>
            </ul>
            <ul>
              <li>Coding</li>
                <li>Video Games</li>
            </ul>
        </div>
        
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
        </div>

        const resume =
        <Link href="/misc/Resume.pdf">
            <a target="_blank">My Resume</a>
        </Link>

        return <>
            <Bar>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1 style= {{display:"inline"}}>About Me</h1>
                <img src="/misc/Jeff.png" alt="Jeff Asamoah" width="15%" height="15%" className={styles.me}></img>
                <Dropdown title='Education'>{education}</Dropdown>
                <Dropdown title='Work Experience'>{work}</Dropdown>
                <Dropdown title="Relevant Coursework">{courses}</Dropdown>
                <Dropdown title="Hobbies">{hobbies}</Dropdown>
                {resume}
            </Bar>
        </>;
    }

}

export default About;