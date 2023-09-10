<script setup>
import { defineProps } from "vue";

defineProps({
	isExpand: Boolean,
	// Diğer props'lar burada tanımlanabilir
});
</script>
<template>
	<div id="dashboardHeader" class="h-[5vh] bg-cyan-100 text-cyan-950 flex shadow-bottom mb-[2vh]">
		<div class="min-w-[300px] flex">
			<p class="m-auto">Logo area</p>
		</div>
		<div class="w-[calc(100%-300px)] flex">
			<router-link to="/" class="my-auto bg-red-600 text-white px-4 py-1 rounded-md shadow-2xl hover:bg-red-600/70"
				>Home</router-link
			>
			<div
				class="ml-2 my-auto bg-red-600 text-white px-4 py-1 rounded-md shadow-2xl hover:bg-red-600/70 cursor-pointer"
				@click="$emit('update:isExpand', false)"
			>
				Change SideBar
			</div>

			<p class="m-auto">Dashboard Header</p>
		</div>
	</div>
</template>

<style scoped>
.shadow-bottom {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
</style>
