import { ImSpinner2 } from "react-icons/im";
import smallGlobalLoaderStyles from "./SmallGlobalLoader.module.css";

export function Spinner(props) {
	return (
		<ImSpinner2
			{...props}
			className={`${smallGlobalLoaderStyles[props.className]} ${
				smallGlobalLoaderStyles["fetchingLoader"]
			} `}
			// css={`
			// 	vertical-align: middle;
			// 	animation: ${rotate} 1s linear infinite;
			// `}
			// style={{
			// 	verticalAlign: "middle",
			// 	animation: `${rotate} 1s linear infinite`,
			// }}
		/>
	);
}
