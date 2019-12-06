import Link from 'next/link';
import 'styles.css';
import Bar from 'components/stickyBar.js';
import Dropdown from 'components/dropdown.js';
import Layout from 'components/layout.js';
import Helmet from 'react-helmet';

class About extends React.Component{

    render(){

        const courses = <div className='aboutMe'>
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
            </ul>
        </div>

        const hobbies = <div className='aboutMe'>
            <ul>
                <li>Running</li>
                <li>3-D Modelling</li>
            </ul>
            <ul>
              <li>Coding</li>
                <li>Video Games</li>
            </ul>
        </div>
        
        const education = <div className='aboutMe'>
            <p>High School(2012-2016): Byram Hills High School</p>
            <p>Undergraduage(2016-2929): Mathematics and Computer Science at NYU</p>
        </div>
        
        const work = <div className='aboutMe'>
            <p>Laguardia Studio(2017-2018)</p>
            <p>Computer Science Tutoring(2017-2019)</p>
            <p>Comcast(Summer 2019)</p>
        </div>
        const style = <style jsx>{`
            #test{
                width:200px;
                height:200px;
            }

            .aboutMe ul{
                display:inline-block;
            }


        `}</style>

        const resume =             
        <Link href="/resume.pdf">
            <a tareget="_blank">My Resume</a>
        </Link>

        return <>
            {style}
            <Bar/>
            <Layout >
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1>About Me</h1>
                <Dropdown title='Education'>{education}</Dropdown>
                <Dropdown title='Work Experience'>{work}</Dropdown>
                <Dropdown title="Relevant Coursework">{courses}</Dropdown>
                <Dropdown title="Hobbies">{hobbies}</Dropdown>
                {resume}
            </Layout>
        </>;
    }

}

export default About;