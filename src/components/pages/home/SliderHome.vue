<template>
	<Swiper
		:slidesPerView="2"
		:spaceBetween="30"
		:loop="true"
		:pagination="{
			clickable: true,
		}"
		:breakpoints="{ 400: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 900: { slidesPerView: 4 } }"
		:navigation="true"
		:modules="modules"
		class=""
	>
		<SwiperSlide v-for="(image, index) in slideImages" :key="index"
			><img :src="image.href" :alt="image.alt"
		/></SwiperSlide>
	</Swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const props = defineProps(["images"]);
const slideImages = ref(props.images);
const modules = [Pagination];
</script>

<style scoped></style>
