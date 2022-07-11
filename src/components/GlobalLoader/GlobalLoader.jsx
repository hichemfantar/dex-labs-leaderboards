import React from "react";
import { Loader } from "./styled";
import { useIsFetching, useIsMutating } from "react-query";

export default function GlobalLoader() {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();

	return (
		<Loader
			className={!isFetching && !isMutating ? "paused" : ""}
			// style={{
			// 	opacity: isFetching || isMutating ? 1 : 0,
			// }}
		/>
	);
}
