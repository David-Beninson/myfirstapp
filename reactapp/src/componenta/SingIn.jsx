import React from "react";
import { useRef , useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SingIn(props) {
  const nav = useNavigate();
  const refid = useRef();

  const [txt,setTxt]=useState('')
  
  const valid = () => {
    if (refid.current.value === "12345") {
      props.setMenuFlag(true);
      nav("controlpanel");
    }else{
      setTxt('User not found')
    }
  };

  return (
    <div>
      SING IN
      <br />
      <input type="text" placeholder="ID" ref={refid}/>
      <br />
      <span style={{color:'red'}}>{txt}</span><br />
      <button onClick={() => {valid()}}>ENTER</button>
    </div>
  );
}
// rfc
