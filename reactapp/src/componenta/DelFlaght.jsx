import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function DelFlaght(props) {

 const inptref = useRef()
 const [txt , settxt]=useState('')
 
  const checkForDel=()=>{
    let count = 0
  {props.flights.map((val)=>{
    if(inptref.current.value === val.number){
      props.del()
      count ++
      props.flights.map((val)=>{
        let counter = 0
        let number = props.flights
        for(let i = 0; i < number.length ; i++){
          if(number[i]!==val.number){
         let p = val.peapole
          counter += p
          }
        }
        settxt(`flight is deleted : and there is ${number.length} with ${counter} on air`)
      })
    }
  })}if( count === 0){
    return alert ('not flight')
   }
  }

  return (
    <div>
      DelFlaght <br />
      <input
        type="text"
        ref={inptref}
        placeholder="number flight"
        maxLength={5}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <br />
      <button onClick={()=>{checkForDel()}}> delete</button><br />
      <p style={{color:'darkblue'}}>{txt}</p>
    </div>
  );
}
