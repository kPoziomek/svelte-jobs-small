<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';
	import JobListing from '$lib/components/JobListing.svelte';
	import { onMount } from 'svelte';

	let limit = 6;
	let showMore = false;

	const state = {
		jobs: []
	};

	onMount(async () => {
		const response = await fetch('/api/jobs');
		if (response.ok) {
			state.jobs = await response.json();
			if (state.jobs.length > limit) {
				showMore = true;
			}
		}
	});
</script>

<section class="bg-blue-50 px-4 py-10">
	<div class="container-xl m-auto lg:container">
		<h2 class="mb-6 text-center text-3xl font-bold text-green-500">Browse jobs</h2>
		{#if state.jobs.length === 0}
			<div class="py-6 text-center text-gray-500">
				<Circle />
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each state.jobs.slice(0, limit || state.jobs.length) as job}
					<JobListing {job} />
				{/each}
			</div>
		{/if}
	</div>
</section>
{#if showMore}
	<section class="m-auto my-10 max-w-lg px-6">
		<a
			href="/jobs"
			class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
			>View All Jobs</a
		>
	</section>
{/if}
