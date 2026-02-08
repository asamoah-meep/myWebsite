'use client';

// import * as d3Scale from "d3-scale";
import React, {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import Professor from "src/components/professor/professor";
import StickyBar from "src/components/stickyBar/stickyBar";
import {TutorSession} from "src/models/TutorSession";
import styles from "./tutorTimeline.module.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DropDown from "src/components/dropdown/dropdown";
import { tutors } from "src/models/Tutor";
import TimeAxis from "src/components/timeAxis/timeAxis";
import * as constants from "../../util/constants";

export default function TutorTimeline(){
    const [selectedRange, setSelectedRange] = useState<[Date, Date]>([constants.fallStart, constants.springEnd]);
    const [sessions, setSessions] = useState<Record<string, TutorSession[]>>({});
    const [tutor, setTutor] = useState<string|null>(null);
    const [professor, setProfessor] = useState<string|null>(null);
    const startRange = 0;
    const endRange = 1150;

    function updateEnd(event: ChangeEvent<HTMLInputElement>){
        const endDateString: string = event.target.value;
        const newEndDate: Date = new Date(endDateString);
        setSelectedRange([selectedRange[0], newEndDate]);
    }

    function updateStart(event: ChangeEvent<HTMLInputElement>){
        const startDateString = event.target.value;
        const newStartDate: Date = new Date(startDateString);
        setSelectedRange([newStartDate, selectedRange[1]]);
    }

    // const scale = d3Scale.scaleTime()
    //     .domain(selectedRange)
    //     .range([startRange, endRange]);

    useEffect( () => {

        const fetchData = async () => {
            const [startDate, endDate] = selectedRange;
            const params: Record<string, string|null> = {};
            if(startDate != null)
                params['startDate'] = startDate.toISOString();
            if(endDate != null)
                params['endDate'] = endDate.toISOString();
            if(tutor != null)
                params['tutor'] = tutor;
            if(professor != null)
                params['professor'] = professor;
            const searchParams = new URLSearchParams(params);
            const rawResponse: Response = await fetch("/api/data?"+encodeURI(searchParams.toString()));
            const rawJson = await rawResponse.json();
            const tempSessions: Record<string,TutorSession[]> = JSON.parse(JSON.stringify(rawJson));
            setSessions(tempSessions);
        }

        fetchData();
    }, [selectedRange]);

    let numProfs = 0;

    const profList: ReactElement[] = [];
    for(const profName in sessions){
        const profData = sessions[profName];
        const uc = <Professor num={numProfs++} data ={profData} name={profName} key={profName}
            startDate = {selectedRange[0]} endDate = {selectedRange[1]} width = {1350} height={140}/>
        profList.push(uc);
    }


    const tutorList = tutors.map(t => <li key={t.name}>{t.name}: <span>{t.icon}</span></li>)
    const tutorList = tutors.map(t => <li key={t.name}>{t.name}: <span>{t.icon}</span></li>)

    
    // const tutors1 = <ul>
    //     <li>Alan: <FontAwesomeIcon icon={faCrow}/> </li> <li>Cindy: <FontAwesomeIcon icon={faSpider}/> </li>
    //     <li>Hari: <FontAwesomeIcon icon={faCheese}/> </li> <li>Jonathan: <FontAwesomeIcon icon={faAppleAlt}/> </li>
    //     <li>Aashish: <FontAwesomeIcon icon={faHorse}/> </li> <li>Gilad: <FontAwesomeIcon icon={faFrog}/> </li>
    //     <li>Rahul: <FontAwesomeIcon icon={faFish}/> </li>
    // </ul>
    // const tutors2 = <ul>
    //     <li>Jeff: <FontAwesomeIcon icon={faDragon}/> </li> <li>Alex: <FontAwesomeIcon icon={faDog}/> </li>
    //     <li>Julia: <FontAwesomeIcon icon={faCat}/> </li> <li>Ilias: <FontAwesomeIcon icon={faHippo}/> </li>
    //     <li>Bella: <FontAwesomeIcon icon={faLemon}/> </li> <li>Santiago: <FontAwesomeIcon icon={faBreadSlice}/> </li>
    // </ul>
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

    return <>
        <StickyBar/>
        <h1>2018-2019 CS101 Tutoring Timeline</h1>
        <div id={styles.legend}>
                <h3>LEGEND</h3>
                <DropDown title="Tutors:"><ul>
                    {tutorList}
                </ul></DropDown>
                <DropDown title="Professors:">{prof1}{prof2}</DropDown>
                <br/>
                <p><span style={{color:'#CF142B'}}>Red</span>: Unresolved
                <span style={{color:"#FAD201"}}>Yellow</span>: Partially Resolved
                <span style={{color:"#33A532"}}>Green</span>: Resolved</p>
              </div>
        <div id={styles.ucContainer}>
            {profList}
        </div>
        
        <TimeAxis selectedRange={selectedRange} updateStart={updateStart} updateEnd={updateEnd} setSelectedRange={setSelectedRange} key='Timeline'/>;
        {/* //className={styles.hideInfo} */}
        <div id='info'/>   
    </>
}