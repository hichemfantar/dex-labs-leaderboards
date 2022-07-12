import { useIsFetching, useIsMutating } from "react-query";
import { Spinner } from "./styled";

export default function Loader() {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();

	return (
		<Spinner
			className={!isFetching && !isMutating ? "paused" : ""}
			// style={{
			// 	opacity: isFetching || isMutating ? 1 : 0,
			// }}
		/>
	);
}
