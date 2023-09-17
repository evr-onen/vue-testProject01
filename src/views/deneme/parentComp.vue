<template>
	<div class="page-wrapper page w-full flex justify-center mt-12">
		<CartItem v-for="(product, index) in ttt" :key="index" :product="product" />
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import CartItem from "./childComp.vue";

// ** hooks
const { cartProducts } = storeToRefs(useCartStore());

const ttt = computed(() => {
	return cartProducts.value;
});

// ** refs
</script>

<style></style>
