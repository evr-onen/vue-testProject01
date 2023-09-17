<template>
	<div class="flex w-fit">
		<div
			class="minus noselect cursor-pointer duration-500 bg-gray-200 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="$emit('update:value', value != 1 ? value - 1 : value)"
		>
			-
		</div>
		<input
			class="flex w-16 border-y border-black text-center font-semibold"
			type="number"
			:value="value"
			@input="(e) => $emit('update:value', e.target.value > 0 ? Number(e.target.value) : 1)"
		/>
		<div
			class="plus noselect cursor-pointer duration-500 bg-gray-200 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="$emit('update:value', value + 1)"
		>
			+
		</div>
	</div>
</template>

<script setup>
const { value } = defineProps(["value"]);
defineEmits(["update:value"]);

// const changeValueHandler = (numberItem, isEqual = false) => {
// 	if (isEqual) {
// 		emit("update:value", numberItem);
// 	} else {
// 		emit("update:value", value + numberItem);
// 	}
// };
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
