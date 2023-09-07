import React from "react";


function Career(career){
   return(
<div className="career">
      <h3 id="h3-3">경력</h3>
        <div className="secondInfo">
          <p>Corporate name : {career.Corporatename}</p>
          <p>Career period : {career.careerperiod}</p>
          <p>Work : {career.work}</p>
          <p>WorkContent1 : {career.workcontent1}</p>
          <p>WorkContent2 : {career.workcontent2}</p>
        </div>
        <div className="img">
          <img src="image/일.jpg" className="imgStyle" alt="일" width="250" height="250"></img>
          <div className="txt">
          </div>
       </div>
        <br />
       <br/><br/>
       <br/><br/>
       <br/><br/>
       <br/><br/>
       <br/><br/>
    </div>
   );
}
export default Career;