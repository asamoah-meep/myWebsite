import { ReactElement } from "react"
import styles from "./skill.module.css";

interface SkillProps{
    title: string
    children?: ReactElement | ReactElement[]
}

export default function Skill(props: SkillProps){
    

    return <div className={styles.skillBox}>
        <h4>{props.title}</h4>
        {props.children}
    </div>
}