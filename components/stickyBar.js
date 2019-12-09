import Link from 'next/link';
import 'styles.css';
import * as THREE from 'three';
import Dropdown from 'components/dropdown.js';
import GLTFLoader from 'three-gltf-loader';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faAddressCard,faEnvelope,faTasks} from "@fortawesome/free-solid-svg-icons";

class StickyBar extends React.Component{

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

        const projects =             
        <ul>
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
            <FontAwesomeIcon className='barIcon' icon={faTasks}/> <Dropdown title="Projects" barDropdown>{projects}</Dropdown><br/>
            <FontAwesomeIcon className='barIcon' icon={faEnvelope}/> <Dropdown title='Contact and Media' barDropdown>{contact}</Dropdown>
        </div>;

        const style = <style>{`

            #logoMount{
                height:75px;
            }

            .barIcon{
                color: #D9B08C;
                display:inline-block;
                position:relative;
                right:5px;
            }

            .barDropdown{
                display:inline-block;
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
                color: #D9B08C;
                display: block;
                font-size: 1.5rem;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
            }
        `}</style>      

        return <>
            {style}
            {bar}
        </>;
    }
}

export default StickyBar;