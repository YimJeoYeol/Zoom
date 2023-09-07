import React from "react";
import {useState} from "react";

function University({graduation,university,department}){

    return(
        <div className="">
            <h3 id="h3-2">#University</h3>
            <div className="firstInfo">
                <p>University : {university}</p>
                <p>Graduation : {graduation}</p>
                <p>Department : {department}</p>

            </div>
            <br />
            <div className="img">
                <img src="image/대구대이미지.jpg" className="imgStyle" alt="대구대학교" width="250" height="250"></img>

            </div>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </div>
    );
}

export default University;