<script lang="ts">
	let { bg, children }: { bg?: string; children: any } = $props();
</script>

<div class="{bg} rounded-lg p-6 shadow-md">
	{@render children()}
</div>
