	import { error } from '@sveltejs/kit';
	export const load = async ({
		params,
		fetch
	}: {
		params: { id: string };
		fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
	}) => {
		console.log('log:', params);
		const response = await fetch(`/api/jobs/${params.id}`);

		if (!response.ok) {
			throw error(404, 'Job not found');
		}

		const job = await response.json();

		return {
			job
		};
	};