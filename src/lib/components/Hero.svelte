<script lang="ts">
	let {
		title = 'Become a Svelte Dev',
		subTitle = 'Find the Svelte job that fits your skills and needs'
	} = $props();
</script>

<section class="mb-4 rounded-lg bg-orange-700 py-20">
	<div class="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
				{title}
			</h1>
			<p class="my-4 text-xl text-white">
				{subTitle}
			</p>
		</div>
	</div>
</section>
