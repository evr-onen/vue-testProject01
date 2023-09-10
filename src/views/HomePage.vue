<template>
	<div class="homePage page">
		<div class="">
			<TopImage />
		</div>
	</div>
	<div class="w-full max-w-[81.25rem] brandSlider px-4"><sliderHome :images="images" /></div>

	<div class="trends mt-20 mb-40 px-4">
		<TrendsProduct :products="productItems" />
	</div>
</template>

<script setup>
import { ref } from "vue";
import { sliderBrands } from "../constant/sliderBrands";
import { products } from "@/constant/products";
import TopImage from "../components/pages/home/topImage.vue";
import sliderHome from "../components/pages/home/sliderHome.vue";
import TrendsProduct from "../components/pages/home/trendsProduct.vue";

const productItems = ref(products);

const images = ref(sliderBrands);
</script>

<style scoped></style>
