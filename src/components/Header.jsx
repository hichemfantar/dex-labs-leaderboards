import appConstants from "appConstants";
import appLogo from "assets/images/logos/logo48round.png";
import { FaGithub } from "react-icons/fa";
import Loader from "./loader/Loader";

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
				<Loader />
				<a
					href={appConstants.github.dexLabs.repository}
					target={"_blank"}
					rel="noreferrer"
				>
					<FaGithub size="2em" color="ddd9ff" />
				</a>
				<a
					href={appConstants.github.openFusion.repository}
					target={"_blank"}
					rel="noreferrer"
				>
					<img
						className="c-logo"
						src={appLogo}
						draggable="false"
						alt="app logo"
					/>
				</a>
			</div>
		</div>
	);
}
