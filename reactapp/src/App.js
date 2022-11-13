import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Menu from "./componenta/Menu";
import SingIn from "./componenta/SingIn";
import AddFlight from "./componenta/AddFlight";
import AllFlights from "./componenta/AllFlights";
import DelFlaght from "./componenta/DelFlaght";
import SortingFlights from "./componenta/SortingFlights";

function App() {
  const [menuFlag, setMenuFlag] = useState(false);
  const [vall, setVal] = useState("");
  const [sort, setSort] = useState("");
  const [newFlights, setNewFlights] = useState([]);
  const [tempFlights, setTempFlights] = useState([]);
  const [flights, setAllFlights] = useState([]);
  const [txt, settxt] = useState("");
  const [inpt, setInpt] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch("/getData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllFlights(data)
      });
  }, [flag]);

  useEffect(() => {
    flights.map((val) => {
      let counter = 0;
      for (let i = 0; i < flights.length; i++) {
        let p = val.peapole;
        counter += p;
      }
      settxt(
        `The flight is cancoled : There are ${flights.length} flights, with ${counter} peapole`
      );
    });
  }, [txt, flights]);

  useEffect(() => {
    if (sort === "") {
      setTempFlights([]);
    }
    if (sort === "low") {
      setTempFlights([...flights].sort((a, b) => a.number - b.number));
    }
    if (sort === "high") {
      setTempFlights([...flights].sort((a, b) => b.number - a.number));
    }
  }, [sort]);

  useEffect(() => {
    if (vall.length === 0) {
      return setNewFlights([]);
    }
    const newFlight = flights.filter((value) => {
      return value.CompName.includes(vall);
    });
    setNewFlights(newFlight);
  }, [vall]);

  const addFlight = (n, c, p, d) => {
    let temp = { id: uuid(), number: n, CompName: c, peapole: p, date: d };
    fetch("/addFlight", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        flightadd: temp,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFlag(!flag);
      });
  };

  const showMenu = () => {
    if (menuFlag === true) {
      return <Menu setMenuFlag={setMenuFlag} />;
    }
  };


  const checkInput = () => {
    return (
      <>
        <input
          type="text"
          onChange={(e) => {
            setInpt(e.target.value);
          }}
          placeholder="number flight"
          maxLength={5}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <br />
        <button
          onClick={() => {
            checkForDel();
          }}
        >
          delete
        </button>
      </>
    );
  };
  const select = () => {
    return (
      <div>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">select flight number</option>
          <option value={"low"}>low to high</option>
          <option value={"high"}>high to low</option>
        </select>
      </div>
    );
  };

  const checkForDel = () => {
    let count = 0
    flights.map((val) => {
      if (inpt === val.number) {
        count ++
        fetch("/delFlight", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "delete",
          body: JSON.stringify({
            flightDel: inpt,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setFlag(!flag);
          });
      }
    });
     if (count === 0) {
       alert("Flight not found");
     }
  };

  const lookUpFlight = () => {
    return (
      <>
        <input
          type="serch"
          placeholder="Enter flight compony"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </>
    );
  };

  return (
    <div className="App">
      <HashRouter>
        {showMenu()}
        <Routes>
          <Route path="/" element={<SingIn setMenuFlag={setMenuFlag} />} />
          <Route
            path="/controlpanel"
            element={<AllFlights flights={flights} />}
          />
          <Route
            path="/controlpanel/sort"
            element={
              <SortingFlights
                flights={flights}
                newFlights={newFlights}
                lookUpFlight={lookUpFlight}
                select={select}
                tempFlights={tempFlights}
              />
            }
          />
          <Route
            path="/controlpanel/add"
            element={<AddFlight addFlight={addFlight} flights={flights} />}
          />
          <Route
            path="/controlpanel/delete"
            element={<DelFlaght txt={txt} checkInput={checkInput} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;