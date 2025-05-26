import { useEffect } from "react";
import * as d3Scale from "d3-scale";
import * as d3Selection from "d3-selection";
import {TutorSession, getColorFromResolution } from "src/models/TutorSession";
import {Tutor, fromTutor} from "src/models/Tutor";
import "../../../public/FontAwesome/css/all.css";
import styles from "./professor.module.css";
import { isBefore, isAfter } from "date-fns";

interface ProfessorProps{
    name: string
    width: number
    height: number
    data: TutorSession[]
    startDate: Date
    endDate: Date
    num: number
}

function createInfo(session: TutorSession){
    const info = d3Selection.select("#info");
    info.classed('hideInfo',false);
    info.selectAll("*").remove();

    info.append('p').text("Date: " + (session.date))
        .append('p').text(`Student: ${session.name}`)
        .append('p').text(`Tutor: ${session.tutor}`)
        .append('p').text(`Professor: ${session.professor}`)
        .append('p').text(session.info)
        .append('p').text(session.resolve);

    return info;
    }


export default function Professor(props: ProfessorProps){

    const scaleOffset = 135;
    const lastName = props.name.split(" ")[1];

    function createItems(){
        const data: TutorSession[] = props.data.filter(ele => 
            isAfter(ele.date, props.startDate) &&
            isBefore(ele.date, props.endDate)
        );

        const scale = d3Scale.scaleTime()
            .domain([props.startDate, props.endDate])
            .range([scaleOffset, props.width+scaleOffset]);

        d3Selection.select(`#${lastName}`)
            //.selectAll("rect[class = rowImg]")
            .selectAll("rect")
            .data(data)
            .enter()
            .append('text')
            .classed(styles.fas,true)
            .classed(styles.fa, true)
            .attr("x",d=> scale(Date.parse(d.date)))
            .attr('y',(d,i)=>(15+(30*i%150)))
            .attr('width',40)
            .attr('height',40)
            .attr("blah", d => d.resolve)
            .text(d => {
                const tutor: Tutor = fromTutor(d.tutor);
                return tutor.icon;
            })
            .attr("fill", getColorFromResolution)
            .on("click",createInfo)
            .append('title')
            .attr('text',d=>d.tutor)
            

        d3Selection.select(`#${lastName}`)
            .classed(styles.ucRow,true)
            .append("text")
            .attr("x",5)
            .attr("y",75)
            .classed("ucName",true)
            .text(lastName);    
    }

    function removeItems(){
        d3Selection.select(`#${props.name}`).selectAll("*").remove();
        d3Selection.select(`#${props.name}`).append("rect")
            .classed(styles.border,true)
            .attr("width",props.width)
            .attr("height",props.height);
    }

    useEffect( () => {

        removeItems();
        createItems();

        return () => {
            removeItems();
        }
    });

    return <>
        <svg id={lastName} className={styles.row} width={props.width} height={props.height}>
            <rect className={styles.border} width={props.width} height={props.height}/>
        </svg>
    </>

}