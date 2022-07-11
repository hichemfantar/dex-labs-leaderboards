import { useState } from "react";
import Header from "./Header";
import infectedZones from "./InfectedZonesData.js";
import Main from "./Main";
import SideBar from "./SideBar";

export default function Leaderboard() {
	const [activeInfectedZone, setActiveInfectedZone] = useState(
		infectedZones[9]
	);

	return (
		<div className="l-wrapper">
			<Header />
			<div className="l-grid">
				<SideBar
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
				/>
				<Main
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
				/>
			</div>
		</div>
	);
}
