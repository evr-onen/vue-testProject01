<template>
	<div class="trendsProduct wrapper">
		<div class="header flex flex-col items-center">
			<p class="font-condensed uppercase text-center text-sm font-normal tracking-wide">popular products</p>
			<p class="uppercase font-cinzel text-5xl mt-2 text-center">trending now</p>
			<div class="w-12 border-b border-black mt-4"></div>
		</div>
		<div class="products wrapper mt-10 grid md:grid-cols-4 grid-cols-2 gap-4">
			<div class="" v-for="(product, index) in trendProducts" :key="index">
				<ProductCardUI :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup>
// ** Core
import { computed } from "vue";

// ** components
import ProductCardUI from "@/components/ui/ProductCard/ProductCardUI.vue";

// ** I actually need to fetch the ids according to the data coming from the table on a time basis. This is what I do to save time.
const trendProductsIds = [1, 5, 7, 10];

const { products } = defineProps(["products"]);

const trendProducts = computed(() => {
	return products.filter((product) => trendProductsIds.indexOf(product.id) !== -1);
});
</script>

<style></style>
