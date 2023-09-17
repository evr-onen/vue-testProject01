<template>
	<div class="homePage page">
		<div class="">
			<TopImage />
		</div>
	</div>
	<div class="w-full max-w-[81.25rem] brandSlider px-4"><SliderHome :images="images" /></div>

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
// ** Core
import { ref } from "vue";

// ** Constants
import { sliderBrands } from "@/constant/sliderBrands";
import { products } from "@/constant/products";

// ** Components
import TopImage from "./TopImage.vue";
import SliderHome from "./SliderHome.vue";
import TrendsProduct from "./TrendsProduct.vue";
import BestSelling from "./BestSelling.vue";
import ChooseUs from "./ChooseUs.vue";

// ** Refs
const productItems = ref(products);
const images = ref(sliderBrands);
</script>

<style scoped></style>
