import { useState } from "react";
import Header from "./Header";
import locations from "./locationData.js";
import Main from "./Main";
import SideBar from "./SideBar";

export default function Leaderboard() {
	const [activeLocation, setActiveLocation] = useState(locations[9]);

	return (
		<div className="l-wrapper">
			<Header />
			<div className="l-grid">
				<SideBar
					activeLocation={activeLocation}
					setActiveLocation={setActiveLocation}
				/>
				<Main
					activeLocation={activeLocation}
					setActiveLocation={setActiveLocation}
				/>
			</div>
		</div>
	);
}
