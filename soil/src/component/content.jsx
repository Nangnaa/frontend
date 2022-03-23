import React from "react";
import Con2 from "./con2";
import './layout.css';

function Content(){
    return(
        <div>
            <div>
            <div className="con1"></div>
            <Con2/>
            <div className="con3"></div>
            <div className="con4"></div>
            </div>
        </div>
    )
}

export default Content;