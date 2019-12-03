import Link from 'next/link';
import 'styles.css';
import Bar from 'components/stickyBar.js';
import Layout from 'components/layout.js';
import Helmet from 'react-helmet';

class About extends React.Component{

    render(){

        
        const resume =             
        <Link href="/resume.pdf">
            <a tareget="_blank">My Resume</a>
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