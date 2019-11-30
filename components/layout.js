import Link from 'next/Link';
import css from '../styles.css';

class Layout extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const style = <style jsx>{`
            #content{
                margin-top:5px;
                position:relative;
                left:300px;
            }
        `}</style>

        const layout = <div id='content'>
            {this.props.children}
        </div>

        return <>
            {style}
            {layout}
        </>;
    }


}

export default Layout;