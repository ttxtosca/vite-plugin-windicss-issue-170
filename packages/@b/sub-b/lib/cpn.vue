<template>
	<!-- Changing any attribute from template or script -->
	<!-- won't apply at all (except a reboot of dev server) -->
	<div class="cpn text-blue-500">
		Lamda text
	</div>
</template>

<style>
.cpn {
	/*
		Changing any attribute cause a delay
		(visible in hmr after each change + 1)
	*/
	/* @apply text-blue-500; */
	@apply text-3xl text-center my-5;
}
</style>
