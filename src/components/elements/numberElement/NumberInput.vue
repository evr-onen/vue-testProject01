<template>
	<div class="flex w-fit">
		<div
			class="minus noselect cursor-pointer duration-500 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="$emit('update:value', value != 1 ? value - 1 : value)"
		>
			-
		</div>
		<input
			class="flex w-16 border-y border-gray-600 text-center"
			type="number"
			:value="value"
			@input="(e) => $emit('update:value', e.target.value > 0 ? Number(e.target.value) : 1)"
		/>
		<div
			class="plus noselect cursor-pointer duration-500 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="$emit('update:value', value + 1)"
		>
			+
		</div>
	</div>
</template>

<script setup>
defineProps(["value"]);
</script>

<style scoped>
input:focus {
	outline: none;
}
input[type="number"] {
	appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
