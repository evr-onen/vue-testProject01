<template>
	<div class="w-full flex justify-center mt-20">
		<div class="">
			<ul class="flex">
				<childComp @click="deleteItem(index)" v-for="(item, index) in ttt" :key="index" :t="item" />
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import childComp from "./childComp.vue";
import { products } from "@/constant/products";

const yyy = ref(products);

const deleteItem = (index) => {
	yyy.value = yyy.value.filter((_, ind) => ind !== index);
};
</script>

<style>
li + li {
	@apply ml-2;
}
</style>

<!-- let ttt = computed({
	get() {
		return yyy.value;
	},
	set(val) {
		console.log(ttt.value);
		yyy.value = val;
	},
});
const deleteItem = (index) => {
	
	ttt.value = yyy.value.filter((_, ind) => ind !== index);
}; -->
