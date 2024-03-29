import { useEffect, useState } from "react";
import useLeaderboards from "../api/useLeaderboards";

export default function SideBar(props) {
	const { activeInfectedZone, activeServer, activeTime, ...rest } = props;

	const leaderboardsQuery = useLeaderboards(
		activeInfectedZone?.EP_ID,
		activeServer?.url
	);

	const [fullName, setFullName] = useState("");

	useEffect(() => {
		if (
			leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.FirstName &&
			leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.LastName
		) {
			setFullName(
				`${leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.FirstName} ${
					leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.LastName
				}`
			);
		} else setFullName("👻");
	}, [activeTime?.key, leaderboardsQuery.data]);

	return (
		<div className="l-grid__item l-grid__item--sticky">
			<div className="c-card u-bg--light-gradient u-text--dark">
				<div className="c-card__body">
					<div className="u-display--flex u-justify--space-between">
						<div className="u-text--left">
							<div className="u-text--small">Top Runner</div>
							{leaderboardsQuery.isLoading && <h2>Checking if It's you...</h2>}
							{leaderboardsQuery.isSuccess && <h2>{fullName}</h2>}
						</div>
						<div className="u-text--right">
							<div className="u-text--small">Score</div>
							<h2>
								{leaderboardsQuery.isSuccess &&
									(leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.Score ||
										"Over 9000!")}
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="c-card">
				<div className="c-card__body">
					<div className="u-text--center" id="winner">
						<div className="u-text-small u-text--medium u-mb--16">
							Infected Zone
						</div>
						<img
							className="c-location-image"
							src={activeInfectedZone?.image}
							alt="active infected zone"
						/>
						<h3 className="u-mt--16">{activeInfectedZone?.name}</h3>
						<span className="u-text--teal u-text--small">
							{activeInfectedZone?.areaName}
						</span>
						<h4 className="u-text--teal u-text--small">
							{activeInfectedZone?.time}
						</h4>
						<h4 className="u-text--teal u-text--small">
							Level: {activeInfectedZone?.minLevel} -{" "}
							{activeInfectedZone?.maxLevel}
						</h4>
						{/* <h4 className="u-text--teal u-text--small">
							API ID: {activeInfectedZone?.EP_ID}
						</h4> */}
					</div>
				</div>
			</div>
		</div>
	);
}
