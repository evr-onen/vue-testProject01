<template>
	<div class="cartItem w-full h-32 grid grid-cols-10 border-l border-r border-b border-rose-200">
		<div class="col-span-2 flex">
			<div class="my-auto">
				<NumberInput v-model:value="quantity" />
			</div>
		</div>
		<div class="col-span-1 flex">
			<p class="my-auto">{{ dotIndicator(price) }} ₺</p>
		</div>
	</div>
</template>
<script setup>
import { ref, watch } from "vue";
import { products } from "@/constant/products";
import dotIndicator from "@/utils/dotIndicator";
import finalPrice from "@/utils/finalPrice";
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";

const { product } = defineProps(["product"]);
const emits = defineEmits(["totalSubtotals"]);

// ** refs
const quantity = ref(product.quantity);
const price = ref(0);

// const getVariantData = () => {
// 	let variantProduct = {};
// 	let variantIndex = products[productIndex].variant.findIndex((variantItem) => {
// 		return Object.keys(variantItem.variant_type).every((key) => {
// 			return variantItem.variant_type[key] === product.variantData[key];
// 		});
// 	});
// 	variantProduct = products[productIndex].variant[variantIndex];
// 	return variantProduct;
// };
// variant.value = getVariantData();
// price.value = product.quantity * finalPrice(products[productIndex], variant.value, true);

watch(
	() => quantity.value,
	() => {
		console.log(quantity.value);
		// emits("totalSubtotals", product.quantity * finalPrice(products[productIndex], variant.value, true));
	}
);
</script>

<style></style>

<!-- <template>
	<div class="cartItem w-full h-32 grid grid-cols-10 border-l border-r border-b border-rose-200">
		<div class="col-span-2 flex">
			<div class="my-auto">
				<NumberInput v-model:value="quantity" />
			</div>
		</div>
	</div>
</template>
<script setup>
import NumberInput from "../../components/elements/numberElement/NumberInput.vue";
import { ref, watch } from "vue";

// ** refs
const quantity = ref(1);
watch(
	() => quantity.value,
	() => {
		console.log(quantity.value);
		// emits("totalSubtotals", product.quantity * finalPrice(products[productIndex], variant.value, true));
	}
);
</script>

<style></style> -->
