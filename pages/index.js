import css from '../styles.css';
import Bar from '../components/stickyBar.js';
import Layout from '../components/Layout.js';
import Helmet from 'react-helmet';
class Index extends React.Component{

    render(){

        return <>
        <Bar/>
        <Layout>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </Layout>
        </>
    }
}

export default Index;