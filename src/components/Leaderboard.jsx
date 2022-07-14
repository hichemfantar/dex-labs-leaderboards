import { useState } from "react";
import infectedZones from "../data/InfectedZonesData.js";
import servers from "../data/serversData.js";
import Layout from "./Layout.jsx";
import Main from "./Main";
import SideBar from "./SideBar";

export default function Leaderboard() {
	const [activeInfectedZone, setActiveInfectedZone] = useState(
		infectedZones[9]
	);
	const [activeServer, setActiveServer] = useState(servers[0]);

	return (
		<Layout>
			<SideBar
				activeInfectedZone={activeInfectedZone}
				setActiveInfectedZone={setActiveInfectedZone}
				activeServer={activeServer}
				setActiveServer={setActiveServer}
			/>
			<Main
				activeInfectedZone={activeInfectedZone}
				setActiveInfectedZone={setActiveInfectedZone}
				activeServer={activeServer}
				setActiveServer={setActiveServer}
			/>
		</Layout>
	);
}
