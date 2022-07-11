import { useState } from "react";
import dimensions from "./dimensionsData.js";
import Header from "./Header";
import infectedZones from "./InfectedZonesData.js";
import Main from "./Main";
import SideBar from "./SideBar";

export default function Leaderboard() {
	const [activeInfectedZone, setActiveInfectedZone] = useState(
		infectedZones[9]
	);
	const [ActiveDimension, setActiveDimension] = useState(dimensions[0]?.link);

	return (
		<div className="l-wrapper">
			<Header />
			<div className="l-grid">
				<SideBar
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
					ActiveDimension={ActiveDimension}
					setActiveDimension={setActiveDimension}
				/>
				<Main
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
					ActiveDimension={ActiveDimension}
					setActiveDimension={setActiveDimension}
				/>
			</div>
		</div>
	);
}
