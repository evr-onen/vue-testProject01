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
				<p class="opacity-70 font-roboto text-2xl mt-8">{{ finalPrice(product) }} ₺</p>
				<p class="font-roboto text-md mt-8 opacity-50">{{ product.short_description }}</p>
				<div class="mt-8 flex w-full">
					<VariantList :variantData="product.variant" v-model:selectedVariant="selectedVar" />
				</div>
				<div class="">
					<h4>Stok : {{ variantQuantity }}</h4>
				</div>
				<div class="mt-8 flex">
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
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import finalPrice from "@/utils/finalPrice";
import { products, categories } from "@/constant/products.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";
import VariantList from "@/components/ui/VariantList/VariantList.vue";

const { params } = useRoute();
const modules = [Pagination, Navigation];
const title = ref(params.product.replaceAll("-", " "));
const product = ref(products.find((productItem) => productItem.name === title.value));
const quantity = ref(1);
const selectedVar = ref({});
const variantQuantity = ref(null);

const addCartHandler = () => {
	let cartProduct = { product, quantity, selectedVar };
	console.log(cartProduct);
};

const isVariantSelected = () => {
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
