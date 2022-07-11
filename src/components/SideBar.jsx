import useLeaderboard from "./useLeaderboard";

export default function SideBar(props) {
	const { activeLocation, ...rest } = props;
	const serverQuery = useLeaderboard(activeLocation?.EP_ID);

	return (
		<div className="l-grid__item l-grid__item--sticky">
			<div className="c-card u-bg--light-gradient u-text--dark">
				<div className="c-card__body">
					<div className="u-display--flex u-justify--space-between">
						<div className="u-text--left">
							<div className="u-text--small">Top Runner</div>
							<h2>
								{serverQuery.data?.alltime?.score[0]?.FirstName +
									serverQuery.data?.alltime?.score[0]?.LastName}
							</h2>
						</div>
						<div className="u-text--right">
							<div className="u-text--small">Score</div>
							<h2>{serverQuery.data?.alltime?.score[0]?.Score}</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="c-card">
				<div className="c-card__body">
					<div className="u-text--center" id="winner">
						<div className="u-text-small u-text--medium u-mb--16">
							Active Location
						</div>
						<img
							className="c-location-image"
							src={activeLocation?.image}
							alt="active location"
						/>
						<h3 className="u-mt--16">{activeLocation?.name}</h3>
						<span className="u-text--teal u-text--small">
							{activeLocation?.areaName}
						</span>
						<h4 className="u-text--teal u-text--small">
							{activeLocation?.time}
						</h4>
						<h4 className="u-text--teal u-text--small">
							Level: {activeLocation?.minLevel} - {activeLocation?.maxLevel}
						</h4>
						<h4 className="u-text--teal u-text--small">
							API ID: {activeLocation?.EP_ID}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
