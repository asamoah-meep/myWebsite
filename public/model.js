import GLTFLoader from 'three-gltf-loader';
import * as RawOrbitControls from 'three-orbit-controls';
import * as THREE from 'three';

class Model{
    
    constructor(fileName){
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75,window.innerHeight/window.innerHeight,.1,1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
        this.renderer.setSize(100,100);
        this.renderer.setClearColor(0xff0000,0);
        this.renderer.gammaOutput=true;
        this.renderer.gammaFactor=2.2;

        this.topLight = new THREE.PointLight(0xffffff,4);
        this.topLight.position.set(0,0,7);

        this.bottomLight = new THREE.PointLight(0xffffff,4);
        this.bottomLight.position.set(0,0,-7);

        this.loader = new GLTFLoader();
        this.logoPath = `Logo_${fileName}.gltf`;
    }

    load(){

        const OrbitControls = RawOrbitControls(THREE);
        const controller = new OrbitControls(this.camera, this.renderer.domElement);

        const animate = ()=>{
            requestAnimationFrame( animate );
            controller.update();
            this.renderer.render( this.scene, this.camera );
        };

        console.log(this);

        this.loader.load(this.logoPath, (gltf) =>{
            this.logo = gltf.scene;
            this.logo.rotation.y=-Math.PI/2;
            this.logo.scale.set(2,2,2);
            this.scene.add(this.logo);
            this.scene.add(this.topLight);
            this.scene.add(this.bottomLight);
            animate();

        },undefined,function(error){
            console.error(error);
        });
    }
}

export default Model;