import 'styles.css';

class Layout extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const style = <style jsx>{`
            #content{
                display:inline-block;
                margin-top:5px;
                position:relative;
                left: 30px;
                width:70%;
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