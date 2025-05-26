import StickyBar from 'src/components/stickyBar/stickyBar';
import ModelFrame from 'src/components/modelFrame/modelFrame';

export default function Gallery(){
    const modelNames: string[] = ['Logo', 'Torch', 'Controller'];
    const modelElements = modelNames.map( (name, index) => <ModelFrame modelName={name} key={name} openOnStart={index==0}/>);

        return <>
            <StickyBar/>
            <h1>Gallery</h1>
            <p>Welcome to the 3D Gallery! Here you can find some of the 3-D models I've personally made.</p>
            <p>I'm using the ThreeJS library in combination with NextJS to load, render & color the models for display</p>
            <p>3D printing is a really enjoyable artistic hobby for me, and as of November 2024 I got my own 3D printer so I can print my works!</p>
            <p>For now, feel free to observe and rotate the models displayed here. (more features to come soon!) </p>
            {modelElements}
        </>
}