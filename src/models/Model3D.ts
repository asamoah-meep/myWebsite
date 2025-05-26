import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@three-ts/orbit-controls';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight } from 'three';

export default class Model3D{

    filePath: string;
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer
    loader: GLTFLoader ;
    
    constructor(fileName: string){
        this.filePath = `models/${fileName}.gltf`;

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(50,2,.1,100);
        this.camera.position.z = 5;

        this.renderer = new WebGLRenderer({antialias:true,alpha:true});
        this.renderer.setSize(100,100);
        this.renderer.setClearColor(0xff0000,0);

        this.loader = new GLTFLoader();
    }

    load(){

        const controller = new OrbitControls(this.camera, this.renderer.domElement);

        const animate = ()=>{
            requestAnimationFrame( animate );
            controller.update();
            this.renderer.render( this.scene, this.camera );
        };


        this.loader.load(this.filePath, (gltf) =>{
            const logo = gltf.scene;
            logo.rotation.y=-Math.PI/2;
            logo.scale.set(1.5,1.5,1.5);
            this.scene.add(logo);
            this.scene.add(new AmbientLight(0xffffff, .5));
            animate();

        },(xhr)=>{
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            return undefined; //TODO: add loading animation
        }, (error) =>{
            console.error(error);
        });
    }
}