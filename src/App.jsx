import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreTabs from "./components/ScoreTabs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RaceLocations from "./components/RaceLocations";
import Header from "./components/Header";

const convert = require("xml-js");

function App() {
  // const [data, setData] = useState([]);

  // let formdata = new FormData();
  // formdata.append("EP_ID", "30");
  // formdata.append("PCUID", "0");

  // let requestOptions = {
  //   method: "POST",
  //   // mode: "no-cors",
  //   body: formdata,
  //   redirect: "follow",
  // };

  // function parseArray(arrayToParse) {
  //   let obj = {};
  //   let alltimeArray2 = [];
  //   if (!arrayToParse) {
  //     return [[], [], [], [], [], [], [], [], [], []];
  //   }
  //   arrayToParse.forEach((element) => {
  //     const a = element._text.match(/"(.*?)"/g);
  //     obj = {
  //       PCUID: a[0],
  //       Score: a[1],
  //       Rank: a[2],
  //       FirstName: a[3],
  //       LastName: a[4],
  //     };
  //     alltimeArray2.push(obj);
  //   });
  //   return alltimeArray2;
  // }

  // async function fetchData(params) {
  //   fetch("/academy/getranks", requestOptions)
  //     .then((response) => {
  //       // const xml =
  //       //   "<root>" +
  //       //   '<myday></myday><day><score>PCUID="907"Score="41880"Rank="1"FirstName="Flash"LastName="Neurocaster"</score><score>PCUID="101"Score="41540"Rank="2"FirstName="Xan"LastName="Taker"</score><score>PCUID="37"Score="40970"Rank="3"FirstName="Leon"LastName="Grimdawn"</score><score>PCUID="65"Score="40310"Rank="4"FirstName="Amp"LastName="Diamondfire"</score><score>PCUID="794"Score="35060"Rank="5"FirstName="Frankie"LastName="Ocean"</score><score>PCUID="158"Score="34590"Rank="6"FirstName="Ty"LastName="Arx"</score><score>PCUID="132"Score="28300"Rank="7"FirstName="Ace"LastName="Young"</score><score>PCUID="64"Score="25280"Rank="8"FirstName="Snake"LastName="Snakesnake"</score><score>PCUID="921"Score="24820"Rank="9"FirstName="The"LastName="Rose"</score><score>PCUID="42"Score="24640"Rank="10"FirstName="Baba"LastName="TheDuck"</score></day><myweek></myweek><week><score>PCUID="25"Score="42010"Rank="1"FirstName="Zoom"LastName="Zoom"</score><score>PCUID="907"Score="41880"Rank="2"FirstName="Flash"LastName="Neurocaster"</score><score>PCUID="23"Score="41700"Rank="3"FirstName="Lady"LastName="Daisy"</score><score>PCUID="541"Score="41690"Rank="4"FirstName="Captain"LastName="Macrex"</score><score>PCUID="13"Score="41580"Rank="5"FirstName="Danny"LastName="O"</score><score>PCUID="101"Score="41540"Rank="6"FirstName="Xan"LastName="Taker"</score><score>PCUID="490"Score="41200"Rank="7"FirstName="El"LastName="Cobalt"</score><score>PCUID="568"Score="41090"Rank="8"FirstName="Admiral"LastName="Emberdragon"</score><score>PCUID="37"Score="40970"Rank="9"FirstName="Leon"LastName="Grimdawn"</score><score>PCUID="65"Score="40560"Rank="10"FirstName="Amp"LastName="Diamondfire"</score></week><mymonth></mymonth><month><score>PCUID="25"Score="42010"Rank="1"FirstName="Zoom"LastName="Zoom"</score><score>PCUID="907"Score="41880"Rank="2"FirstName="Flash"LastName="Neurocaster"</score><score>PCUID="23"Score="41700"Rank="3"FirstName="Lady"LastName="Daisy"</score><score>PCUID="541"Score="41690"Rank="4"FirstName="Captain"LastName="Macrex"</score><score>PCUID="13"Score="41580"Rank="5"FirstName="Danny"LastName="O"</score><score>PCUID="101"Score="41540"Rank="6"FirstName="Xan"LastName="Taker"</score><score>PCUID="490"Score="41200"Rank="7"FirstName="El"LastName="Cobalt"</score><score>PCUID="568"Score="41090"Rank="8"FirstName="Admiral"LastName="Emberdragon"</score><score>PCUID="37"Score="40970"Rank="9"FirstName="Leon"LastName="Grimdawn"</score><score>PCUID="65"Score="40560"Rank="10"FirstName="Amp"LastName="Diamondfire"</score></month><myalltime></myalltime><alltime><score>PCUID="25"Score="42010"Rank="1"FirstName="Zoom"LastName="Zoom"</score><score>PCUID="907"Score="41880"Rank="2"FirstName="Flash"LastName="Neurocaster"</score><score>PCUID="23"Score="41700"Rank="3"FirstName="Lady"LastName="Daisy"</score><score>PCUID="541"Score="41690"Rank="4"FirstName="Captain"LastName="Macrex"</score><score>PCUID="13"Score="41580"Rank="5"FirstName="Danny"LastName="O"</score><score>PCUID="101"Score="41540"Rank="6"FirstName="Xan"LastName="Taker"</score><score>PCUID="490"Score="41200"Rank="7"FirstName="El"LastName="Cobalt"</score><score>PCUID="568"Score="41090"Rank="8"FirstName="Admiral"LastName="Emberdragon"</score><score>PCUID="37"Score="40970"Rank="9"FirstName="Leon"LastName="Grimdawn"</score><score>PCUID="65"Score="40560"Rank="10"FirstName="Amp"LastName="Diamondfire"</score></alltime>+' +
  //       //   "</root>";
  //       return response.text();
  //     })
  //     .then((result) => {
  //       const res = convert.xml2js("<root>" + result + "</root>", {
  //         compact: true,
  //         spaces: 4,
  //       });
  //       delete res.root._text;
  //       const alltimeArray2 = [];
  //       for (let i = 0; i < 8; i++) {
  //         let a = Object.keys(res.root)[i];
  //         alltimeArray2.push({ [a]: parseArray(res.root[a].score) });
  //       }
  //       setData(alltimeArray2);
  //       return alltimeArray2;
  //     })
  //     .catch((error) => console.log("error", error));
  // }

  return (
    <div className="root-div">
      <Header />
      <RaceLocations data={"data"} />
      {/* <ScoreTabs data={data} /> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
