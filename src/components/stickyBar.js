import Link from 'next/link';
import Cookie from 'js-cookie';
import Dropdown from 'src/components/dropdown.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faAddressCard,faEnvelope,faTasks,faCube,
        faPhoneSquare, faInbox} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ProjectHeader from 'src/components/projectHeader.js';
import Model from 'src/services/model.js';
import axios from 'axios';
import styles from "./stickyBar.module.css";
class StickyBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {theme: Cookie.get('theme')};
        this.updateTheme = this.updateTheme.bind(this);
    }

    async componentDidMount(){
        this.logoModel = new Model(`Logo_${this.state.theme}`);
        this.mount.appendChild(this.logoModel.renderer.domElement);
        this.logoModel.load();

        const currentTheme = Cookie.get('theme') ?? "light";
        const themeValues = await axios.get(`/api/theme?theme=${currentTheme}`);
        Cookie.set("theme", themeValues.data.theme);
        this.setState(themeValues.data);
    }

    componentDidUpdate(){
        this.mount.removeChild(this.logoModel.renderer.domElement);
        this.logoModel = new Model(`Logo_${this.state.theme}`);
        this.mount.appendChild(this.logoModel.renderer.domElement);
        this.logoModel.load();
    }

    async updateTheme(){
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        const themeValues = await axios.get(`/api/theme?theme=${newTheme}`);
        Cookie.set("theme", themeValues.data.theme);
        this.setState(themeValues.data);
    }

    render(){
        const contact = <>
            <p><FontAwesomeIcon className={styles.barIcon} icon={faEnvelope}/>E-mail: ja3180@nyu.edu</p>
            <p><FontAwesomeIcon className={styles.barIcon} icon={faPhoneSquare} />Telephone: 914-224-6241</p>
            <p><FontAwesomeIcon className={styles.barIcon} icon={faLinkedin}/><a href="https://www.linkedin.com/in/jeffrey-asamoah-07991a125/" target="_blank">LinkedIn</a><br/></p>
            <p><FontAwesomeIcon className={styles.barIcon} icon={faGithub}/><a href="https://github.com/asamoah-meep" target="_blank">Github</a></p>
        </>

        const projects = <ul>
            <ProjectHeader subject='Timeline' name='Tutor Timeline'/>
            <ProjectHeader subject='KMeans' name='K-Means Demo'/>
            <ProjectHeader subject='Website' name='This Website'/>
            <ProjectHeader subject='QR' name='QR Marketing Project'/>
        </ul>

        const expandableBarIconClassNam= `${styles.barIcon} ${styles.expandableIcon}`;
        const sliderRoundClassName = `${styles.slider} ${styles.round}`;
        console.log(this.state.theme, Cookie.get('theme'), this.state.theme==='light');
        const bar = <div className={styles.stickyBar}>
            <div className={styles.logoMount} ref={ref=>(this.mount = ref)}>
                <p>Rotate me!</p>
            </div>
            <h1 style={{position:"relative", left:"12px"}}>Jeffrey</h1>
            <h1 style={{position:"relative", left:"25px"}}>Asamoah</h1>
            <Link href='/'>
                <a className={styles.subHeading}><FontAwesomeIcon className= {styles.barIcon} icon={faHome}/>Home</a>
            </Link>
            <Link href="/about">
                <a className={styles.subHeading}><FontAwesomeIcon className= {styles.barIcon} icon={faAddressCard}/>About</a>
            </Link>
            <Link href='/gallery'>
                <a className={styles.subHeading}><FontAwesomeIcon className= {styles.barIcon} icon={faCube}/>3D Gallery</a>
            </Link>
            <div><FontAwesomeIcon className={expandableBarIconClassNam} 
                icon={faTasks}/> <Dropdown title="Projects" barDropdown>{projects}</Dropdown></div>
            <div><FontAwesomeIcon className={expandableBarIconClassNam} 
                icon={faInbox}/> <Dropdown title='Contact / Media' barDropdown>{contact}</Dropdown></div>
            
            <div className={styles.toggleTheme}>
                <span style={{visibility: (!this.state.theme) || this.state.theme==='light'? 'visible': 'hidden'}}>Light</span>
                <label className={styles.switch}>
                    <input type="checkbox" value={this.state.theme} onChange={ async () => {this.updateTheme()}}/>
                    <span className= {sliderRoundClassName}/>
                </label>
                <span style={{visibility: this.state.theme==='dark'? 'visible': 'hidden'}}>Dark</span>
            </div>
        </div>;

        const dynamicStyle=  <style>{`
        body{
            background: ${this.state.background}
        }

        h1{
            color: ${this.state.headings}
        }

        h3, div svg{
            color: ${this.state.subheadings}
        }

        p,a,span,li,div,form,text{
            color: ${this.state.text}
        }

        .subHeading{
            color: ${this.state.subheadings}
        }

        #content{
            border-left: solid 2px ${this.state.subheadings}
        }

        .barIcon{
            color: ${this.state.subheadings}
        }

        section{
            boder-bottom: solid 2px ${this.state.subheadings};
        }`}</style>;     

        return <>
            {dynamicStyle}
            {bar}
            <div className={styles.content}>{this.props.children}</div>
        </>;
    }
}

export default StickyBar;