import Link from 'next/link';
import 'styles.css';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

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
        const bar = <div id='stickyBar'>
            <div id="logoMount" ref={ref=>(this.mount = ref)}/>
            <h1>Jeffrey</h1>
            <h1> Asamoah</h1>
            <Link href='/'>
                <a className='subHeading'>Home</a>
            </Link>
            <Link href="/about">
                <a className='subHeading'>About</a>
            </Link>
            <h3>Projects</h3>
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
        </div>;

        const style = <style>{`

            #logoMount{
                height:75px;
            }
            #stickyBar{
                vertical-align:top;
                position: relative;
                display:inline-block;
                left:3%;
                width:12%;
                padding-right: 5px;
                margin-right:5px;
                margin-top:5px;
                border-right: solid 2px #1E646E;
            }
            .subHeading{
                font-family: NunitoItalic;
                color: #1E646E;
                display: block;
                font-size: 1.17em;
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