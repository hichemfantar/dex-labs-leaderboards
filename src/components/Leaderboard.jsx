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
	const [ActiveServer, setActiveServer] = useState(servers[0]?.link);

	return (
		<Layout>
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
		</Layout>
	);
}
