import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faAddressCard, faCube, faInbox, faRectangleList} from "@fortawesome/free-solid-svg-icons";
import ModelFrame from '../modelFrame/modelFrame';
import styles from "./stickyBar.module.css";

export default function StickyBar(){

    return <div className={styles.stickyBar}>
        
        <ModelFrame modelName='Logo' openOnStart hideTitle/>
        <Link href='/' className={`${styles.subHeading} ${styles.subHeadingLeft}`}>
            <FontAwesomeIcon className= {styles.barIcon} icon={faHome}/>Home
        </Link>
        <Link href="/about" className={`${styles.subHeading}`}>
            <FontAwesomeIcon className= {styles.barIcon} icon={faAddressCard}/>About
        </Link>
        <Link href='/gallery' className={styles.subHeading}>
            <FontAwesomeIcon className= {styles.barIcon} icon={faCube}/>3D Gallery
        </Link>
        <Link href='/#skills' className={styles.subHeading}>
            <FontAwesomeIcon className= {styles.barIcon} icon={faRectangleList}/> Skills
        </Link>
        <Link href='/#contact' className={`${styles.subHeading} ${styles.subHeadingRight}`}>
            <FontAwesomeIcon className= {styles.barIcon} icon={faInbox}/> Contact
        </Link>
    </div>;
}
