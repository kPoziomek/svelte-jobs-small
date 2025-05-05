<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<section class="py-4">
	<div class="container-xl m-auto lg:container">
		<div class="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
			<Card>
				<h2 class="text-2xl font-bold">For Developers</h2>
				<p class="mt-2 mb-4">Browse our Svelte jobs and start your career today</p>
				<a
					href="/jobs"
					class="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
				>
					Browse Jobs
				</a>
			</Card>
			<Card bg="bg-orange-100">
				<h2 class="text-2xl font-bold">For Employers</h2>
				<p class="mt-2 mb-4">List your job to find the perfect developer for the role</p>
				<a
					href="/addJob"
					class="inline-block rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
				>
					Add Job
				</a>
			</Card>
		</div>
	</div>
</section>
