import { useEffect, useState } from "react";
import useLeaderboards from "../api/useLeaderboards";

export default function SideBar(props: any) {
	const { activeInfectedZone, activeServer, activeTime } = props;

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
		<div className="md:col-span-4">
			<div
				className="rounded-[0.8rem]
				u-bg--light-gradient u-text--dark			
							
							mb-[1.6rem]
							
							border-2 border-[#2d2d2d]
							"
			>
				<div className="p-4 md:p-8">
					<div className="u-display--flex u-justify--space-between">
						<div className="">
							<div className="">Top Runner</div>
							{leaderboardsQuery.isLoading && <h2>Checking if It's you...</h2>}
							{leaderboardsQuery.isSuccess && (
								<h2 className="text-2xl">{fullName}</h2>
							)}
						</div>
						<div className="text-right">
							<div className="u-text--small">Score</div>
							<h2 className="text-2xl">
								{leaderboardsQuery.isSuccess &&
									(leaderboardsQuery.data?.[activeTime?.key]?.score[0]?.Score ||
										"Over 9000!")}
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div
				className="rounded-[0.8rem]
bg-[var(--surface)]

mb-[1.6rem]

border-2 border-[#2d2d2d]
"
			>
				<div className="p-4 md:p-8">
					<div className="text-center">
						<div className="mb-6 text-2xl font-bold">Infected Zone</div>
						<img
							className="inline-flex
items-center
justify-center
rounded-lg
w-full
object-cover"
							src={activeInfectedZone?.image}
							alt="active infected zone"
							loading="lazy"
						/>
						<h3 className="mt-6">{activeInfectedZone?.name}</h3>
						<div className="text-teal-400 mt-2">
							{activeInfectedZone?.areaName}
						</div>
						<h4 className="text-teal-400 mt-2">{activeInfectedZone?.time}</h4>
						<h4 className="text-teal-400 mt-2">
							Level: {activeInfectedZone?.minLevel} -{" "}
							{activeInfectedZone?.maxLevel}
						</h4>
						{/* <h4 className="text-teal-400 u-text--small">
							API ID: {activeInfectedZone?.EP_ID}
						</h4> */}
					</div>
				</div>
			</div>
		</div>
	);
}
