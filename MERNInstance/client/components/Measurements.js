//import { json } from "express";
import React, { useState } from "react";
import FreakingTable from "./Freakingtable.js";

function Measurements() {
    const [data, setData] = useState();
    var msg = null; //just for testing its javascript capabilities
    var msg2 = '<h1>Holy Cow!</h1>';
    

    
    //updating the data by itself. it works. don't try to use console.log() on that. your computer is not that strong 
    setInterval(fetchMeasurements, 10000);

    async function fetchMeasurements() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
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
            <p>{JSON.stringify(data)}</p>
            <button onClick={fetchMeasurements2}>log Data</button>
            <button onClick={fetchMeasurements}>Fetch Data</button>
            
            
        </section>
    )
}

export default Measurements;

function tableDisplayer(){
    var msg2= "I am another function";
    return msg2;
}
