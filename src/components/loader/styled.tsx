import { ImSpinner2 } from "react-icons/im";
import LoaderStyles from "./Loader.module.css";

export function Spinner(props: any) {
	return (
		<ImSpinner2
			{...props}
			className={`${LoaderStyles[props.className]} ${LoaderStyles["loader"]} `}
		/>
	);
}
