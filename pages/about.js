import Link from 'next/link';
import 'styles.css';
import Bar from 'components/stickyBar.js';
import Dropdown from 'components/dropdown.js;'
import Layout from 'components/layout.js';
import Helmet from 'react-helmet';

class About extends React.Component{

    constructor(props){
        super(props);
        this.expand = this.expand.bind(this);
    }

    render(){

        const style = <style jsx>{`
            #test{
                width:200px;
                height:200px;
            }
        `}</style>

        const resume =             
        <Link href="/resume.pdf">
            <a tareget="_blank">My Resume</a>
        </Link>

        return <div ref={ref=>this.test=ref}>
            {style}
            <Bar/>
            <Layout >
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1>About Me</h1>
                <Dropdown content="!!!"/>
                <div id='test'/>
                {resume}
            </Layout>
        </div>;
    }

}

export default About;