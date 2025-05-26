'use client';

import * as d3Scale from "d3-scale";
import {ReactElement, useEffect, useState} from 'react';
import Professor from "src/components/professor/professor";
import StickyBar from "src/components/stickyBar/stickyBar";
import {TutorSession} from "src/models/TutorSession";
import styles from "./tutorTimeline.module.css";

export default function TutorTimeline(){
    // const startDate: Date = new Date(2018, 8, 2);
    // const endDate: Date = new Date(2019, 4, 21);
    const [startDate, setStartDate] = useState<Date>(new Date(2018, 8, 2));
    const [endDate, setEndDate] = useState<Date>(new Date(2019, 4, 21));
    const [sessions, setSessions] = useState<Record<string, TutorSession[]>>({});
    const startRange = 0;
    const endRange = 1150;

    const scale = d3Scale.scaleTime()
        .domain([startDate, endDate])
        .range([startRange, endRange]);

    useEffect( () => {

        const fetchData = async () => {
            const rawResponse: Response = await fetch('/api/data');
            const rawJson = await rawResponse.json();
            const tempSessions: Record<string,TutorSession[]> = JSON.parse(JSON.stringify(rawJson));
            console.log(tempSessions);
            if(sessions == null || Object.keys(sessions).length === 0)
                setSessions(tempSessions);

        }

        fetchData();
    });

    let numProfs: number = 0;

    const profList: ReactElement[] = [];
    for(let profName in sessions){
        const profData = sessions[profName];
        const uc = <Professor num={numProfs++} data ={profData} name={profName} key={profName}
            startDate = {startDate} endDate = {endDate} width = {1350} height={140}/>
        profList.push(uc);
    }

    return <>
        <StickyBar/>
        <h1>2018-2019 CS101 Tutoring Timeline</h1>
        <div id={styles.ucContainer}>
            {profList}
        </div>
        {/* //className={styles.hideInfo} */}
        <div id='info'/>   
    </>
}