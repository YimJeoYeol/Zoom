import React from "react";
import {useState} from "react";

function Details({nameuniversity,thetimeofgraduation}) {

    return(
        <div className="Graduation">
            <h3 id="h3-4">#Graduation</h3>
            <div className="thir">
                <p>Name of the university : {nameuniversity}</p>
                <p>the time of graduation : {thetimeofgraduation}</p>

            </div>
            <br />
            <div className="img">
                <img src="image/대구대.jpg" className="imgStyle" alt="대구대" width="250" height="250"></img>
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

export default Details;