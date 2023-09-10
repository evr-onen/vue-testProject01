<template>
	<div class="card-1 w-[300px] contentShadow bg-cyan-100 flex flex-wrap flex-col p-4 m-4">
		<h2 class="CardHeader mb-2 capitalize" :class="headerClass">
			<slot name="header" />
		</h2>
		<div class="flex justify-center w-full text-gray-600 text-[0.82rem]" :class="contentClass">
			<slot />
		</div>
		<div class="cardActions flex justify-end" v-if="buttons" :class="actionsClass">
			<button class="buttonOne bg-danger">Cancel</button>
			<button class="buttonOne bg-succes" @click="() => (action ? action() : console.log('defaultAction'))">
				Save
			</button>
		</div>
	</div>
</template>

<script setup>
defineProps({
	buttons: {
		default: false,
	},
	action: {},
	contentClass: {
		default: "",
	},
	headerClass: {
		default: "",
	},
	actionsClass: {
		default: "",
	},
});
</script>

<style></style>
