import React from "react";
import {useState} from "react";

function Profil(props){

  const [text,setText] = useState("");

  function toYimjea(e){
    setText(e.target.value);
  }

  function resetText(){
    setText("");
  }


  const [count,setCount] = useState(0);
  const url1 = "https://github.com/yimje/Zoom"
  const url2 = "https://github.com/yimje/Book-Management-System"
  function counter(e){
    const txt = e.target.value;
    setCount(txt.length);
  }

  return(
    <div className="pofil">
      <h3 id="h3-1">{props.subTitle1}</h3>
      <div className="mainInfo">
        <p>Name : {props.name}</p>
        <p>Birth : {props.birth}</p>
        <p>Email : {props.email}</p>
        <p>Part : {props.part}</p>
        <p>GitHub : {props.gitHubID}</p>
        <button onClick={()=>{window.open(url1)}}>임재열의 깃허브이동하기 1</button><br/><br/><br/><br/>
        <button onClick={()=>{window.open(url2)}}>임재열의 깃허브이동하기 2</button>
        <br/><br/>
        <br/><br/>
        <br/><br/>
      </div>
      <br/><br/>
      <div className="yimjeaImg"></div>
    </div>
  );
}

export default Profil;