import React from "react";

export default function Flight(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: " 4px",
        marginLeft:'500px',
        backgroundColor: 'lightPink',
        marginTop: '3px',
        display:'block',
        width: '25%',
        padding:'25px'
      }}
    >
      number={props.number} CompName={props.CompName} <br /> peapole=
      {props.peapole} date = {props.date}
    </div>
  );
}
