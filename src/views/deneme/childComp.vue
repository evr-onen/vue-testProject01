<template>
	<li class="p-2 border border-black cursor-pointer">
		{{ t.name }}
	</li>
</template>

<script setup>
const { t } = defineProps(["t"]);
console.log(t.name);
</script>

<style></style>
