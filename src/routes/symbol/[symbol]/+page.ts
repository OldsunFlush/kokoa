import type { PageLoad } from './$types';
import { PUBLIC_ALPHAVANTAGE_API } from '$env/static/public';

export const load = (async ({ params, fetch }) => {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.symbol}&apikey=${PUBLIC_ALPHAVANTAGE_API}`,
		{
			// headers: {
			// 	Authorization: `Bearer ${"demo"}`,
			// 	'Content-Type': 'application/json'
			// },
		}
	);
	const item = await res.json();
	return {
		country: item.Country,
		currency: item.Currency,
		description: item.Description,
		dividend: item.DividendPerShare,
		exchange: item.Exchange,
		industry: item.Industry,
		marketCap: item.MarketCapitalization,
		name: item.Name,
		sector: item.Sector,
		symbol: item.Symbol,
		type: item.AssetType
	};
}) satisfies PageLoad;
