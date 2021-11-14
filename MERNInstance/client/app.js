import React from "react"
import ReactDOM from "react-dom"
import LifeCycle from "./components/LifeCycle";
import Measurements from "./components/Measurements";

ReactDOM.render(
    <div>
    <Measurements/>
    <LifeCycle />
    </div>,
    document.getElementById("root")
);