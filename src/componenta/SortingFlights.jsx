import React from "react";

export default function SortingFlights(props) {
  return (
    <div>
      Sorting flights <br />
      {props.lookUpFlight()}
      <br />
      <span
        style={{
          fontWeight: "bold",
          marginTop: "5px",
          width: "300px",
          hight: "300px",
          overflow: "hiddin",
          overflowY: "auto",
          alignItems: "center",
        }}
      >
        {props.newFlights.map((val) => {
          return (
            <>
              Compony name: {val.CompName}, People on flight: {val.peapole}
              <br />
              Flight number: {val.number} Date of flight: {val.date}
              <br />
              <br />
            </>
          );
        })}
      </span>
      <br />
      <div>{props.select()}</div>
      <div
        style={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        {props.tempFlights.map((val) => {
          return (
            <>
              <tr>
                <td>Compony name: {val.CompName}</td>
                <td>People on flight: {val.peapole}</td>
              </tr>
              <tr>
                <td>Flight number: {val.number}</td>
                <td>Date of flight: {val.date}</td>
              </tr>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
