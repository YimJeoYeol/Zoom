import "./css/styles.css"

import React from "react";

function Test2() {

  function LayoutBox(){
    return(
      
      // 이미지박스
      <table className="layoutBox">
        <table className="box">
        {/* 중앙박스 */}
        <table className="InnerBox" style={{top:'25%',left:'25%',background:'#00ff00',zIndex:20}}>
          <table className="InnerBox" style={{top:'-25%',left:'75%',background:'blue',zIndex:30}}/>
          <table className="InnerBox" style={{top:'25%',left:'0%',background:'red',zIndex:30}}/>
          <table className="InnerBox" style={{top:'75%',left:'-25%',background:'white',zIndex:50}}/>
          <table className="InnerBox" style={{top:'50%',left:'25%',background:'#f0f0f0',zIndex:40}}/>
          </table>
          {/* 좌측상단 */}
          <table className="InnerBox" style={{top:'0%',left:'0%',background:'#ff00ff',zIndex:10}}>
            <table className="InnerBox" style={{top:'0%',left:'0%',background:'white',zIndex:50}}/>
            </table>
            {/* 우측상단 */}
            <table className="InnerBox" style={{top:'0%',left:'50%',background:'black',zIndex:10}}>
              <table className="InnerBox" style={{top:'50%',left:'50%',background:' #00ffff',zIndex:10}}/>
            </table>
            {/* 좌측하단 */}
            <table className="InnerBox" style={{top:'50%',left:'0%',background:'black',zIndex:10}}>
            </table>
            {/* 우측하단 */}
            <table className="InnerBox" style={{top:'50%',left:'50%',background:'yellow',zIndex:10}}>
            </table>
          </table>
      </table>);
  }
    return (
        <div>
            <header className="Test2-header">
                <div className="Test" style={{display: "flex" ,backgroundColor:'#F5EFE7'}}>
                    <div style={{margin: 50}}>
                        <h2>원본 이미지</h2>
                        <img
                            src={require("./assets/images/subject2.png")}
                            alt="Subject"
                            style={{width: 600, height: 600}}
                        />
                    </div>
                    <div style={{margin: 50}}>
                        <h2>화면 분할</h2>
                      <LayoutBox/>
               
                    </div>
                </div>
            </header>
        </div>
    );
}


export default Test2;
