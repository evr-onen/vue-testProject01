<template>
	<div class="w-full max-w-[81.25rem] flex flex-col items-center px-4">
		<div class="sideNav sm:hidden cursor-pointer" v-if="filterkeys.length">
			<button @click="openNavHandler">
				<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
							fill="#1C274C"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
							fill="#1C274C"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
							fill="#1C274C"
						></path>
					</g>
				</svg>
			</button>
		</div>
		<div v-if="filterkeys.length">
			<div
				class="nav flex flex-col items-center justify-center bg-black text-white duration-700 p-0 overflow-y-auto h-screen"
				:class="{
					openNav: isNavOpen,
				}"
			>
				<div class="flex justify-end w-full fixed right-4 top-4">
					<button @click="closeNavHandler">
						<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path
									d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
									fill="#fff"
								></path>
							</g>
						</svg>
					</button>
				</div>
				<div class="flex flex-col justify-center items-center mt-12 mb-12">
					<div class="">
						<FilterItem
							v-for="keyItem in filterkeys"
							class="filter-table-item w-full"
							:key="keyItem + filterItems[keyItem]"
							:keyItem="keyItem"
							:filterValues="filterItems[keyItem]"
							@getCheckedData="getCheckedData"
						/>
					</div>
				</div>
				<div class="mt-4 sm:hidden flex fixed bottom-0 bg-black w-full justify-center py-4">
					<button
						class="uppercase px-4 border border-gray-600 hover:bg-black hover:text-white duration-300 w-32"
						@click="filterResult"
					>
						submit
					</button>
				</div>
			</div>
		</div>

		<div class="hidden sm:flex w-full items-center p-4 mt-8 bg-gray-100" v-if="filterkeys.length">
			<div class="flex">
				<FilterItem
					v-for="(keyItem, index) in filterkeys"
					class="filter-table-item2"
					:class="{ 'ml-4': index }"
					:key="keyItem + filterItems[keyItem]"
					:keyItem="keyItem"
					:filterValues="filterItems[keyItem]"
					@getCheckedData="getCheckedData"
					isSideNav="true"
				/>
			</div>
		</div>
		<div class="mt-4 hidden sm:flex" v-if="filterkeys.length">
			<button
				class="uppercase px-4 border border-gray-600 hover:bg-black hover:text-white duration-300 ml-12 w-32"
				:disabled="!isFilterItemOnPress"
				@click="filterResult"
			>
				submit
			</button>
		</div>
		<div class="w-full mt-12">
			<h1 class="font-cinzel text-4xl text-center lg:text-left">{{ $route.params.cat }}</h1>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
			<div class="mx-auto lg:mx-0" v-for="product in productResults" :key="product.id">
				<ProductCardUI :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup>
// ** Core
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

// ** Constant
import { categories, products } from "@/constant/products";

// ** Components
import ProductCardUI from "@/components/ui/ProductCard/ProductCardUI.vue";
import FilterItem from "./FilterItem.vue";

// ** Hooks
const route = useRoute();

// ** Refs
const categoriesData = ref(categories);
const productResults = ref(products);
const filterkeys = ref([]);
const filterItems = ref({});
const checkedFilterValue = ref({});
const pageCat = ref(route.params.cat);
const isNavOpen = ref(false);
const isFilterItemOnPress = ref(!!Object.keys(checkedFilterValue.value).length);

// ** Vars
let tmpProducts = [];

// ** params degisince sayfa otomatik olarak render edilmiyor o yuzden yazildi.
watch(
	() => route.params.cat,
	() => {
		pageCat.value = route.params.cat;
		getProductsByCat();
		checkedFilterValue.value = {};
	}
);
// category`e gore product`lari hazirliyor
const getProductsByCat = () => {
	let tmpfilterkeys = [];
	let tmpfilterItems = {};

	const catId = categoriesData.value.find((cat) => {
		return cat.name === pageCat.value;
	}).id;

	// ** sayfa dinamik oldugundan dolayi catid ye gore productlari ayiriyorum.
	if (typeof catId === "number") {
		tmpProducts = products.filter((product) => product.categories.indexOf(catId) !== -1);
	}
	// ** category e gore ayristirilan productlarin variantlarini ayristiriyorum. filtreleme icin kullanilacak
	tmpProducts.map((product) => {
		product.variant.map((variant) => {
			Object.keys(variant.variant_type).map((key) => {
				if (tmpfilterkeys.indexOf(key) === -1) {
					tmpfilterkeys.push(key);
				}

				if (tmpfilterItems[key]?.length) {
					if (tmpfilterItems[key].indexOf(variant.variant_type[key]) === -1) {
						tmpfilterItems[key].push(variant.variant_type[key]);
					}
				} else {
					tmpfilterItems[key] = [variant.variant_type[key]];
				}
			});
		});
	});
	filterkeys.value = [...tmpfilterkeys];
	filterItems.value = { ...tmpfilterItems };
	productResults.value = [...tmpProducts];
};

// ** secilen filterlari objeye aliyor. yani {[key:string]:string[]} sekle ceviriyor
const getCheckedData = ({ title, data }) => {
	checkedFilterValue.value[title] = data;
	if (data.length === 0) delete checkedFilterValue.value[title];
	isFilterItemOnPress.value = !!Object.keys(checkedFilterValue.value).length;
};

// hazirlanan productlari filtreleme handler`i.
const filterResult = () => {
	if (Object.keys(checkedFilterValue.value).length) {
		let tmpFilteredProducts = [];
		tmpProducts.map((product) => {
			if (
				product.variant.some((variant) => {
					return Object.keys(checkedFilterValue.value).every((key) => {
						return checkedFilterValue.value[key].indexOf(variant.variant_type[key]) !== -1;
					});
				})
			) {
				tmpFilteredProducts.push(product);
			}
		});
		console.log(checkedFilterValue.value);
		console.log(tmpFilteredProducts);
		productResults.value = [...tmpFilteredProducts];
	}

	closeNavHandler();
};

const closeNavHandler = () => {
	isNavOpen.value = false;
	document.querySelector("body").style.overflowY = "auto";
};

const openNavHandler = () => {
	isNavOpen.value = true;
	document.querySelector("body").style.overflowY = "hidden";
	console.log(isNavOpen.value);
};

getProductsByCat();
</script>

<style>
/* .filter-table-item + .filter-table-item {
	margin-left: 1rem;
} */

.scroll-lock {
	height: 100%;
	overflow-y: hidden;
}

.nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 100%;
	z-index: 80;
	opacity: 0;
	visibility: hidden;
}
.openNav {
	bottom: 0;
	padding: 1rem;
	opacity: 100;
	visibility: visible;
}
button:disabled {
	@apply !border-gray-600/40 hover:!bg-white/40 hover:!text-black/40 text-black/40;
}
</style>
