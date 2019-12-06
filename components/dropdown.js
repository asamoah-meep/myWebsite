import 'styles.css';

class Dropdown extends React.Component{

    constructor(props){
        super(props);
        
        this.title = this.props.title;
        this.expand = this.expand.bind(this);
        this.state={
            show:false
        }
    }

    expand(){
        this.setState({
            show:!this.state.show
        },()=>{
            console.log(this.state)
            
        });
    }

    render(){
        const dropDown = <img src="/down_arrow.png" onClick={this.expand}/>

        const style = <style jsx>{`
            img{
                width:20px;
                height:20px;
                position:relative;
                top:5px;
                left:20px;
            }
            h3{
                display:inline-block;
            }
        `}</style>      

        return <div className='drop'>
            {style}
            <h3>{this.props.title}</h3>
            {dropDown}
            {this.state.show && this.props.children}
        </div>
    }
}

export default Dropdown;