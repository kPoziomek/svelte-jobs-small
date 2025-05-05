<script lang="ts">
	import { MapPin } from '@lucide/svelte';
	let { job } = $props();

	let showFullDescription = $state(false);

	const toggleFullDescription = () => {
		showFullDescription = !showFullDescription;
	};

	let truncatedDescription = $derived(
		!showFullDescription && job.description.length > 100
			? job.description.substring(0, 100) + '...'
			: job.description
	);
</script>

<div class="relative rounded-xl bg-white shadow-md">
	<div class="p-4">
		<div class="mb-6">
			<div class="my-2 text-gray-600">{job.type}</div>
			<h3 class="text-xl font-bold">{job.title}</h3>
		</div>

		<div class="mb-5">
			<div>{truncatedDescription}</div>
			<button
				class="mt-2 text-sm text-green-500 hover:text-green-600"
				onclick={toggleFullDescription}
			>
				{showFullDescription ? 'Show Less' : 'Show More'}
			</button>
		</div>

		<h3 class="mb-2 text-orange-500">{job.salary} / Year</h3>

		<div class="mb-5 border border-gray-100"></div>

		<div class="mb-4 flex flex-col justify-between lg:flex-row">
			<div class="mb-3 text-green-700">
				<MapPin class="text-lg"></MapPin>
				{job.location}
			</div>
			<a
				href="/jobs/{job.id}"
				class="h-[36px] rounded-lg bg-orange-500 px-4 py-2 text-center text-sm text-white hover:bg-orange-600"
			>
				Read More
			</a>
		</div>
	</div>
</div>
