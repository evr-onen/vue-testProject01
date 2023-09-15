<template>
	<div class="homePage page">
		<div class="">
			<TopImage />
		</div>
	</div>
	<div class="w-full max-w-[81.25rem] brandSlider px-4"><sliderHome :images="images" /></div>

	<div class="trends mt-20 px-4">
		<TrendsProduct :products="productItems" />
	</div>
	<div class="best mt-20 px-4">
		<BestSelling :products="productItems" />
	</div>
	<div class="chooseUs mt-20 px-4">
		<ChooseUs />
	</div>
</template>

<script setup>
import { ref } from "vue";
import { sliderBrands } from "../constant/sliderBrands";
import { products } from "@/constant/products";
import TopImage from "../components/pages/home/topImage.vue";
import sliderHome from "../components/pages/home/sliderHome.vue";
import TrendsProduct from "../components/pages/home/trendsProduct.vue";
import BestSelling from "../components/pages/home/bestSelling.vue";
import ChooseUs from "../components/pages/home/chooseUs.vue";

const productItems = ref(products);

const images = ref(sliderBrands);
</script>

<style scoped></style>
