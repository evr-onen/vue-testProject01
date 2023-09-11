<template>
	<div class="item item-wrapper w-full flex flex-col items-center p-4">
		<div class="svg-wrapper"><slot class="w-12 h-12" /></div>
		<p class="title text-center text-2xl font-normal font-cinzel"><slot name="title" /></p>
		<p class="text opacity-50"><slot name="text" /></p>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
