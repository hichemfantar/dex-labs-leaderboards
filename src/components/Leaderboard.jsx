import { useState } from "react";
import servers from "./serversData.js";
import Header from "./Header";
import infectedZones from "./InfectedZonesData.js";
import Main from "./Main";
import SideBar from "./SideBar";

export default function Leaderboard() {
	const [activeInfectedZone, setActiveInfectedZone] = useState(
		infectedZones[9]
	);
	const [ActiveServer, setActiveServer] = useState(servers[0]?.link);

	return (
		<div className="l-wrapper">
			<Header />
			<div className="l-grid">
				<SideBar
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
					ActiveServer={ActiveServer}
					setActiveServer={setActiveServer}
				/>
				<Main
					activeInfectedZone={activeInfectedZone}
					setActiveInfectedZone={setActiveInfectedZone}
					ActiveServer={ActiveServer}
					setActiveServer={setActiveServer}
				/>
			</div>
		</div>
	);
}
