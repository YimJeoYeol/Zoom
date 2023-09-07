import React from "react";
import {useState} from "react";

function Details({homeTown,mbti,hobby,myPuppy,favorite}){ 

  return(
    <div className="">
      <h3 id="h3-2">#TMI</h3>
        <div className="subInfo">
          <p>Hometown : {homeTown}</p>
          <p>Hobby : {hobby}</p>
          
        </div>
        <br />
       <div className="img">
          <img src="image/대구.jpg" className="imgStyle" alt="대구경치" width="250" height="250"></img>
          
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