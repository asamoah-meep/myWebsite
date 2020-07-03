import 'src/styles.css';
import Bar from 'src/components/stickyBar.js';
import Helmet from 'react-helmet';
import Dropdown from 'src/components/dropdown.js';
import Model from 'src/model';

class Gallery extends React.Component{

    constructor(props){
        super(props);
        this.items = ['Logo_light','Logo_dark','Torch'];
    }

    componentDidMount(){
        const models = this.items.map(ele=>new Model(ele));

        let index = 0;
        for(let modelName of this.items){
            this[modelName].addChild(models[index++]);
        }

    }

    render(){

        const style = <style>{`
            #grid{
                display:grid;
                grid-template-columns: 1fr 1f;
                grid-gap: 100px;
                grid-auto-rows: minmax(auto,150px);
            }
        `}</style>

        this.models = this.items.map(ele=>
            <Dropdown key={ele} ref={ref=>(this[ele] = ref)} title={ele}/>
        );

        return <>
        <Bar>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <h1>Gallery</h1>
            {this.models}
        </Bar>
        </>
    }
}

export default Gallery;