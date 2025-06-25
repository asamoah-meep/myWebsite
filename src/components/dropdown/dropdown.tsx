'use client';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown, faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";
import styles from "./dropdown.module.css";
import { ReactElement, useState } from "react";

interface DropdownProps{
    title: string
    children: ReactElement | ReactElement[]
    openOnStart?: boolean
}

export default function DropDown(props: DropdownProps){

    const openOnStart: boolean = props.openOnStart ?? false;

    const [show, setShow] = useState(openOnStart);

    function expand(){
        setShow(!show);
    }

    const arrow = show? faCaretSquareUp : faCaretSquareDown;
    const eleStyle = styles.barDropdown;
    
    return <div className={eleStyle}>
        <h3 className={styles.dropdownTitle}>{props.title}</h3>
        <FontAwesomeIcon className={styles.myFAIcon} icon={arrow} onClick = {expand}/>
        {show && props.children}
    </div>
}
