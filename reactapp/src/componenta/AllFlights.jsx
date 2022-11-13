import React from "react";
import Flight from "./Flight";

export default function AllFlights(props) {
  return (
    <div style={{textAlign: 'center',
      marginTop: '5%'
    }}>
      {props.flights.map((val) => {
        return  <Flight
            number={val.number}
            CompName={val.CompName}
            peapole={val.peapole}
            date={val.date}
          />
      })}
    </div>
  );
}
