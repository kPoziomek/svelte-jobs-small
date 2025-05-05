<script lang="ts">
	export let data;
	import { MapPin } from '@lucide/svelte';
	import { invalidateAll } from '$app/navigation';
	import { Jumper } from 'svelte-loading-spinners';
	import { Circle } from 'lucide-svelte';
	import BackButton from '$lib/components/BackButton.svelte';

	const deleteJob = async () => {
		const response = await fetch(`/api/jobs/${data.job.id}`, {
			method: 'DELETE'
		});

		if (response.ok) {
			alert('Job deleted successfully');
			window.location.href = '/jobs';
		} else {
			alert('Failed to delete job');
		}
		invalidateAll();
	};
</script>

<BackButton />
<section class="bg-green-50">
	<div class="container m-auto px-6 py-10">
		<div class="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
			<main>
				<div class="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
					<div class="mb-4 text-gray-500">{data.job.type}</div>
					<h1 class="mb-4 text-3xl font-bold">{data.job.title}</h1>
					<div class="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
						<MapPin class="mr-2 text-xl text-orange-700"></MapPin>
						<p class="text-orange-700">{data.job.location}</p>
					</div>
				</div>

				<div class="mt-6 rounded-lg bg-white p-6 shadow-md">
					<h3 class="mb-6 text-lg font-bold text-green-800">Job Description</h3>

					<p class="mb-4">
						{data.job.description}
					</p>

					<h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

					<p class="mb-4">{data.job.salary}/ Year</p>
				</div>
			</main>

			<!-- Sidebar -->
			<aside>
				<!-- Company Info -->
				<div class="rounded-lg bg-white p-6 shadow-md">
					<h3 class="mb-6 text-xl font-bold">Company Info</h3>

					<h2 class="text-2xl">{data.job.company.name}</h2>

					<p class="my-2">
						{data.job.company.description}
					</p>

					<hr class="my-4" />

					<h3 class="text-xl">Contact Email:</h3>

					<p class="my-2 bg-green-100 p-2 font-bold">
						{data.job.company.contactEmail}
					</p>

					<h3 class="text-xl">Contact Phone:</h3>

					<p class="my-2 bg-green-100 p-2 font-bold">{data.job.company.contactPhone}</p>
				</div>

				<!-- Manage -->
				<div class="mt-6 rounded-lg bg-white p-6 shadow-md">
					<h3 class="mb-6 text-xl font-bold">Manage Job</h3>
					<a
						href="/jobs/{data.job.id}/edit/"
						class="focus:shadow-outline mt-4 block w-full rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-600 focus:outline-none"
						>Edit Job</a
					>
					<button
						onclick={deleteJob}
						class="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
					>
						Delete Job
					</button>
				</div>
			</aside>
		</div>
	</div>
</section>
<div class="py-6 text-center text-gray-500">
	<Circle />
</div>
