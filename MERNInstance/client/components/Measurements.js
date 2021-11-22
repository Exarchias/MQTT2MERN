//import { json } from "express";
import React, { useState } from "react";
import FreakingTable from "./Freakingtable.js";

function Measurements() {
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    var msg = null; //just for testing its javascript capabilities
    var msg2 = '<h1>Holy Cow!</h1>';
    

    
    //updating the data by itself. it works. don't try to use console.log() on that. your computer is not that strong 
    //setInterval(fetchMeasurements, 10000);

    async function fetchMeasurementsStart() {
        setInterval(fetchMeasurements, 10000);
    }

    async function fetchMeasurements() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
    }

    async function fetchMeasurementsALL() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
        setData2(json);
    }

    async function fetchMeasurementsB0() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
        const result = json.filter(item => item.unit_id == 0);
        setData2(result);
    }

    async function fetchMeasurementsB1() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
        const result = json.filter(item => item.unit_id == 1);
        setData2(result);
    }

    async function fetchMeasurementsB2() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
        const result = json.filter(item => item.unit_id == 2);
        setData2(result);
    }

    async function fetchMeasurements2() {
        const response = await fetch("/api/measurements");
        const json2 = await response.json();
        msg = json2;
        console.log(json2[0]);
        setData(json2);
        console.log("With stringify: " + JSON.stringify(data));
        //console.log("WithOUT stringify: " + data[0]._id);
    }

    return (
        <section>
            <h1>Measurements</h1>
            <h2>{data2!=null ? "Sensor: " + data2[0].unit_id: "Press a button!"}</h2>
            <FreakingTable data={data2}/>
            <button onClick={fetchMeasurementsALL}>Fetch All Data</button>
            <button onClick={fetchMeasurementsB0}>Fetch sensor 0</button>
            <button onClick={fetchMeasurementsB1}>Fetch sensor 1</button>
            <button onClick={fetchMeasurementsB2}>Fetch sensor 2</button>
            
            
        </section>
    )
}

export default Measurements;

function tableDisplayer(){
    var msg2= "I am another function";
    return msg2;
}
