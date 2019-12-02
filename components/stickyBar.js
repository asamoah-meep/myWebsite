import Link from 'next/Link';
import css from '../styles.css';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

class StickyBar extends React.Component{

    componentDidMount(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerHeight/window.innerHeight,.1,1000);

        camera.position.z = 4;
        camera.position.y = 1;
        const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
        renderer.setSize(200,200);
        renderer.setClearColor(0xffffff,0);
        renderer.gammaOutput=true;
        renderer.gammaFactor=2.2;
        this.mount.appendChild( renderer.domElement );
       
        const loader = new GLTFLoader();
        let torch = undefined;
        let rotation = .005;
        
        const animate = function () {
            requestAnimationFrame( animate );
              torch.rotation.z+= rotation;
              torch.rotation.y+=rotation;
              if(Math.abs(torch.rotation.z) > Math.PI/12)
                rotation*=-1;
            renderer.render( scene, camera );
          };

        loader.load('/Logo.gltf', function(gltf){
            torch = gltf.scene;
            scene.add(torch);
            animate();

        },undefined,function(error){
            console.error(error);
        });

    }

    render(){
        const bar = <div id='stickyBar' ref={ref=>(this.mount = ref)}>
            <h1>Jeffrey Asamoah</h1>
            <Link href='/'>
                <a className='subHeading'>Home</a>
            </Link>
            <Link href="/about">
                <a className='subHeading'>About</a>
            </Link>
            <h3>Projects</h3>
            <ul>
                <li><Link href="/101Timeline">
                    <a>Tutor Timeline</a>
                </Link></li>
                <li><Link href="/KMeans">
                    <a>K-Means Demo</a>
                </Link></li>
            </ul>
        </div>;

        const style = <style>{`
            #stickyBar{
                position: fixed;
                top:0;
                left:3%;
                width:auto;
                padding-right: 5px;
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