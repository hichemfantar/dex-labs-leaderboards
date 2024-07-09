import appLogo from "../assets/images/logos/logo48round.png";
import { FaGithub } from "react-icons/fa";
import Loader from "./loader/Loader";
import { appConstants } from "../appConstants";

export default function Header() {
	return (
		<div
			className="
py-6
flex
justify-between
items-center

relative

 

px-2

"
		>
			<div className="flex items-center gap-3">
				<a
					href={appConstants.github.openFusion.repository}
					target={"_blank"}
					rel="noreferrer"
				>
					<img
						className="h-8 aspect-square object-cover rounded-lg"
						src={appLogo}
						alt="app logo"
						loading="lazy"
					/>
				</a>

				<h2 className="">{appConstants.appName} | OpenFusion</h2>
			</div>
			<div className="flex gap-4 items-center">
				<Loader />
				<a
					href={appConstants.github.dexLabs.repository}
					target={"_blank"}
					rel="noreferrer"
				>
					<FaGithub
						size={"1.8em"}
						className="aspect-square object-contain text-white"
					/>
				</a>
				{/* <a
					href={appConstants.github.openFusion.repository}
					target={"_blank"}
					rel="noreferrer"
				>
					<img
						className="h-10 aspect-square object-cover rounded-xl"
						src={appLogo}
						draggable="false"
						alt="app logo"
						loading="lazy"
					/>
				</a> */}
			</div>
		</div>
	);
}
