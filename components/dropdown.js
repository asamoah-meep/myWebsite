import 'styles.css';

class Dropdown extends React.Component{

    constructor(props){
        super(props);
        
        this.content = this.props.content;
        this.expand = this.expand.bind(this);
        console.log(this.content);
    }

    expand(){
        this.ref.querySelector("#test").style.backgroundColor= 'red';
    }

    render(){
        const dropDown = <button src="/down_arrow.png" onClick={e=>this.expand(e)}></button>

        const style = <style jsx>{`
            #test{
                width:200px;
                height:200px;
            }
        `}</style>        
        return <div className='drop' ref={ele=>this.ref = ele}>
            {style}
            {dropDown}
            <div id='test'/>
        </div>
    }
}

export default Dropdown;