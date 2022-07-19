import timesData from "data/TimesData";
import { useEffect } from "react";
import useLeaderboards from "../api/useLeaderboards";
import infectedZones from "../data/InfectedZonesData.js";
import servers from "../data/serversData.js";

export default function Main(props) {
	const {
		activeInfectedZone,
		setActiveInfectedZone,
		activeServer,
		setActiveServer,
		activeTime,
		setActiveTime,
		...rest
	} = props;

	const leaderboardsQuery = useLeaderboards(
		activeInfectedZone?.EP_ID,
		activeServer?.url
	);

	function onServerChange(e) {
		const server = servers.find((server) => {
			return server.id === e.target.value;
		});

		setActiveServer(server);
	}
	function onInfectedZoneChange(e) {
		const activeInfectedZone = infectedZones.find((selectedInfectedZone) => {
			return selectedInfectedZone?.EP_ID === e.target.value;
		});

		setActiveInfectedZone(activeInfectedZone);
	}

	function onTimeChange(e) {
		const selectedTime = timesData.find((time) => {
			return time?.id === e.target.value;
		});

		setActiveTime(selectedTime);
	}

	useEffect(() => {
		const infectedZone = infectedZones.find((infectedZone) => {
			return (
				infectedZone.serverId === activeServer?.id || !infectedZone?.serverId
			);
		});

		setActiveInfectedZone(infectedZone);
	}, [activeServer?.id, setActiveInfectedZone, setActiveServer]);

	return (
		<div className="l-grid__item">
			<div className="c-card">
				<div className="c-card__header">
					<h3>Servers</h3>
					<select className="c-select" onChange={onServerChange}>
						{servers.map((server) => (
							<option
								key={server?.id}
								selected={activeServer?.id === server?.id}
								value={server?.id}
							>
								{server?.name}
							</option>
						))}
					</select>
				</div>
				<div className="c-card__header">
					<h3>Infected Zones</h3>
					<select className="c-select" onChange={onInfectedZoneChange}>
						{infectedZones.map((infectedZone) => {
							if (
								!infectedZone?.serverId ||
								infectedZone?.serverId === activeServer?.id
							) {
								return (
									<option
										key={infectedZone?.EP_ID}
										selected={activeInfectedZone?.EP_ID === infectedZone?.EP_ID}
										value={infectedZone?.EP_ID}
									>
										{infectedZone?.name}
									</option>
								);
							}
							return <></>;
						})}
					</select>
				</div>
				<div className="c-card__header">
					<h3>Time</h3>

					<select className="c-select" onChange={onTimeChange}>
						{timesData.map((time) => (
							<option
								key={time?.id}
								selected={activeTime?.id === time?.id}
								value={time?.id}
							>
								{time?.name}
							</option>
						))}
					</select>
				</div>
				<div className="c-card__body">
					<ul className="c-list" id="list">
						<li className="c-list__item">
							<div className="c-list__grid">
								<div className="u-text--left u-text--small u-text--medium">
									Rank
								</div>
								<div className="u-text--left u-text--small u-text--medium">
									Player Name
								</div>
								<div className="u-text--right u-text--small u-text--medium">
									Score
								</div>
							</div>
						</li>

						{leaderboardsQuery.isLoading && (
							<div
								className="link"
								style={{
									display: "block",
									textAlign: "center",
								}}
							>
								<h1>Loading...</h1>
							</div>
						)}

						{leaderboardsQuery.isError && (
							<a
								href="https://youtu.be/eWTtEkRz4fM"
								target="_blank"
								rel="noreferrer"
								style={{
									display: "block",
									textAlign: "center",
								}}
							>
								<h1>Something went wrong!</h1>
							</a>
						)}

						{leaderboardsQuery.isSuccess &&
							!leaderboardsQuery.data?.[activeTime?.key]?.score?.length && (
								<a
									href="https://youtu.be/LNNPNweSbp8"
									target="_blank"
									rel="noreferrer"
									style={{
										display: "block",
										textAlign: "center",
									}}
								>
									<h1>It's a ghost town!</h1>
								</a>
							)}

						{leaderboardsQuery.data &&
							leaderboardsQuery.data?.[activeTime?.key]?.score?.map(
								(row, idx) => (
									<li key={JSON.stringify(row)} className="c-list__item">
										<div className="c-list__grid">
											<div
												className={`c-flag c-place u-bg--transparent ${
													row?.Rank == 1 && "u-text--dark u-bg--yellow"
												}
                      ${row?.Rank == 2 && "u-text--dark u-bg--teal"}
                      ${row?.Rank == 3 && "u-text--dark u-bg--orange"}`}
											>
												{row?.Rank}
											</div>
											<div className="c-media">
												<img
													className="c-avatar c-media__img"
													src={`https://avatars.dicebear.com/api/adventurer/${row?.PCUID}.svg`}
													alt="user avatar"
												/>
												<div className="c-media__content">
													<div className="c-media__title">
														{row?.FirstName} {row?.LastName}
													</div>
													{/* <a className="c-media__link u-text--small" href="#">
													{row?.PCUID}
												</a> */}
												</div>
											</div>
											<div
												className={`u-text--right c-kudos ${
													row?.Rank == 1 && "u-text--yellow"
												} ${row?.Rank == 2 && "u-text--teal"}
                                    ${row?.Rank == 3 && "u-text--orange"}`}
											>
												<div className="u-mt--8">
													<strong>{row?.Score}</strong>
												</div>
											</div>
										</div>
									</li>
								)
							)}
					</ul>
				</div>
			</div>
		</div>
	);
}
