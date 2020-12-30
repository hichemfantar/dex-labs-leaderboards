import React, { useEffect, useState } from "react";
import Locations from "./Locations";
import ScoreTabs from "./ScoreTabs";

function RaceLocations({ data }) {
  const [location, setLocation] = useState("0");

  // useEffect(() => {}, []);

  function chooseLocation(e) {
    console.log(e.target.attributes.getNamedItem("locationid"));
    let attribute = e.target.attributes.getNamedItem("locationid").value;
    if (attribute !== location) {
      setLocation(attribute);
      console.log(attribute);
    }
  }
  return (
    <div className="container">
      <Locations chooseLocation={chooseLocation} />
      {location !== "0" ? (
        <ScoreTabs data={data} locationData={location} />
      ) : (
        <h2>Please choose a location</h2>
      )}
    </div>
  );
}

export default RaceLocations;
