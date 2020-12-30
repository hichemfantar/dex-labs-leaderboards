import React, { useState } from "react";
import ScoreTabs from "./ScoreTabs";

function RaceLocations({ data }) {
  const [location, setLocation] = useState("0");
  function chooseLocation(e) {
    var attribute = e.target.attributes.getNamedItem("locationid").value;
    if (attribute !== location) {
      setLocation(attribute);
      console.log(attribute);
    }
  }
  return (
    <div>
      <ul>
        <li locationid={"30"} onClick={chooseLocation}>
          location
        </li>
        <li locationid={"33"} onClick={chooseLocation}>
          location
        </li>
        <li locationid={"0"} onClick={chooseLocation}>
          location
        </li>
      </ul>
      {location !== "0" ? (
        <ScoreTabs data={data} locationData={location} />
      ) : (
        <h2>Please choose a location</h2>
      )}
    </div>
  );
}

export default RaceLocations;
