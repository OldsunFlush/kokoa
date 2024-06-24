import type { PageLoad } from './$types';
import { PUBLIC_POLYGONIO_API } from '$env/static/public';

export const load = (async ({ params, fetch }) => {
	const res = await fetch(
		`https://api.polygon.io/v3/reference/tickers/${params.symbol.toUpperCase()}?apiKey=${PUBLIC_POLYGONIO_API}`,
		{
			// headers: {
			// 	Authorization: `Bearer ${"demo"}`,
			// 	'Content-Type': 'application/json'
			// },
		}
	);
	const item = await res.json();
	const stock = item.results;
	console.log('🚀 ~ load ~ item:', item);
	return {
		branding: {
			logo: stock.branding.logo_url,
			icon: stock.branding.icon_url
		},
		currency: stock.currency_name.toUpperCase(),
		description: stock.description,
		country: stock.locale.toUpperCase(),
		exchange: stock.primary_exchange,
		marketCap: stock.market_cap,
		name: stock.name,
		sector: stock.sic_description,
		symbol: stock.ticker,
		type: stock.type,
	};
}) satisfies PageLoad;
