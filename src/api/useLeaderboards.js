import axios from "axios";
import timesData from "data/TimesData.js";
import { useQuery } from "react-query";
import convert from "xml-js";
import servers from "../data/serversData.js";

export default function useLeaderboards(infectedZoneID, activeServerUrl) {
	return useQuery(
		["leaderboard", infectedZoneID, activeServerUrl],
		async () => {
			let formdata = new FormData();
			formdata.append("EP_ID", infectedZoneID);
			formdata.append("PCUID", 0);

			const res = await axios.post(activeServerUrl || servers[0], formdata);
			try {
				const dataParsed = convert.xml2js("<root>" + res.data + "</root>", {
					compact: true,
					spaces: 4,
				});

				delete dataParsed.root._text;

				let infectedZones = { ...dataParsed?.root };

				timesData.forEach((time) => {
					if (!dataParsed?.root || !dataParsed?.root?.[time?.key]) {
						return;
					}

					if (!dataParsed?.root?.[time?.key]?.score) {
						dataParsed.root[time?.key].score = [
							// { _text: dataParsed?.root?.[time?.key]?.score?._text },
						];
					}

					if (dataParsed?.root?.[time?.key]?.score?._text) {
						dataParsed.root[time?.key].score = [
							{ _text: dataParsed?.root?.[time?.key]?.score?._text },
						];
					}

					const parsed = dataParsed?.root?.[time?.key]?.score?.map(
						(element) => {
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
						}
					);
					infectedZones[time?.key].score = [...parsed];
				});

				// newRoot.alltime.score = [...(parsed || [])];
				return infectedZones;
			} catch (error) {
				console.log(error);
				return [];
			}
			return res.data;
		},
		{
			refetchOnWindowFocus: true,
			// select: (data) => {
			// 	try {
			// 		const dataParsed = convert.xml2js("<root>" + data + "</root>", {
			// 			compact: true,
			// 			spaces: 4,
			// 		});
			// 		delete dataParsed.root._text;
			// 		const parsed = dataParsed?.root?.alltime?.score?.map((element) => {
			// 			const array = element._text.match(/"(.*?)"/g);
			// 			const newArray = array.map((element) => {
			// 				return element.replaceAll('"', "");
			// 			});
			// 			return {
			// 				PCUID: newArray[0],
			// 				Score: newArray[1],
			// 				Rank: newArray[2],
			// 				FirstName: newArray[3],
			// 				LastName: newArray[4],
			// 			};
			// 		});
			// 		let infectedZones = { ...dataParsed?.root };
			// 		infectedZones.alltime.score = [...parsed];
			// 		// newRoot.alltime.score = [...(parsed || [])];

			// 		return infectedZones;
			// 	} catch (error) {
			// 		return [];
			// 	}
			// },
		}
	);
}
