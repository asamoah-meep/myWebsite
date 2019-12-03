import 'styles.css';
import Bar from 'components/stickyBar.js';
import Layout from 'components/layout.js';
import Helmet from 'react-helmet';
import Link from 'next/link';

class Index extends React.Component{

    render(){

        return <>
        <Bar/>
        <Layout>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section id='TimelineHeader'>
                <h3>Timeline App</h3>
                <p>I created this timeline app to emulate the project I worked on during my Comcast Internship. At my internship my project was 
                    to create a front-facing visual to display how the Xfinity Fraud Managment (XFM) team monitored and mitigated fraud activity.
                    For that project I displayed the ~40 use cases of potentially fraudulent activity and plotted the occurence of each point. The 
                    app allowed for you to filter which items you wanted to look at as well as select the timeframe on which you were looking.
                    I recreated that project using data from my tutoring experience at NYU. Here I display when each student would approach various tutors
                    and the success of the tutoring session. The key features of this project were: 
                </p>
                <ul>
                    <li>Built using <a href="https://reactjs.org/" target="_blank">React.js</a></li>
                    <li>Data was read from<a href="http://cassandra.apache.org/" target="_blank">Cassandra DB (now static data)</a></li>
                    <li>Used <a href="https://d3js.org/" target="_blank">D3 libraries</a> to scale and plot data points according to their dates</li>
                    <li>Used D3 libraries to create a window frame to adjust the date window of viewing</li>
                </ul>
                <a href='https://github.com/asamoah-meep/101Timeline' target="_blank">View source</a><br/>
                <Link href="/101Timeline">
                    <a>Live Demo</a>
                </Link>
            </section>
            <section id='KMeansHeader'>
                <h3>K-Means Demo</h3>
                <p>This <a href="https://en.wikipedia.org/wiki/K-means_clustering" target="_blank">K-Means</a> project is a self-made data clustering algorithm that 
                    I created for my predictive analytics class. The algorithm takes in 24 documents roughly concerned with 3 topics (Mouth and Foot Diseases, 
                    Airline Safety, and International Housing Prices) and clusters them into k centroids. The data is 1st converted into a tf-idf matrix adjusted for 
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
                <a href='https://github.com/asamoah-meep' target="_blank">View source</a>
            </section>
            <section id="WebsiteHeader">
                <h3>This Website</h3>
                <p>
                    More to come...
                </p>
                <ul>
                    <li>Built using <a href="https://nextjs.org/" target="_blank">Next.js</a></li>
                    <li>Hosted using <a href="https://zeit.co/docs#related" target="_blank">Zeit</a></li>
                </ul>
            </section>
        </Layout>
        </>
    }
}

export default Index;