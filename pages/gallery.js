import 'styles.css';
import Bar from 'components/stickyBar.js';
import Helmet from 'react-helmet';
import Dropdown from 'components/dropdown.js';
import Model from '../public/model';

class Gallery extends React.Component{

    constructor(props){
        super(props);
        this.items = ['Logo_light','Logo_dark','Torch'];
    }

    componentDidMount(){
        const models = this.items.map(ele=>
            new Model(ele+'.gltf',false));

        let index = 0;
        console.log(this);
        for(let modelName of this.items){
            console.log(modelName,this[modelName]);
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