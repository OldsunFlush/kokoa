import { json } from '@sveltejs/kit';

export async function GET() {
	const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`, {
		// headers: {
		// 	Authorization: `Bearer ${"demo"}`,
		// 	'Content-Type': 'application/json'
		// },
	});
	return json(response);
}