import appConstants from "appConstants";
import appLogo from "assets/images/logos/logo48.png";
import { FaGithub } from "react-icons/fa";
import GlobalLoader from "./GlobalLoader/GlobalLoader";

export default function Header() {
	return (
		<div className="c-header">
			<button className="c-button c-button--primary">
				{appConstants.appName}
			</button>
			<div
				style={{
					display: "flex",
					gap: 10,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<GlobalLoader />
				<a
					href="https://github.com/hichemfantar/dex-labs-leaderboards"
					target={"_blank"}
				>
					<FaGithub size="2em" color="ddd9ff" />
				</a>
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
