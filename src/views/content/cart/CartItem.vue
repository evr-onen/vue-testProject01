<template>
	<div
		class="cartItem w-full min-h-32 grid grid-cols-10 border-l border-r border-b border-rose-200 pb-8 md:pb-0 relative"
	>
		<div class="image-wrapper md:col-span-2 col-span-10 md:h-32 h-auto p-2 w-full flex justify-center items-center">
			<img class="h-full w-auto object-contain" :src="products[productIndex].images[0]" :alt="product.name" />
		</div>
		<div class="product-name md:col-span-2 col-span-10 py-2 flex flex-col justify-center md:items-start items-center">
			<p class="font-cinzel font-bold">{{ products[productIndex].name }}</p>
			<div class="">
				<p class="my-0.5 font-condensed text-sm font-semibold" v-for="(value, key) in product.variantData" :key="key">
					{{ key }} :
					{{ value }}
				</p>
			</div>
		</div>
		<div class="col-span-3 md:col-span-2 flex">
			<p class="my-auto mx-auto md:mx-0">{{ finalPrice(products[productIndex], variant) }} ₺</p>
		</div>
		<div class="col-span-1 md:col-span-0 md:hidden flex">
			<p class="my-auto mx-auto md:mx-0">X</p>
		</div>
		<div class="col-span-3 md:col-span-2 flex">
			<div class="my-auto mx-auto md:mx-0"><NumberInput v-model:value="quantity" /></div>
		</div>
		<div class="col-span-1 md:col-span-0 md:hidden flex">
			<div class="my-auto mx-auto md:mx-0">=</div>
		</div>
		<div class="col-span-2 md:col-span-1 flex">
			<p class="my-auto mx-auto md:mx-0">{{ dotIndicator(allPrice) }} ₺</p>
		</div>
		<div class="absolute right-4 md:top-1/2 top-[85%] -translate-y-1/2 flex justify-end items-center pr-4">
			<span
				class="group/item cursor-pointer w-8 h-8 bg-rose-50 border border-border-rose-200 hover:bg-black hover:text-white rounded-full flex justify-center items-center duration-500"
				@click="deleteProductInCart"
			>
				<svg
					class="fill-black group-hover/item:fill-white duration-500"
					width="1rem"
					height="1rem"
					viewBox="0 0 24 24"
					fill="none"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
						></path>
					</g>
				</svg>
			</span>
		</div>
	</div>
</template>
<script setup>
// ** Core
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

// ** Constant
import { products } from "@/constant/products";

// ** Utils
import dotIndicator from "@/utils/dotIndicator";
import finalPrice from "@/utils/finalPrice";

// ** Components
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";

// ** Cookie
import { VueCookieNext } from "vue-cookie-next";

// ** Store
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";

// ** Props
const { product, index } = defineProps(["product", "index"]);
const emits = defineEmits(["totalSubtotals"]);

// ** refs
const quantity = ref(product.quantity);

const productIndex = computed(() => products.findIndex((item) => item.id === product.productId));

// ** Hooks
const { deleteCartItem } = useCartStore();
const { cartProducts } = storeToRefs(useCartStore());

// ** Vars
let variantIndex = -1;

// ** Lifecycles
onMounted(() => {
	emits("totalSubtotals", quantity.value * finalPrice(products[productIndex.value], variant.value, true));
});
onUnmounted(() => {
	emits("totalSubtotals", -quantity.value * finalPrice(products[productIndex.value], variant.value, true));
});

const getVariantData = () => {
	let variantProduct = {};

	variantIndex = products[productIndex.value].variant.findIndex((variantItem) => {
		return Object.keys(variantItem.variant_type).every((key) => {
			return variantItem.variant_type[key] === product.variantData[key];
		});
	});
	variantProduct = products[productIndex.value].variant[variantIndex];
	return variantProduct;
};

const ChangeCartHandler = () => {
	let cartCookie = [];
	if (VueCookieNext.isCookieAvailable("cart")) {
		cartCookie = JSON.parse(VueCookieNext.getCookie("cart"));
	}

	cartCookie[index].quantity = quantity.value;
	VueCookieNext.setCookie("cart", JSON.stringify(cartCookie));
	cartProducts.value = cartCookie;
};

const deleteProductInCart = () => {
	let cartCookie = [];

	if (VueCookieNext.isCookieAvailable("cart")) {
		cartCookie = JSON.parse(VueCookieNext.getCookie("cart"));
	}
	cartCookie = cartCookie.filter((_, i) => {
		return i !== index;
	});

	VueCookieNext.setCookie("cart", JSON.stringify(cartCookie));
	deleteCartItem(index);
};

const variant = computed(() => getVariantData());

const allPrice = computed(() => {
	return quantity.value * finalPrice(products[productIndex.value], variant.value, true);
});

// ** subtotal degisikliklerinde toplam da degisiklik yapar
watch(allPrice, (newValue, oldValue) => {
	emits("totalSubtotals", newValue - oldValue);
	ChangeCartHandler();
});
</script>

<style></style>
