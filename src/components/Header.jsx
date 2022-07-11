import { useIsFetching } from "react-query";

export default function Header() {
	const isFetching = useIsFetching();

	return (
		<div className="c-header">
			{/* <img
      className="c-logo"
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/km-logo-color.svg"
      draggable="false"
    /> */}
			<button className="c-button c-button--primary">
				Dex Labs Leaderboards
			</button>
			<h3
				style={{
					opacity: isFetching ? 1 : 0,
				}}
			>
				fetching
			</h3>
		</div>
	);
}
