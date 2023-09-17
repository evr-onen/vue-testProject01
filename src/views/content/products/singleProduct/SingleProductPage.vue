<template>
	<div class="page-wrapper page w-full flex justify-center mt-12">
		<div class="w-full max-w-[81.25rem] flex justify-center px-4">
			<div class="sliderSection flex-1 w-1/2 mx-auto">
				<div class="left w-full">
					<Swiper
						:slidesPerView="1"
						:loop="true"
						:pagination="{
							clickable: true,
						}"
						:space-between="0"
						:navigation="true"
						:modules="modules"
						class=""
					>
						<SwiperSlide class="flex overflow-hidden" v-for="(image, index) in product.images" :key="index"
							><img class="object-contain !w-full !h-auto" :src="image" :alt="image"
						/></SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div class="textSection w-1/2 bg-slate-50 p-4">
				<h1 class="font-cinzel text-4xl">{{ product.name }}</h1>
				<h3 class="font-condensed uppercase text-sm font-semibold text-red-700 tracking-[2px] mt-2 ml-2">
					{{ categories.find((cat) => cat.id === product.categories[0]).name }} -
					{{ categories.find((cat) => cat.id === product.categories[1]).name }}
				</h3>
				<p class="opacity-70 font-roboto text-2xl mt-8">{{ price }} ₺</p>
				<p class="font-roboto text-md mt-8 opacity-50">{{ product.short_description }}</p>
				<div class="mt-8 flex w-full" v-if="product.variant.length">
					<VariantList :variantData="product.variant" v-model:selectedVariant="selectedVar" />
				</div>
				<div class="mt-8">
					<h4 class="font-condensed font-semibold">Stok : {{ variantQuantity }}</h4>
				</div>
				<div class="mt-8 flex">
					<NumberInput v-model:value="quantity" />
					<button
						class="uppercase px-4 border-2 border-black hover:bg-black hover:text-white duration-300 ml-12 w-32 font-semibold"
						@click="addCartHandler"
						:disabled="isVariantSelected()"
					>
						add to cart
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import finalPrice from "@/utils/finalPrice";
import { products, categories } from "@/constant/products.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { storeToRefs } from "pinia";
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";
import VariantList from "@/components/ui/VariantList/VariantList.vue";

const { params } = useRoute();
const { cartProducts } = storeToRefs(useCartStore());
const modules = [Pagination, Navigation];
const title = ref(params.product.replaceAll("-", " "));
const product = ref(products.find((productItem) => productItem.name === title.value));
const quantity = ref(1);
const selectedVar = ref({});
const variantQuantity = ref(null);
const variant = ref(null);
const price = ref(product.value.price);

// ** vars
let cartCookie = [];

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
	@apply !border-gray-600/40 hover:!bg-white/40 hover:!text-black/40 text-black/40 cursor-default;
}
</style>
