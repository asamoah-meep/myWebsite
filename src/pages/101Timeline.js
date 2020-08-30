import axios from "axios";
import Bar from 'src/components/stickyBar.js';
import Timeframe from 'src/components/timeframe.js';
import UseCaseRow from 'src/components/usecase.js';
import Dropdown from 'src/components/dropdown.js';
import Helmet from 'react-helmet';
import moment from 'moment';
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import styles from "./101Timeline.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDragon, faLemon, faCat, faDog, faHippo, faCrow, faCheese, 
    faHorse, faFrog, faSpider, faBreadSlice, faFish, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

class Timeline extends React.Component{

    constructor(props){
        super(props);

        const scale = d3Scale.scaleTime()
        .domain([moment("2018-09-02"),moment("2019-05-21")])
        .range([0,1150]);
  
      this.updateZoom = this.updateZoom.bind(this);
      this.updateStart=this.updateStart.bind(this);
      this.updateEnd = this.updateEnd.bind(this);
      this.updateFrame = this.updateFrame.bind(this);
      this.resetZoom = this.resetZoom.bind(this);
      this.resetFilter = this.resetFilter.bind(this);
      this.filterStudent = this.filterStudent.bind(this);
      this.filterTutor = this.filterTutor.bind(this);

        this.state={
            start:moment("2018-09-02"),
            end: moment("2019-05-21"),   
            scale:scale,
            queryStudent:"",
            queryTutor:""
          }
   }

   async componentDidMount(){
     const res = await axios.get("/api/initData");
     const data = res.data;
     this.setState({
       filteredData: data,
       initData: data
     });
   }

    resetZoom(f){
        if(d3Selection.event.selection === null){
          this.setState({
              start:moment("2018-09-02"),
              end: moment('2019-05-21')
          },f);
        }
    }

    updateZoom(scale,f){
        let s = null, e = null;
    
        if(d3Selection.event.selection === null){
          this.resetZoom(f);
          return;
        }
    
        [s,e] = d3Selection.event.selection.map(ele=>scale.invert(ele));
        s = moment(s);
        e = moment(e);
        
    
        this.setState({
          start:s,
          end:e
        });
    }

    updateStart(date,f){
        this.setState({
          start:moment(date)
        },f);
    }
      
    updateEnd(date,f){
        this.setState({
          end:moment(date)
        },f);
    }
    
    updateFrame(frame,f){
    let start = this.state.start;
    let end = this.state.end;

    switch(frame){
        case "1 day":
        end = moment(start).add(1,"day").isBefore(moment()) ? moment(start).add(1,"day") : end;
        this.setState({
            end: end
        }, f);
        break;

        case "1 week":     
        end = moment(start).add(1,"week").isBefore(moment()) ? moment(start).add(1,"week") : end;
        this.setState({
            end:end
        },f);
        break;

        case "1 month":
        end = moment(start).add(1,"month").isBefore(moment()) ? moment(start).add(1,"month") : end;
        this.setState({
            end:end
        },f);
        break;

        case "Fall Semester":
        start = moment('2018-09-02');
        end = moment('2018-12-15');
        this.setState({
            start:start,
            end:end
        },f);
        break;

        case "Spring Semester":
        start = moment('2019-01-25');
        end = moment('2019-05-21');
        this.setState({
            start:start,
            end:end
        },f);
        break;

        case "All":
        default:
        this.setState({
            start:moment("2018-09-02"),
            end: moment("2019-05-21")
        },f);
        break;

    }
    }

    filterStudent(event){
        event.preventDefault();
    
        const query = this.state.queryStudent;
        if(query==="" || query===null || query===undefined)
          return this.state.initData;
          
        const filteredData = {};
        for(let prof in this.state.filteredData){
          filteredData[prof] = [];
        }
        
    
        for(let prof in this.state.initData){
          for(let student of this.state.initData[prof]){
            if(student.name.toLowerCase().includes(query.toLowerCase()))
              filteredData[prof].push(student);
          }
        }
    
        this.setState({
          filteredData:filteredData,
          queryTutor:""
        });
    } 
    filterTutor(event){
        event.preventDefault();
    
        const query = this.state.queryTutor;
        if(query==="" || query===null || query===undefined)
          return this.state.initData;
          
        const filteredData = {};
        for(let prof in this.state.filteredData){
          filteredData[prof] = [];
        }
        
        for(let prof in this.state.initData){
          for(let student of this.state.initData[prof]){
            if(student.tutor.toLowerCase().includes(query.toLowerCase()))
              filteredData[prof].push(student);
          }
        }
    
        this.setState({
          filteredData:filteredData,
          queryStudent:""
        });
    }
    resetFilter(evt){
        evt.preventDefault();
        d3Selection.select(styles.info).classed('hideInfo',true);
        this.setState({
          filteredData:this.state.initData,
          queryStudent:"",
          queryTutor:""});
    }

