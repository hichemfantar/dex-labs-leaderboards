import React from "react";
import locationData from "./locationData.json";
import useLeaderboard from "./useLeaderboard";

const randomEmoji = () => {
	const emojis = ["👏", "👍", "🙌", "🤩", "🔥", "⭐️", "🏆", "💯"];
	let randomNumber = Math.floor(Math.random() * emojis.length);
	return emojis[randomNumber];
};

export default function Main(props) {
	const { activeLocation, setActiveLocation, ...rest } = props;
	const serverQuery = useLeaderboard(activeLocation);

	return (
		<div className="l-grid__item">
			<div className="c-card">
				<div className="c-card__header">
					<h3>Locations</h3>
					<select
						className="c-select"
						onChange={(e) => setActiveLocation(e.target.value)}
					>
						{locationData.map((location) => (
							<option value={location?.EP_ID}>{location?.locationName}</option>
						))}
					</select>
				</div>
				<div className="c-card__header">
					<h3>Time</h3>
					<select className="c-select">
						<option>All Time</option>
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

						{serverQuery.isLoading && "Loading"}

						{serverQuery.data &&
							serverQuery.data?.alltime?.score?.map((row, idx) => (
								<li className="c-list__item">
									<div className="c-list__grid">
										<div
											className={`c-flag c-place u-bg--transparent ${
												idx + 1 === 1 && "u-text--dark u-bg--yellow"
											}
                      ${idx + 1 === 2 && "u-text--dark u-bg--teal"}
                      ${idx + 1 === 3 && "u-text--dark u-bg--orange"}`}
										>
											{idx + 1}
										</div>
										<div className="c-media">
											{/* <img
                                      className="c-avatar c-media__img"
                                      src="https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png"
                                    /> */}
											<div className="c-media__content">
												<div className="c-media__title">
													{row?.FirstName} {row?.LastName}
												</div>
												<a className="c-media__link u-text--small" href="#">
													{row?.PCUID}
												</a>
											</div>
										</div>
										<div
											className={`u-text--right c-kudos ${
												idx + 1 === 1 && "u-text--yellow"
											} ${idx + 1 === 2 && "u-text--teal"}
                                    ${idx + 1 === 3 && "u-text--orange"}`}
										>
											<div className="u-mt--8">
												<strong>{row?.Score}</strong> {randomEmoji()}
											</div>
										</div>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}
