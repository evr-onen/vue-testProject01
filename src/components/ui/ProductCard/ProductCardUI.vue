<template>
	<div class="productCard wrapper group/image">
		<div class="card">
			<div class="imageWrapper w-full max-w-[19.375rem] max-h-[24.21875rem] h-full relative">
				<div class="group-hover/image:opacity-0 group-hover/image:invisible duration-300 relative z-10">
					<img class="w-full h-auto" :src="product.images[0]" alt="" />
				</div>
				<div
					class="group-hover/image:opacity-100 group-hover/image:visible group-hover/image:z-20 duration-300 absolute left-0 top-0 right-0 bottom-0"
				>
					<img class="w-full h-auto object-cover" :src="product.images[1]" alt="" />
				</div>
				<div class="group/item">
					<div
						class="opacity-0 invisible group-hover/image:opacity-100 group-hover/image:visible absolute group-hover/image:z-30 right-4 top-4 w-8 h-8 shadow-lg bg-white rounded-full flex cursor-pointer"
					>
						<svg
							class="m-auto"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.7499 13C8.7499 12.5858 8.41412 12.25 7.9999 12.25C7.58569 12.25 7.2499 12.5858 7.2499 13V17C7.2499 17.4142 7.58569 17.75 7.9999 17.75C8.41412 17.75 8.7499 17.4142 8.7499 17V13Z"
								fill="#1C274C"
							/>
							<path
								d="M15.9999 12.25C16.4141 12.25 16.7499 12.5858 16.7499 13V17C16.7499 17.4142 16.4141 17.75 15.9999 17.75C15.5857 17.75 15.2499 17.4142 15.2499 17V13C15.2499 12.5858 15.5857 12.25 15.9999 12.25Z"
								fill="#1C274C"
							/>
							<path
								d="M12.7499 13C12.7499 12.5858 12.4141 12.25 11.9999 12.25C11.5857 12.25 11.2499 12.5858 11.2499 13V17C11.2499 17.4142 11.5857 17.75 11.9999 17.75C12.4141 17.75 12.7499 17.4142 12.7499 17V13Z"
								fill="#1C274C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M17.2737 3.47298C16.7981 3.28712 16.2654 3.25574 15.5819 3.25077C15.3012 2.65912 14.6983 2.25 13.9999 2.25H9.9999C9.3015 2.25 8.69865 2.65912 8.41794 3.25077C7.7344 3.25574 7.20166 3.28712 6.72611 3.47298C6.15792 3.69505 5.66371 4.07255 5.29999 4.5623C4.93306 5.05639 4.76082 5.68968 4.52374 6.56133L3.89587 8.86426C3.50837 9.06269 3.16928 9.32992 2.88642 9.6922C2.26442 10.4888 2.15427 11.4377 2.26492 12.5261C2.37229 13.5822 2.70479 14.9121 3.121 16.5769L3.1474 16.6825C3.41058 17.7353 3.62426 18.5901 3.8784 19.2572C4.14337 19.9527 4.47977 20.5227 5.03439 20.9558C5.58901 21.3888 6.22365 21.5769 6.96266 21.6653C7.67148 21.75 8.55256 21.75 9.63774 21.75H14.362C15.4472 21.75 16.3282 21.75 17.0371 21.6653C17.7761 21.5769 18.4107 21.3888 18.9653 20.9558C19.5199 20.5227 19.8563 19.9527 20.1213 19.2572C20.3755 18.5901 20.5891 17.7353 20.8523 16.6825L20.8787 16.577C21.2949 14.9122 21.6274 13.5822 21.7348 12.5261C21.8454 11.4377 21.7353 10.4888 21.1133 9.6922C20.8305 9.32995 20.4914 9.06274 20.104 8.86431L19.4761 6.56133C19.239 5.68968 19.0667 5.05639 18.6998 4.5623C18.3361 4.07255 17.8419 3.69505 17.2737 3.47298ZM7.27214 4.87007C7.49194 4.78416 7.75752 4.75888 8.41935 4.75219C8.70067 5.34225 9.30267 5.75 9.9999 5.75H13.9999C14.6971 5.75 15.2991 5.34225 15.5805 4.75219C16.2423 4.75888 16.5079 4.78416 16.7277 4.87007C17.0336 4.98964 17.2997 5.19291 17.4956 5.45663C17.6717 5.69377 17.775 6.02508 18.0659 7.09194L18.4195 8.3887C17.3817 8.24996 16.0419 8.24998 14.3773 8.25H9.62246C7.95788 8.24998 6.61809 8.24996 5.5803 8.38868L5.93388 7.09195C6.22478 6.02508 6.32812 5.69376 6.50423 5.45662C6.70008 5.19291 6.96619 4.98964 7.27214 4.87007ZM9.9999 3.75C9.86183 3.75 9.7499 3.86193 9.7499 4C9.7499 4.13807 9.86183 4.25 9.9999 4.25H13.9999C14.138 4.25 14.2499 4.13807 14.2499 4C14.2499 3.86193 14.138 3.75 13.9999 3.75H9.9999ZM4.06873 10.6153C4.34756 10.2582 4.78854 10.0183 5.69971 9.88649C6.63034 9.75187 7.89217 9.75 9.68452 9.75H14.3152C16.1075 9.75 17.3694 9.75187 18.3 9.88649C19.2112 10.0183 19.6522 10.2582 19.931 10.6153C20.2098 10.9725 20.3356 11.4584 20.2425 12.3744C20.1474 13.3099 19.8432 14.5345 19.4084 16.2733C19.1312 17.3824 18.9381 18.1496 18.7196 18.7231C18.5083 19.2778 18.3014 19.5711 18.0422 19.7735C17.783 19.9758 17.4483 20.1054 16.859 20.1759C16.2496 20.2488 15.4584 20.25 14.3152 20.25H9.68452C8.54133 20.25 7.75015 20.2488 7.14076 20.1759C6.5514 20.1054 6.21667 19.9758 5.95751 19.7735C5.69835 19.5711 5.49144 19.2778 5.28013 18.7231C5.06163 18.1496 4.86853 17.3824 4.59127 16.2733C4.15656 14.5345 3.85233 13.3099 3.75723 12.3744C3.66411 11.4584 3.78989 10.9725 4.06873 10.6153Z"
								fill="#1C274C"
							/>
						</svg>
					</div>
					<div
						class="group-hover/item:w-[100%] group-hover/item:p-2 h-0 group-hover/item:h-full w-full absolute top-0 left-0 right-0 z-20 duration-300 p-2"
					>
						<div
							class="bg-black/40 overflow-hidden w-full h-full group-hover/item:p-2 p-0 duration-300 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible flex flex-col items-center justify-between"
						>
							<VariantList :variantData="product.variant" v-model:selectedVariant="selectedVar" size="small" />
							<div class="mt-8 flex flex-col items-center justify-end h-fit">
								<button
									class="uppercase px-4 border-2 border-black hover:bg-black hover:text-white duration-300 w-32 font-semibold mt-4"
									@click="addCartHandler"
									:disabled="isVariantSelected()"
								>
									add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					class="opacity-0 invisible group-hover/image:opacity-100 group-hover/image:visible absolute group-hover/image:z-30 right-4 top-16 w-8 h-8 shadow-lg bg-white rounded-full flex cursor-pointer"
					@click="isOpenQuickProduct = true"
				>
					<svg class="m-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
							fill="#1C274C"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
							fill="#1C274C"
						/>
					</svg>
				</div>
			</div>
			<div class="texts flex flex-col items-center py-3">
				<div class="name uppercase font-cinzel w-2/3 text-center">
					<router-link
						class="lg:text-[1.625rem] md:text-lg text-[1.625rem] tracking-[0.5px]"
						:to="'products/' + makeSlug(product.name)"
						>{{ product.name }}</router-link
					>
					<p class=""></p>
				</div>
				<div class="price pt-2">
					<p class="opacity-70 font-roboto">{{ finalPrice(product) }} ₺</p>
				</div>
			</div>
		</div>
	</div>
	<ModalOne class="" v-model:isOpen="isOpenQuickProduct" isPadding="false">
		<QuickProductContent :productData="product" />
	</ModalOne>
