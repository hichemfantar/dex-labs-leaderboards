import { useEffect } from "react";
import useLeaderboards from "../api/useLeaderboards.js";
import { servers } from "../data/serversData.js";
import { timesData } from "../data/TimesData.js";
import { locations as infectedZones } from "../data/InfectedZonesData.js";

export default function Main(props: any) {
	const {
		activeInfectedZone,
		setActiveInfectedZone,
		activeServer,
		setActiveServer,
		activeTime,
		setActiveTime,
	} = props;

	const leaderboardsQuery = useLeaderboards(
		activeInfectedZone?.EP_ID,
		activeServer?.url
	);

	function onServerChange(e: any) {
		const server = servers.find((server) => {
			return server.id === e.target.value;
		});

		setActiveServer(server);
	}
	function onInfectedZoneChange(e: any) {
		const activeInfectedZone = infectedZones.find((selectedInfectedZone) => {
			return selectedInfectedZone?.EP_ID === e.target.value;
		});

		setActiveInfectedZone(activeInfectedZone);
	}

	function onTimeChange(e: any) {
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
		<div className="md:col-span-8">
			<div
				className="rounded-[0.8rem]
bg-[var(--surface)]

p-4 md:p-8
border-2 border-[#2d2d2d]
"
			>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
						<label htmlFor="servers">Servers</label>
						<select
							id="servers"
							className="bg-[var(--darker)]
p-3

rounded-lg
border-2
border-[#323336]
border-solid
transition
bg-[#16171a]
min-w-32
text-sm
"
							onChange={onServerChange}
						>
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
					<div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
						<label htmlFor="Infected Zones">Infected Zones</label>

						<select
							id="Infected Zones"
							className="bg-[var(--darker)]
p-3

rounded-lg
border-2
border-[#323336]
border-solid
transition
bg-[#16171a]
min-w-32
text-sm
"
							onChange={onInfectedZoneChange}
						>
							{infectedZones.map((infectedZone) => {
								if (
									!infectedZone?.serverId ||
									infectedZone?.serverId === activeServer?.id
								) {
									return (
										<option
											key={infectedZone?.EP_ID}
											selected={
												activeInfectedZone?.EP_ID === infectedZone?.EP_ID
											}
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
					<div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
						<label htmlFor="time">Time</label>

						<select
							id="time"
							className="bg-[var(--darker)]
p-3

rounded-lg
border-2
border-[#323336]
border-solid
transition
bg-[#16171a]
min-w-32
text-sm
"
							onChange={onTimeChange}
						>
							{timesData.map((time: any) => (
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
				</div>
				<div className="mt-4">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left rtl:text-right">
							<thead className="text-xs uppercase">
								<tr className="">
									<th scope="col" className="py-3">
										Rank
									</th>
									<th scope="col" className="py-3 px-4">
										Player
									</th>
									<th scope="col" className="py-3 text-right">
										Score
									</th>
								</tr>
							</thead>
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
										<h1 className="text-xl">It's a ghost town!</h1>
									</a>
								)}

							<tbody>
								{leaderboardsQuery.data &&
									leaderboardsQuery.data?.[activeTime?.key]?.score?.map(
										(row: any) => (
											<tr className="">
												<th
													scope="row"
													className="py-4 font-medium whitespace-nowrap"
												>
													<div
														className={`flex justify-center items-center h-10 rounded-lg aspect-square font-semibold ${
															row?.Rank == 1 && "text-black bg-yellow-300"
														}
                      ${row?.Rank == 2 && "text-black bg-slate-300"}
                      ${row?.Rank == 3 && "text-black bg-orange-300"}`}
													>
														{row?.Rank}
													</div>
												</th>
												<td className="py-4 flex items-center gap-4 px-4">
													<img
														className="border-2 inline-flex justify-center items-center border-[#a3afbf] bg-white rounded-xl h-12 aspect-square object-contain"
														src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${row?.PCUID}`}
														alt="user avatar"
														loading="lazy"
													/>
													<div className="">
														<div className="">
															{row?.FirstName} {row?.LastName}
														</div>
														{/* <a className="c-media__link u-text--small" href="#">
													{row?.PCUID}
												</a> */}
													</div>
												</td>
												<td className="py-4 text-right">
													<div
														className={` ${
															row?.Rank == 1 && "text-yellow-300"
														} ${row?.Rank == 2 && "text-teal-300"}
                                    ${row?.Rank == 3 && "text-orange-300"}`}
													>
														<div className="">
															<strong>{row?.Score}</strong>
														</div>
													</div>
												</td>
											</tr>
										)
									)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
