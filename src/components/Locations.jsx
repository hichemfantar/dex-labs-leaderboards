const json = require("./locationData.json");

function Locations(props) {
  const locationNames = json;

  const locationList = locationNames.map((location) => {
    return (
      <li
        className="location-list-item"
        locationid={location.EP_ID}
        key={location.EP_ID}
      >
        <div className="location-item-info">
          <h4>locationName: </h4>
          <span>{location.locationName}</span>
        </div>
        <div className="location-item-info">
          <h4>locationAreaName: </h4>
          <span>{location.locationAreaName}</span>
        </div>
        <div className="location-item-info">
          <h4>time: </h4>
          <span>{location.time}</span>
        </div>
        <div className="location-item-info">
          <h4>minLevel: </h4>
          <span>{location.minLevel}</span>
        </div>
        <div className="location-item-info">
          <h4>maxLevel: </h4>
          <span>{location.maxLevel}</span>
        </div>
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