</template>

<script setup>
// ** Core
import { ref } from "vue";

// ** Cookie
import { VueCookieNext } from "vue-cookie-next";

// ** Components
import ModalOne from "@/components/ui/Modal/ModalOne.vue";
import VariantList from "../VariantList/VariantList.vue";
import QuickProductContent from "@/components/content/QuickProductContent.vue";

// ** Utils
import finalPrice from "@/utils/finalPrice";
import makeSlug from "@/utils/makeSlug";

// ** Store
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

// ** Props
const { product } = defineProps(["product"]);

// ** Store
const { cartProducts } = storeToRefs(useCartStore());

// ** refs
const isOpenQuickProduct = ref(false);
const selectedVar = ref({});
const quantity = ref(1);
const variantQuantity = ref(null);
const variant = ref(null);
const price = ref(product.price);

// ** Vars
let cartCookie = [];

const addCartHandler = () => {
	let cartProduct = {
		productId: product.id,
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
	if (!product.variant.length) return false;

	let selectedVarKeys = Object.keys(selectedVar.value);
	let tmpVariants = product.variant;
	tmpVariants = tmpVariants.filter((variantProduct) => {
		return selectedVarKeys.every((key) => {
			return variantProduct.variant_type[key] === selectedVar.value[key];
		});
	});

	if (tmpVariants.length === 1) {
		if (Object.keys(tmpVariants[0].variant_type).length === selectedVarKeys.length) {
			variantQuantity.value = tmpVariants[0].quantity;
			variant.value = tmpVariants[0];
			price.value = finalPrice(product, variant.value) || product.price;
			console.log("false");
			return false;
		}
	}
	variantQuantity.value = product.quantity;

	return true;
};
</script>

<style scoped>
button:disabled {
	@apply !border-gray-600/40 hover:!bg-transparent hover:!text-black/40 text-black/40 cursor-default;
}
</style>
