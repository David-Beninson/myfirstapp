import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFlight(props) {
  const nav = useNavigate();
  const componyRef = useRef();
  const numRef = useRef();
  const numberRef = useRef();
  const [compony, setcompony] = useState("");
  const [date, setDate] = useState("");
  const [number, setnumber] = useState(0);
  const [txt, settxt] = useState("");
  const [num, setnum] = useState(0);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (num > 450) {
      settxt("up to 450 only");
      setflag(false);
    }
    if (num <= 450) {
      settxt("");
      setflag(true);
    }
  }, [num]);

  const valid = () => {
    let counter = 0;
    if (number === "" || compony === "" || num === 0 || flag === false|| date==="") {
      alert("ERROR");
    } else {
      let val = compony;
      for (let i = 0; i < val.length; i++) {
        if (val.charAt(i) >= "A" && val.charAt(i) <= "z") {
          counter++;
        }
      }
      if (counter >= 1) {
        let count = 0;
        {
          props.flights.map((val) => {
            if (number !== val.number) {
              count++;
            }
          });
          if (number === val.number || count < props.flights.length) {
            alert("ERROR");
          } else {
            props.addFlight(number, compony, num,date);
            nav("/controlpanel");
          }
        }
      } else {
        alert("ERROR");
      }
    }
    numberRef.current.value = null;
    numRef.current.value = null;
    componyRef.current.value = null;
  };
  return (
    <div>
      Add Flight <br />
      <input
        type="text"
        ref={numberRef}
        onChange={(e) => {
          setnumber(e.target.value);
        }}
        maxLength={5}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder={"number flight"}
      />
      <br />
      <input
        type="text"
        ref={componyRef}
        onChange={(e) => {
          setcompony(e.target.value);
        }}
        placeholder={"compony flight"}
      />
      <br />
      <input
        type="text"
        ref={numRef}
        maxLength={3}
        onChange={(e) => {
          setnum(e.target.value);
        }}
        placeholder={"number peapole"}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      /><br/>
      <input
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <p style={{color:'red'}}>{txt}</p>
      <br />
      <button onClick={valid}>add</button>
    </div>
  );
}
