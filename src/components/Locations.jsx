const json = require("./locationData.json");

function Locations(props) {
  const locationNames = json;

  const locationList = locationNames.map((location) => {
    return (
      <li className="location-list-item" locationid={location.EP_ID}>
        <h4>locationName: {location.locationName}</h4>
        <h4>locationAreaName: {location.locationAreaName}</h4>
        <h4>time: {location.time}</h4>
        <h4>minLevel: {location.minLevel}</h4>
        <h4>maxLevel: {location.maxLevel}</h4>
        <button locationid={location.EP_ID} onClick={props.chooseLocation}>
          EP_ID: {location.EP_ID}
        </button>
      </li>
    );
  });
  return (
    <div className="location-list-div">
      <ul className="location-list-ul">{locationList}</ul>
    </div>
  );
}

export default Locations;