    render(){
        
        const profData = [];

        let numProfs = 0;

        const fontStyles = `     
        .fa,
        .fas {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
            font-family: 'Font Awesome 5 Free';
            font-weight: 900; }
            
        @font-face {
            font-family: 'Font Awesome 5 Free';
            font-style: normal;
            font-weight: 400;
            font-display: auto;
            src: url("/FontAwesome/fa-regular-400.eot");
            src: url("/FontAwesome/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("/FontAwesome/fa-regular-400.woff2") format("woff2"), url("/FontAwesome/fa-regular-400.woff") format("woff"), url("/FontAwesome/fa-regular-400.ttf") format("truetype"), url("/FontAwesome/fa-regular-400.svg#fontawesome") format("svg"); 
        }
        @font-face {
            font-family: 'Font Awesome 5 Free';
            font-style: normal;
            font-weight: 900;
            font-display: auto;
            src: url("/FontAwesome/fa-solid-900.eot");
            src: url("/FontAwesome/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("/FontAwesome/fa-solid-900.woff2") format("woff2"), url("/FontAwesome/fa-solid-900.woff") format("woff"), url("/FontAwesome/fa-solid-900.ttf") format("truetype"), url("/FontAwesome/fa-solid-900.svg#fontawesome") format("svg"); 
        }  
            
            `;

        for(let ele in this.state.filteredData){
          const prof = this.state.filteredData[ele];
          const profInfo = ele.split(" ");
          const uc = <UseCaseRow num={numProfs++} data ={prof} name={profInfo[0]} lastName ={profInfo[1]} key={ele}
          start = {this.state.start} end = {this.state.end} width = {850} styling = {fontStyles}/>
          profData.push(uc);
        }
    
        const ucContainer = <div id={styles.ucContainer}>
          {profData}
        </div>

        const info = <div id={styles.info} className={styles.hideInfo}></div>    

        const timeLine = <Timeframe width={850}start={this.state.start} end = {this.state.end} 
        updateZoom = {this.updateZoom}updateEnd = {this.updateEnd} updateStart={this.updateStart} 
        setFrame={this.updateFrame} data={this.state.filteredData} key='Timeline'/>;

        const filter = <div id={styles.filter}> <form onSubmit={this.filterStudent}>
            Enter the Student Name: <input type="text" id={styles.studentForm} value={this.state.queryStudent} 
              onChange={(evt) => {this.setState({queryStudent:evt.target.value})}}/>
            <input type='submit'/> </form>
            <form onSubmit={this.filterTutor} onReset = {this.resetFilter}>
                Enter the Tutor Name:  <input type="text" id={styles.tutorForm} value={this.state.queryTutor} 
                onChange={(evt)=>{this.setState({queryTutor:evt.target.value});}}/>
                <input type='submit'/> <br/>
                <input type='reset'/>
            </form>
        </div>

        const tutors1 = <ul>
            <li>Alan: <FontAwesomeIcon icon={faCrow}/> </li> <li>Cindy: <FontAwesomeIcon icon={faSpider}/> </li>
            <li>Hari: <FontAwesomeIcon icon={faCheese}/> </li> <li>Jonathan: <FontAwesomeIcon icon={faAppleAlt}/> </li>
            <li>Aashish: <FontAwesomeIcon icon={faHorse}/> </li> <li>Gilad: <FontAwesomeIcon icon={faFrog}/> </li>
            <li>Rahul: <FontAwesomeIcon icon={faFish}/> </li>
        </ul>
        const tutors2 = <ul>
          <li>Jeff: <FontAwesomeIcon icon={faDragon}/> </li> <li>Alex: <FontAwesomeIcon icon={faDog}/> </li>
          <li>Julia: <FontAwesomeIcon icon={faCat}/> </li> <li>Ilias: <FontAwesomeIcon icon={faHippo}/> </li>
          <li>Bella: <FontAwesomeIcon icon={faLemon}/> </li> <li>Santiago: <FontAwesomeIcon icon={faBreadSlice}/> </li>
        </ul>
        const prof2 = <ul>
          <li> Nassar </li>
          <li> Bloomberg </li>
          <li> Moody </li>
          <li> Locklear </li>
        </ul>
        const prof1 = <ul>
          <li> Bari </li>
          <li> Schneider </li>
          <li> McIntosh </li>
          <li> Cabo </li>
        </ul>

        const legend = <div id={styles.legend}>
        <h3>LEGEND</h3>
        <Dropdown title="Tutors:">{tutors1} {tutors2} </Dropdown>
        <Dropdown title="Professors:">{prof1} {prof2}</Dropdown>
        <br/>
        <p><span style={{color:'#CF142B'}}>Red</span>: Unresolved
        <span style={{color:"#FAD201"}}>Yellow</span>: Partially Resolved
        <span style={{color:"#33A532"}}>Green</span>: Resolved</p>
      </div>

        return <Bar>
                {this.style}
                <Helmet> <title>Tutor Timeline</title> </Helmet>
                <h1>2018-2019 CS101 Tutoring Timeline</h1>
                {filter}
                {legend} 
                {ucContainer}
                {timeLine}
                {info}
          </Bar>;
    }
}

export default Timeline;