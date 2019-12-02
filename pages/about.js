import Link from 'next/Link';
import css from '../styles.css';
import Bar from '../components/stickyBar.js';
import Layout from '../components/Layout.js';
import Helmet from 'react-helmet';

class About extends React.Component{

    render(){

        
        const resume =             
        <Link href="/resume.pdf">
            <a>My Resume</a>
        </Link>

        return<>
            <Bar/>
            <Layout>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1>About Me</h1>
                {resume}
            </Layout>
        </>;
    }

}

export default About;