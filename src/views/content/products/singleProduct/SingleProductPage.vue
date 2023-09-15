<template>
	<div class="page-wrapper page w-full flex justify-center">
		<div class="w-full max-w-[81.25rem] flex justify-center px-4 min-h-screen">
			<div class="sliderSection flex-1 w-full bg-slate-100"></div>
			<div class="textSection flex-1 w-full bg-slate-50 p-4">
				<h1 class="font-cinzel text-4xl">{{ product.name }}</h1>
				<h3 class="font-condensed uppercase text-sm font-semibold text-red-700 tracking-[2px] mt-2">
					{{ categories.find((cat) => cat.id === product.categories[0]).name }} -
					{{ categories.find((cat) => cat.id === product.categories[1]).name }}
				</h3>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { products, categories } from "@/constant/products.js";
const { params } = useRoute();

const title = ref(params.product.replaceAll("-", " "));
const product = ref(products.find((productItem) => productItem.name === title.value));
</script>

<style></style>
