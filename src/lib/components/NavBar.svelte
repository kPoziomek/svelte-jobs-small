<script lang="ts">
	import logo from '$lib/assets/svelte426x512.png';

	import { page } from '$app/state';

	const isActiveLink = (path: string) => {
		const currentPath = page.url.pathname;
		return currentPath === path
			? 'text-white bg-orange-900 rounded-md px-3 py-2'
			: 'text-white hover:bg-orange-900 hover:text-white rounded-md px-3 py-2';
	};

	const navbarLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/jobs', label: 'Jobs' },
		{ path: '/addJob', label: 'Add Job' }
	];
</script>

<nav class="border-b border-orange-500 bg-orange-700">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
				<!-- Logo -->
				<a class="mr-4 flex flex-shrink-0 items-center" href="/">
					<img class="h-10 w-auto" src={logo} alt="Vue Jobs" />
					<span class="ml-2 hidden text-2xl font-bold text-white md:block">Svelte Jobs</span>
				</a>
				<div class="md:ml-auto">
					<div class="flex space-x-2">
						{#each navbarLinks as link}
							<a href={link.path} class={isActiveLink(link?.path)}>{link.label}</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
