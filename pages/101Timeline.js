import 'styles.css';
import fallData from 'public/Data/Fall2018.json';
import springData from 'public/Data/Spring2019.json';
import Bar from 'components/stickyBar.js';
import Timeframe from 'components/Timeframe.js';
import UseCaseRow from 'components/Usecase.js';
import Helmet from 'react-helmet';
import moment from 'moment';
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
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
      this.enterStudent = this.enterStudent.bind(this);
      this.enterTutor = this.enterTutor.bind(this);
      this.parseData = this.parseData.bind(this);
      this.mergeData = this.mergeData.bind(this);


        const fData = this.parseData(fallData);
        const sData = this.parseData(springData);

        const allData = this.mergeData(fData,sData);

        this.state={
            start:moment("2018-09-02"),
            end: moment("2019-05-21"),   
            scale:scale,
            filteredData:allData,
            initData:allData,
            queryStudent:"",
            queryTutor:""
          }

        this.style = <style>{`

          .datePicker{
            display:inline-block;
            position:relative;
            left:15px;
          }
          
          #filter{
            padding-right:10px;
            padding-bottom:10px;
            display:inline-block;
            width:467.5px;
            vertical-align:bottom;
            border-right: 2px solid #FFCB9A;
            border-bottom: 2px solid #FFCB9A;
            margin-bottom:20px;

          }
          
          .hideInfo{
            visibility: hidden;
          }
          
          #legend{
            vertical-align:top;
            display: inline-block;
            border:2px solid #FFCB9A;
            padding:10px;
            margin-left:20px;
            position:relative;
            width:500px;
            padding:2px;
            margin-bottom:20px;
          }
                    
          #info{
            text-align:left;
            display:inline-block;
            padding:5px;
            margin:3px;
            border:2px solid #FFCB9A;
            overflow-x:auto;
            position:relative;
            bottom:60px;
            left:710px;
            width:300px;
          }
          
          #info p{
            font-size:.8em;
            margin-block-start:.5em;
            margin-block-end:.5em;
          
          }
          
          input{
            background-color:#D8C3A5;
          }

          #studentForm{
              position:relative;
              left:8px;
          }

          #tutorForm{
              position:relative;
              left:27px;
          }

          #ucContainer{
            overflow-y:auto;
            height:350px;
            width:1030px;
            display:inline-block;
          }
          
        `}</style>
    }

    resetZoom(f){
        if(d3Selection.event.selection === null){
          this.setState({
              start:moment("2018-09-02"),
              end: moment('2019-05-21')
          },f);
        }
    }
    
    parseData(semesterData){
        const profData = [];
        for(let student of semesterData){
          if(profData[student.professor] === undefined)
            profData[student.professor] = [];
    
          profData[student.professor].push(student); 
        }
    
        return profData;
    }
    
      mergeData(fData,sData){
        const allData = {};
    
        for(let f in fData)
          allData[f] = fData[f];
        
        for(let s in sData){
          if(s in allData)
            allData[s] = allData[s].concat(sData[s]);
          else
            allData[s] = sData[s];
        }
    
        return allData;
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
        d3Selection.select("#info").classed('hideInfo',true);
        this.setState({
          filteredData:this.state.initData,
          queryStudent:"",
          queryTutor:""});
    }
    enterStudent(evt){
        this.setState({queryStudent:evt.target.value});
    }
    enterTutor(evt){
        this.setState({queryTutor:evt.target.value});
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
    
        const ucContainer = <div id="ucContainer">
          {profData}
        </div>

        const info = <div id="info" className='hideInfo'></div>    


        const timeLine = <Timeframe width={850}start={this.state.start} end = {this.state.end} 
        updateZoom = {this.updateZoom}updateEnd = {this.updateEnd} updateStart={this.updateStart} 
        setFrame={this.updateFrame} data={this.state.filteredData} key='Timeline'/>;

        const filter = <div id='filter'> <form onSubmit={this.filterStudent}>
            Enter the Student Name: <input type="text" id="studentForm" value={this.state.queryStudent} onChange={this.enterStudent}/>
            <input type='submit'/> </form>
            <form onSubmit={this.filterTutor} onReset = {this.resetFilter}>
                Enter the Tutor Name:  <input type="text" id="tutorForm" value={this.state.queryTutor} onChange={this.enterTutor}/>
                <input type='submit'/> <br/>
                <input type='reset'/>
            </form>
        </div>

        const legend = <div id='legend'>
        <h3>LEGEND</h3>
        <p>Jeff: <FontAwesomeIcon icon={faDragon}/>  Julia: <FontAwesomeIcon icon={faCat}/> Bella: <FontAwesomeIcon icon={faLemon}/>
        Alex: <FontAwesomeIcon icon={faDog}/> Alan: <FontAwesomeIcon icon={faCrow}/> Hari: <FontAwesomeIcon icon={faCheese}/>Ilias: <FontAwesomeIcon icon={faHippo}/> </p>
        <p> Aashish: <FontAwesomeIcon icon={faHorse}/>Gilad: <FontAwesomeIcon icon={faFrog}/>Cindy: <FontAwesomeIcon icon={faSpider}/> Santiago: <FontAwesomeIcon icon={faBreadSlice}/>  
        Rahul: <FontAwesomeIcon icon={faFish}/> Jonathan: <FontAwesomeIcon icon={faAppleAlt}/> </p>
        <br/>
        <p><span style={{color:'#CF142B'}}>Red</span>: Unresolved
        <span style={{color:"#FAD201"}}>     Yellow</span>: Partially Resolved
        <span style={{color:"#33A532"}}>     Green</span>: Resolved</p>
      </div>

        return <Bar>
                {this.style}
                <Helmet>
                    <title>Tutor Timeline</title>
                </Helmet>
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