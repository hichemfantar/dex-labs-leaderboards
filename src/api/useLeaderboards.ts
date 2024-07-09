// this file could be refactored to use immutability because right now it relies heavilty on mutating the original object which is unpredictable and can lead to bugs

import axios from "axios";
import { timesData } from "../data/TimesData.js";
import { useQuery } from "react-query";
import convert from "xml-js";
import { servers } from "../data/serversData.js";

export default function useLeaderboards(
	infectedZoneID: string,
	activeServerUrl: string
) {
	return useQuery(
		["leaderboard", infectedZoneID, activeServerUrl],
		async () => {
			const formdata = new FormData();
			formdata.append("EP_ID", infectedZoneID);
			formdata.append("PCUID", "0");
			formdata.append("NUM", "100");

			const res = await axios.post(activeServerUrl || servers[0].url, formdata);
			// console.log(res.data);

			try {
				const parsedData = convert.xml2js("<root>" + res.data + "</root>", {
					compact: true,
				}) as any;
				console.log(parsedData);

				delete parsedData.root._text;

				const infectedZones = { ...parsedData?.root };

				timesData.forEach((time) => {
					if (!parsedData?.root || !parsedData?.root?.[time?.key]) {
						return;
					}

					if (!parsedData?.root?.[time?.key]?.score) {
						parsedData.root[time?.key].score = [
							// { _text: dataParsed?.root?.[time?.key]?.score?._text },
						];
					}

					if (parsedData?.root?.[time?.key]?.score?._text) {
						parsedData.root[time?.key].score = [
							{ _text: parsedData?.root?.[time?.key]?.score?._text },
						];
					}

					const parsed = parsedData?.root?.[time?.key]?.score?.map(
						(element: { _text: string }) => {
							const array = element._text.match(/"(.*?)"/g);
							if (!array) return;

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
				console.error(error);
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
