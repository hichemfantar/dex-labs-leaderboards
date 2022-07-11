import React from "react";
import { ImSpinner2 } from "react-icons/im";
import smallGlobalLoaderStyles from "./SmallGlobalLoader.module.css";

export function Loader(props) {
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
