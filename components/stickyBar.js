import Link from 'next/link';
import 'styles.css';
import Cookie from 'js-cookie';
import * as THREE from 'three';
import themeValues from '../public/theme.js';
import Dropdown from 'components/dropdown.js';
import GLTFLoader from 'three-gltf-loader';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faAddressCard,faEnvelope,faTasks} from "@fortawesome/free-solid-svg-icons";

class StickyBar extends React.Component{

    constructor(props){
        super(props);

        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = themeValues(Cookie.get('theme'));
    }

    toggleTheme(evt){

        let background, text,headings,subheadings,theme;

        if(evt.target.value==='light'){ //change to dark
            background = '#2F4454';
            text = '#D1E8E2';
            headings = '#FFCB9A';
            subheadings = '#D9B08c';
            theme = 'dark';
            Cookie.set('theme','dark');
        }else{ //change to light
            background = 'rgba(223,240,255,0.9)';
            text = 'rgb(58,118,158)';
            headings = '#5DA2D5';
            subheadings = '#CB669E';
            theme = 'light';
            Cookie.set('theme','light');
        }


        this.setState({
            background,
            text,
            headings,
            subheadings,
            theme
        });

       
    }

    componentDidMount(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerHeight/window.innerHeight,.1,1000);

        camera.position.z = 5;
        camera.position.x = -1;
        const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
        renderer.setSize(100,100);
        renderer.setClearColor(0xffffff,0);
        renderer.gammaOutput=true;
        renderer.gammaFactor=2.2;
        this.mount.appendChild( renderer.domElement );
       
        const loader = new GLTFLoader();
        let logo = undefined;
        
        const animate = function () {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
          };

        loader.load('/Logo.gltf', function(gltf){
            logo = gltf.scene;
            logo.rotation.x=-Math.PI/12;
            logo.rotation.y=Math.PI/12;
            logo.rotation.z=Math.PI/6;
            logo.scale.set(2,2,2);
            scene.add(logo);
            animate();

        },undefined,function(error){
            console.error(error);
        });

    }

    render(){
        const contact = <>
            <p>E-mail: ja3180@nyu.edu</p>
            <p>Telephone: 914-224-6241</p>
            <a href="https://github.com/asamoah-meep" target="_blank">Github</a>
        </>

        const projects = <ul>
            <li><Link href="/#TimelineHeader">
                <a>Tutor Timeline</a>
            </Link></li>
            <li><Link href="/#KMeansHeader">
                <a>K-Means Demo</a>
            </Link></li>
            <li><Link href="/#WebsiteHeader">
                <a>This Website</a>    
            </Link></li>
        </ul>

        const bar = <div id='stickyBar'>
            <div id="logoMount" ref={ref=>(this.mount = ref)}/>
            <h1 style={{position:"relative", left:"12px"}}>Jeffrey</h1>
            <h1 style={{position:"relative", left:"25px"}}>Asamoah</h1>
            <Link href='/'>
                <a className='subHeading'><FontAwesomeIcon className='barIcon' icon={faHome}/> Home</a>
            </Link>
            <Link href="/about">
                <a className='subHeading'><FontAwesomeIcon className='barIcon' icon={faAddressCard}/> About</a>
            </Link>
            <FontAwesomeIcon className='barIcon' icon={faTasks}/> <Dropdown theme={this.state.theme} title="Projects" barDropdown>{projects}</Dropdown><br/>
            <FontAwesomeIcon className='barIcon' icon={faEnvelope}/> <Dropdown theme={this.state.theme} title='Contact / Media' barDropdown>{contact}</Dropdown>
            <div id='toggleTheme'>
                <span style={{visibility: this.state.theme==='light'? 'visible': 'hidden'}}>Light</span>
                <label className="switch">
                    <input type="checkbox" value={this.state.theme} onChange={this.toggleTheme}/>
                    <span className="slider round"/>
                </label>
                <span style={{visibility: this.state.theme==='dark'? 'visible': 'hidden'}}>Dark</span>
            </div>
        </div>;

        const globalStyle=  <style>{`
        body{
            background: ${this.state.background}
        }

        h1{
            color: ${this.state.headings}
        }

        h3, div svg{
            color: ${this.state.subheadings}
        }

        p,a,span,li,div,form,text{
            color: ${this.state.text}
        }

        section{
            boder-bottom: solid 2px ${this.state.subheadings};
        }`}</style>;

        const style = <style>{`

            #logoMount{
                height:75px;
            }

            .barIcon{
                color: ${this.state.subheadings};
                display:inline-block;
                position:relative;
                right:5px;
            }

            .barDropdown{
                display:inline-block;
            }

            #content{
                display:inline-block;
                margin-top:5px;
                position:relative;
                left: 30px;
                width:75%;
                padding-left: 15px;
                vertical-align:top;
                border-left: solid 2px ${this.state.subheadings};
            }

            #stickyBar{
                vertical-align:top;
                position: relative;
                display:inline-block;
                left:20px;
                width:250px;
                margin-right: 5px;
                margin-top:5px;
            }
            .subHeading{
                font-family: NunitoItalic;
                color: ${this.state.subheadings};
                display: block;
                font-size: 1.5rem;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
            }

            #toggleTheme{
                position:relative;
                left:10%;
            }
            
            #toggleTheme span{
                padding:10px;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 34px;
            }

            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }

            input[type='checkbox']:not(:checked) + .slider{
                background-color: rgba(223,240,255,0.9);
            }

            input[type='checkbox']:checked + .slider {
                background-color: #2F4454;
            }

            input:focus + .slider {
                box-shadow: 0 0 1px #15DB95;
            }

            input:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }

            .slider.round {
                border-radius: 34px;
            }

            .slider.round:before {
                border-radius: 50%;
            }
        `}</style>      

        return <>
            {style}
            {globalStyle}
            {bar}
            <div id='content'>{this.props.children}</div>
        </>;
    }
}

export default StickyBar;