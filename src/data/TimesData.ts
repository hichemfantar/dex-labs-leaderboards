const timesData: {
	name: string;
	key: Category;
	id: string;
}[] = [
	{
		name: "All Time",
		key: "alltime",
		id: "1",
	},
	{
		name: "Month",
		key: "month",
		id: "2",
	},
	{
		name: "Week",
		key: "week",
		id: "3",
	},
	{
		name: "Day",
		key: "day",
		id: "4",
	},
];

export { timesData };

type Category =
	| "myday"
	| "day"
	| "myweek"
	| "week"
	| "mymonth"
	| "month"
	| "myalltime"
	| "alltime";

// export interface Data {
// 	root: ParsedRoot;
// }

// export interface ParsedRoot {
// 	myday: ParsedScores;
// 	day: ParsedScores;
// 	myweek: ParsedScores;
// 	week: ParsedScores;
// 	mymonth: ParsedScores;
// 	month: ParsedScores;
// 	myalltime: ParsedScores;
// 	alltime: ParsedScores;
// 	_text?: string;
// }

// export interface ParsedScores {
// 	score: { _text: string };
// }
// export interface FormattedRoot {
// 	myday: FormattedScores;
// 	day: FormattedScores;
// 	myweek: FormattedScores;
// 	week: FormattedScores;
// 	mymonth: FormattedScores;
// 	month: FormattedScores;
// 	myalltime: FormattedScores;
// 	alltime: FormattedScores;
// }

// export interface FormattedScore {
// 	PCUID: string;
// 	Score: string;
// 	Rank: string;
// 	FirstName: string;
// 	LastName: string;
// 	_text?: string;
// }

// export interface FormattedScores {
// 	score: FormattedScore;
// }

export function deepClone(value: any) {
	return JSON.parse(JSON.stringify(value));
}
