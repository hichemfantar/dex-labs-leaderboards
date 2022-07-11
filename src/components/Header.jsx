import { useIsFetching } from "react-query";
import appLogo from "assets/images/logos/logo48.png";

export default function Header() {
	const isFetching = useIsFetching();

	return (
		<div className="c-header">
			<button className="c-button c-button--primary">
				DexLabs Leaderboards
			</button>
			<div
				style={{
					display: "flex",
					gap: 10,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h3
					style={{
						opacity: isFetching ? 1 : 0,
					}}
				>
					fetching
				</h3>
				<img
					className="c-logo"
					src={appLogo}
					draggable="false"
					alt="app logo"
				/>
			</div>
		</div>
	);
}
