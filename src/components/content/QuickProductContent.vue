<template>
	<div class="grid md:grid-cols-2 grid-cols-1 max-h-screen overflow-auto">
		<div class="left max-w-[31.25rem]">
			<Swiper
				:slidesPerView="1"
				:loop="true"
				:pagination="{
					clickable: true,
				}"
				:navigation="true"
				:modules="modules"
				class=""
			>
				<SwiperSlide class="flex" v-for="(image, index) in productData.images" :key="index"
					><img class="object-cover" :src="image" :alt="image"
				/></SwiperSlide>
			</Swiper>
		</div>
		<div class="right p-4">
			<div class="">
				<p class="opacity-70 capitalize font-roboto text-[0.9375rem] font-light">
					{{ cats.find((cat) => cat.id === productData.categories[1]).name }}
				</p>
				<p class="font-cinzel text-[2.5rem] mb-12">{{ productData.name }}</p>
				<p class="text-[1.5rem] text-red-500 font-semibold">{{ finalPrice(productData.price) }} ₺</p>
				<p class="max-w-[29rem] leading-8 opacity-60 mb-4">{{ productData.short_description }}</p>
				<hr />
				<span class="mt-6 capitalize flex"
					><p class="font-semibold opacity-70">Category :</p>
					<p>{{ getFullCategory() }}</p></span
				>
				<div class="mt-8 flex flex-col">
					<VariantList :variantData="product.variant" v-model:selectedVariant="selectedVar" size="small" />

					<div class="flex mt-4">
						<NumberInput v-model:value="quantity" />
						<button
							class="uppercase px-4 border border-gray-600 hover:bg-black hover:text-white duration-300 ml-12 w-32"
							@click="addCartHandler"
							:disabled="isVariantSelected()"
						>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// ** Core
import { ref, watch } from "vue";

// ** Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// ** Constant
import { categories } from "@/constant/products";

// ** Store
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

// ** Cookie
import { VueCookieNext } from "vue-cookie-next";

// ** Compoenents
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";
import VariantList from "@/components/ui/VariantList/VariantList.vue";

// ** Props
const { productData } = defineProps(["productData"]);

// ** Hooks
const { cartProducts } = storeToRefs(useCartStore());

// ** Refs
const cats = ref(categories);
const quantity = ref(1);
const product = ref(productData);
const selectedVar = ref({});
const variantQuantity = ref(null);
const variant = ref(null);
const price = ref(product.value.price);
// ** vars
let cartCookie = [];

watch(
	() => quantity.value,
	() => {
		console.log(quantity.value);
	}
);

const getFullCategory = () => {
	let tmpCat = cats.value.find((cat) => cat.id === productData.categories[1]);
	let tmpParentCat = cats.value.find((cat) => cat.id === tmpCat.parent_category);

	return `${tmpParentCat.name}, ${tmpCat.name}`;
};

const modules = [Pagination, Navigation];

const finalPrice = (x) => {
	let tmpPrice = x;
	if (productData.discount.flat !== 0) {
		tmpPrice -= productData.discount.flat;
	}
	if (productData.discount.percent !== 0) {
		tmpPrice = tmpPrice * (1 - `0.${productData.discount.percent}`);
	}

	return numberWithDots(tmpPrice);
};

const numberWithDots = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// ** Handlers
const addCartHandler = () => {
	let cartProduct = {
		productId: product.value.id,
		quantity: quantity.value,
		variantData: selectedVar.value,
	};

	if (VueCookieNext.isCookieAvailable("cart")) {
		cartCookie = JSON.parse(VueCookieNext.getCookie("cart"));
	}
	cartCookie.push(cartProduct);
	VueCookieNext.setCookie("cart", JSON.stringify(cartCookie));
	cartProducts.value = cartCookie;
	console.log(cartCookie);
};

const isVariantSelected = () => {
	if (!product.value.variant.length) return false;

	let selectedVarKeys = Object.keys(selectedVar.value);
	let tmpVariants = product.value.variant;
	tmpVariants = tmpVariants.filter((variantProduct) => {
		return selectedVarKeys.every((key) => {
			return variantProduct.variant_type[key] === selectedVar.value[key];
		});
	});

	if (tmpVariants.length === 1) {
		if (Object.keys(tmpVariants[0].variant_type).length === selectedVarKeys.length) {
			variantQuantity.value = tmpVariants[0].quantity;
			variant.value = tmpVariants[0];
			price.value = finalPrice(product.value, variant.value) || product.value.price;
			return false;
		}
	}
	variantQuantity.value = product.value.quantity;

	return true;
};
</script>

<style scoped>
button:disabled {
	@apply !border-gray-600/40 hover:!bg-transparent hover:!text-black/40 text-black/40 cursor-default;
}
</style>
