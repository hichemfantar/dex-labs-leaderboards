import timesData from "data/TimesData.js";
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
	const [activeTime, setActiveTime] = useState(timesData[0]);

	return (
		<Layout>
			<SideBar
				activeInfectedZone={activeInfectedZone}
				activeServer={activeServer}
				activeTime={activeTime}
			/>
			<Main
				activeInfectedZone={activeInfectedZone}
				setActiveInfectedZone={setActiveInfectedZone}
				activeServer={activeServer}
				setActiveServer={setActiveServer}
				activeTime={activeTime}
				setActiveTime={setActiveTime}
			/>
		</Layout>
	);
}
