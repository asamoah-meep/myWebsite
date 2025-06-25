import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react"
import { differenceInMonths, differenceInHours, format } from "date-fns";
import * as d3Axis from 'd3-axis';
import * as d3Selection from 'd3-selection';
import * as d3Scale from 'd3-scale';
import { ScaleTime } from "d3-scale";
import * as d3Brush from 'd3-brush';
import { BrushBehavior } from "d3-brush";
import * as d3TimeFormat from 'd3-time-format';
import styles from "./timeAxis.module.css";
import * as constants from "../../util/constants";

interface TimeAxisProps {
    selectedRange: [Date, Date]
    updateStart: (event: ChangeEvent<HTMLInputElement>) => void
    updateEnd: (event: ChangeEvent<HTMLInputElement>) => void
    setSelectedRange: (newRange: [Date, Date]) => void
}

const width = 850;

function updateBrush(scale: ScaleTime<number, number>, brush: BrushBehavior<unknown>, dateRange: [Date, Date]){
    
    d3Selection.select<SVGGElement, unknown>("#zoomBox")
        .call(brush)
        .call(brush.move, [scale(dateRange[0]), scale(dateRange[1])]);
}

function removeScale(){
    d3Selection.select("#timeScale")
        .remove();
    d3Selection.selectAll(".pointRow")
        .remove();
    d3Selection.select("#zoomBrush")
        .selectAll("*").remove();
}

function createScale(scale: ScaleTime<number,number>, selectedRange: [Date, Date]){
    const [selectedStart, selectedEnd] = selectedRange;
    const axis = d3Axis.axisBottom(scale);

    let diff = differenceInMonths(selectedEnd, selectedStart);

    if(diff <= 3){
        diff = differenceInHours(selectedEnd, selectedStart);
        if(diff < 72)
            axis.tickFormat(d3TimeFormat.timeFormat("%I%p %b %f"));
        else
            axis.tickFormat(d3TimeFormat.timeFormat("%b %e"));
    }
    else
        axis.tickFormat(d3TimeFormat.timeFormat("%b %Y"));


    d3Selection.select("#timeBox")
        .append("g")
        .attr("transform","translate(150,0)")
        .attr("id","timeScale")
        .call(axis);
}

function createZoom(scale: ScaleTime<number,number>){
    const axis = d3Axis.axisTop(scale);
    axis.tickFormat(d3TimeFormat.timeFormat("%b %Y"));

    d3Selection.select("#timeBox")
        .append("g")
        .attr("id","zoomBox")
        .attr("transform","translate(20,30)");

    d3Selection.select("#timeBox")
        .append("g")
        .attr("transform","translate(25,140)")
        .call(axis);
   }

function updateZoom(scale: ScaleTime<number,number>, selection,
    updateRange: Dispatch<SetStateAction<[Date, Date]>>,
){
        if(selection === null){
            updateRange([constants.fallStart, constants.springEnd]);
            return;
        }
    
        const[startDate, endDate] = selection.map(ele=>scale.invert(ele));
        updateRange([startDate, endDate]);
    }

export default function TimeAxis(props: TimeAxisProps){
    const scale: ScaleTime<number,number> = d3Scale.scaleTime()
        .domain([constants.fallStart, constants.springEnd])
        .range([0,width]);

    const brush: BrushBehavior<unknown> = d3Brush.brushX()
                .extent([[5,0],[width+155,110]])
                .on("end", ({selection}) => updateZoom(scale, selection, props.setSelectedRange));
    

    useEffect( () => {
        createScale(scale, props.selectedRange);
        createZoom(scale);
        updateBrush(scale, brush, props.selectedRange);
        return () => {
            removeScale();
        }
    }, []);


    return <>
        <svg id = "timeBox" width={1100}/>
        <br/>
        <div className="datePicker" id="startDate">
            Start Date:
            <br/>
            <input type='date' value={format(props.selectedRange[0], constants.inputDateFormat)}
            min={format(constants.fallStart, constants.inputDateFormat)} onChange={props.updateStart}/>
        </div>
        <div className="datePicker">
            End Date:
            <br/>
            <input type='date' value={format(props.selectedRange[1], constants.inputDateFormat)}
            max={format(constants.springEnd, constants.inputDateFormat)} onChange={props.updateEnd}/>
        </div>
        <div id={styles.timeFrame}>
            <span onClick={() => props.setSelectedRange([constants.fallStart, constants.fallEnd])}>Fall Semester</span> |
            <span onClick={() => props.setSelectedRange([constants.springStart, constants.springEnd])}>Spring Semester</span> |
            <span onClick={() => props.setSelectedRange([constants.fallStart, constants.springEnd])}>All</span>
        </div>
    </>
}