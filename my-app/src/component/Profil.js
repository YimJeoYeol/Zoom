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
        <p>Git : {props.gitID}</p>
      </div>
      <div className="yimjeaImg"><div className="likeText" id="movingHeart"></div></div>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>


    </div>
  );
}

export default Profil;