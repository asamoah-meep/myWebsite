import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import styles from "./dropdown.module.css";

class Dropdown extends React.Component{

    constructor(props){
        super(props);
        
        this.title = this.props.title;
        this.expand = this.expand.bind(this);
        this.addChild = this.addChild.bind(this);

        this.state={
            show:this.props.openOnStart,
        }
    }

    expand(){
        this.setState({
            show:!this.state.show
        });
    }

    addChild(ele){
        this.setState({
            test:ele
        });
    }

    componentDidUpdate(){
        if(this.state.test){
            if(this.state.show){
                this.model.appendChild(this.state.test.renderer.domElement);
                this.state.test.load();
            }else if (!this.state.show && this.model.hasChildNodes()){
                this.model.removeChild(this.state.test.renderer.domElement);
            }
        }

    }

    render(){
        const arrow = this.state.show? faCaretSquareUp : faCaretSquareDown;
        const eleStyle = this.props.barDropdown? "barDropdown" : "drop";

        const model = this.state.test?
            <div ref={ref=>this.model=ref}/>: null;

        return <div className={eleStyle}>
            <h3 className={styles.dropdownTitle}>{this.props.title}</h3>
            <FontAwesomeIcon className={styles.myFAIcon} icon={arrow} onClick = {this.expand}/>
            {this.state.show && this.props.children}
            {model}
        </div>
    }
}

export default Dropdown;