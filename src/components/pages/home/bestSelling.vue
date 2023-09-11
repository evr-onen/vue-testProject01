<template>
	<div class="bestSelling wrapper">
		<div class="header flex flex-col items-center">
			<p class="font-condensed uppercase text-center text-sm font-normal tracking-wide">shop</p>
			<p class="uppercase font-cinzel text-5xl mt-2 text-center">best selling</p>
			<div class="w-12 border-b border-black mt-4"></div>
		</div>
		<div class="products wrapper mt-10 grid md:grid-cols-4 grid-cols-2 gap-4">
			<div class="" v-for="(product, index) in products" :key="index">
				<ProductCardUI :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup>
import ProductCardUI from "../../ui/ProductCard/ProductCardUI.vue";
import { ref } from "vue";

// ** I actually need to fetch the ids according to the data coming from the table on sell quantity. This is what I do to save time.
const trendProducts = [1, 2, 4, 6];

const props = defineProps(["products"]);
let products = ref(props.products);
products.value = products.value.filter((product) => trendProducts.indexOf(product.id) !== -1);
</script>

<style></style>
