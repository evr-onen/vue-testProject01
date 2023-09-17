<template>
	<div class="variantList wrapper w-full">
		<div v-for="(variantName, index) in variantNames" :key="index" class="w-full mt-4">
			<p class="font-condensed text-lg font-semibold uppercase">{{ variantName }}</p>
			<div class="flex w-full flex-wrap">
				<button
					v-for="(valueName, index) in allVariantValues(variantName)"
					:key="index"
					class="mr-2 px-2 py-1 flex justify-center items-center m-1 w-32 border border-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer uppercase font-semibold"
					:class="{ selected: selectedValues[variantName] === valueName }"
					@click="() => variantValueClickHandler(valueName, variantName)"
					:disabled="disableHandler(variantName, valueName)"
				>
					{{ valueName }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const { variantData } = defineProps(["variantData"]);
const emits = defineEmits(["update:selectedVariant"]);

// $emit('update:isOpen', false)"

// ** refs
const variants = ref(variantData);
const variantNames = ref();
const selectedValues = ref({});

if (variants.value.length) {
	variantNames.value = Object.keys(variants.value[0]?.variant_type);
}

const allVariantValues = (variantName) => {
	let tmpValues = [];
	variants.value.map((variant) => {
		if (variant?.variant_type[variantName]) {
			if (tmpValues.indexOf(variant?.variant_type[variantName]) === -1) {
				tmpValues.push(variant?.variant_type[variantName]);
			}
		}
	});
	return tmpValues;
};

const variantValueClickHandler = (valueName, variantName) => {
	if (selectedValues.value[variantName] === valueName) {
		delete selectedValues.value[variantName];
	} else {
		selectedValues.value[variantName] = valueName;
	}
	emits("update:selectedVariant", selectedValues.value);
};

const disableHandler = (variantType, variantValueName) => {
	if (Object.keys(selectedValues.value).length) {
		let tmpVariantProducts = variants.value.filter((variantProduct) => {
			return Object.keys(selectedValues.value).every((selectedKey) => {
				return variantProduct?.variant_type[selectedKey] === selectedValues.value[selectedKey];
			});
		});

		return !tmpVariantProducts.some((variantProduct) => variantProduct?.variant_type[variantType] === variantValueName);
	} else {
		return false;
	}
};
</script>

<style scoped>
.selected {
	@apply bg-black text-white;
}

button:disabled {
	@apply !border-gray-600/40 hover:!bg-white/40 hover:!text-black/40 text-black/40 cursor-default;
}
</style>
