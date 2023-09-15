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
				<div class="mt-8 flex">
					<NumberInput class="" v-model:value="quantity" />
					<button class="uppercase px-4 border border-gray-600 hover:bg-black hover:text-white duration-300 ml-12 w-32">
						add to cart
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { categories } from "@/constant/products";
import NumberInput from "@/components/elements/numberElement/NumberInput.vue";
const props = defineProps(["productData"]);
const cats = ref(categories);
const quantity = ref(1);

const getFullCategory = () => {
	let tmpCat = cats.value.find((cat) => cat.id === props.productData.categories[1]);
	let tmpParentCat = cats.value.find((cat) => cat.id === tmpCat.parent_category);

	return `${tmpParentCat.name}, ${tmpCat.name}`;
};

const modules = [Pagination, Navigation];

const finalPrice = (x) => {
	let tmpPrice = x;
	if (props.productData.discount.flat !== 0) {
		tmpPrice -= props.productData.discount.flat;
	}
	if (props.productData.discount.percent !== 0) {
		tmpPrice = tmpPrice * (1 - `0.${props.productData.discount.percent}`);
	}

	return numberWithDots(tmpPrice);
};

const numberWithDots = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>

<style scoped></style>
