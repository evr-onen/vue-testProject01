<template>
	<div class="page-wrapper page w-full flex justify-center mt-12">
		<div class="w-full max-w-[81.25rem] flex flex-col justify-center px-4">
			<h1 class="font-cinzel text-3xl uppercase md:text-left w-full">Cart</h1>
			<div class="cartTable-wrapper grid grid-cols-3 gap-4 w-full mt-12">
				<div class="cartTable col-span-2 flex flex-col">
					<div class="titles bg-rose-50 py-4 border border-rose-200 grid grid-cols-10">
						<div class="col-span-2"></div>
						<div class="col-span-2"><p>Product</p></div>
						<div class="col-span-2"><p>Price</p></div>
						<div class="col-span-2"><p>Quantity</p></div>
						<div class="col-span-1"><p>Subtotal</p></div>
						<div class="col-span-1"></div>
					</div>
					<CartItem v-for="(product, index) in cartProducts" :key="index" :product="product" />
				</div>
				<div class="cartTable col-span-1 border border-rose-200">
					<div class="title h-auto bg-rose-50">
						<p
							class="cartTotals uppercase font-cinzel text-xl font-medium border-b border-rose-200 p-3 tracking-widest"
						>
							cart totals
						</p>
					</div>
					<div class="p-4 flex flex-col bg-white">
						<div class="flex border-b border-rose-100 pt-6 pb-4 px-4">
							<p class="flex-[3] capitalize font-condensed">subtotal</p>
							<p class="flex-[5]">: {{ productSubTotal }} tl</p>
						</div>
						<div class="flex border-b border-rose-100 pt-6 pb-4 px-4">
							<p class="flex-[3] capitalize font-condensed">total</p>
							<p class="flex-[5]">: 12312323 tl</p>
						</div>
						<div class=""></div>
					</div>
					<div class="btn p-6">
						<button
							class="uppercase border border-black w-full py-4 tracking-widest duration-500 hover:bg-black hover:text-white"
						>
							proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import CartItem from "@/components/pages/cart/CartItem.vue";

// ** hooks
const { cartProducts } = storeToRefs(useCartStore());

// ** refs
const productSubTotal = ref(0);

const getSubtotal = (allSubtotal) => {
	productSubTotal.value += allSubtotal;
};

console.log(productSubTotal.value);
</script>

<style></style>
