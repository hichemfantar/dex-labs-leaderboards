import axios from "axios";
import { useQuery } from "react-query";
import convert from "xml-js";

export default function useLeaderboard(activeLocation) {
	return useQuery(
		["active-game", activeLocation],
		async () => {
			let formdata = new FormData();
			formdata.append("EP_ID", activeLocation);
			formdata.append("PCUID", 0);

			const res = await axios.post("/academy/getranks", formdata);
			return res.data;
		},
		{
			select: (data) => {
				const dataParsed = convert.xml2js("<root>" + data + "</root>", {
					compact: true,
					spaces: 4,
				});
				delete dataParsed.root._text;
				const parsed = dataParsed?.root?.alltime?.score?.map((element) => {
					const array = element._text.match(/"(.*?)"/g);
					const newArray = array.map((element) => {
						return element.replaceAll('"', "");
					});
					return {
						PCUID: newArray[0],
						Score: newArray[1],
						Rank: newArray[2],
						FirstName: newArray[3],
						LastName: newArray[4],
					};
				});
				let newRoot = { ...dataParsed?.root };
				newRoot.alltime.score = [...parsed];
				return newRoot;
			},
		}
	);
}
