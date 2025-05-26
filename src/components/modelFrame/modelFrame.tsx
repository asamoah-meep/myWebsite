'use client';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import styles from "./modelFrame.module.css";
import { useEffect, useRef, useState } from "react";
import Model3D from "src/models/Model3D";
import { WebGLRenderer } from "three";

interface ModelFrameProps{
    modelName: string
    openOnStart?: boolean
    hideTitle?: boolean
}

export default function ModelFrame(props: ModelFrameProps){
    const containerRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState<boolean>(props.openOnStart);

    function expand(){
        setShow(!show);
    }

    const arrow = show? faCaretSquareUp : faCaretSquareDown;

    useEffect( () => {
        if(window != undefined) {
            const children: HTMLCollection | null =  containerRef?.current?.children;
            if (children) {
                for (const child of children) {
                    containerRef?.current?.removeChild(child);
                }
            }

                const model: Model3D = new Model3D(props.modelName);
                model.load();
                const renderer: WebGLRenderer = model.renderer;
                containerRef?.current?.appendChild(model.renderer.domElement);
        
            return () => {
                if(containerRef?.current?.hasChildNodes()){
                    containerRef?.current?.removeChild(renderer.domElement);
                    renderer?.dispose();  
                }
            }   
        }

    } );

        return <>
            <div className={styles.frameDropdown}>
                {!props.hideTitle && <h3>{props.modelName}</h3>}
                {!props.hideTitle && <FontAwesomeIcon className={styles.myFAIcon} icon={arrow} onClick = {expand}/>}
                {show && <div ref={containerRef}/>}
            </div>
        </>
}
