import React from "react";
import useLeaderboard from "./useLeaderboard";

export default function SideBar(props) {
	const { activeLocation, ...rest } = props;
	const serverQuery = useLeaderboard(activeLocation);

	return (
		<div className="l-grid__item l-grid__item--sticky">
			{/* <div className="c-card u-bg--light-gradient u-text--dark">
      <div className="c-card__body">
        <div className="u-display--flex u-justify--space-between">
          <div className="u-text--left">
            <div className="u-text--small">My Rank</div>
            <h2>3rd Place</h2>
          </div>
          <div className="u-text--right">
            <div className="u-text--small">My Score</div>
            <h2>24</h2>
          </div>
        </div>
      </div>
    </div> */}
			<div className="c-card">
				<div className="c-card__body">
					<div className="u-text--center" id="winner">
						<div className="u-text-small u-text--medium u-mb--16">
							Top Runner of All Time
						</div>
						{/* <img
            className="c-avatar c-avatar--lg"
            src="https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png"
          /> */}
						{serverQuery.isLoading && "Loading"}

						{serverQuery.data && (
							<>
								<h3 className="u-mt--16">
									{serverQuery.data?.alltime?.score[0]?.FirstName +
										serverQuery.data?.alltime?.score[0]?.LastName}
								</h3>
								<span className="u-text--teal u-text--small">
									{serverQuery.data?.alltime?.score[0]?.Score}
								</span>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
