import 'styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";

class Dropdown extends React.Component{

    constructor(props){
        super(props);
        
        this.title = this.props.title;
        this.expand = this.expand.bind(this);
        this.state={
            show:this.props.openOnStart
        }
    }

    expand(){
        this.setState({
            show:!this.state.show
        });
    }

    render(){

        const arrow = this.state.show? faCaretSquareUp : faCaretSquareDown;

        const style = <style>{`
            .myFAIcon{
                position:relative;
                color: #D9B08C;
                left:10px;
            }
            h3{
                display:inline-block;
            }
        `}</style>      

        const eleStyle = this.props.barDropdown? "barDropdown" : "drop";

        return <div className={eleStyle}>
            {style}
            <h3>{this.props.title}</h3>
            <FontAwesomeIcon className='myFAIcon' icon={arrow} onClick = {this.expand}/>
            {this.state.show && this.props.children}
        </div>
    }
}

export default Dropdown;