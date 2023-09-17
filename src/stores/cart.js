import {} from "vue";
import { defineStore } from "pinia";
import { VueCookieNext } from "vue-cookie-next";

export const useCartStore = defineStore({
	id: "cart",
	state: () => ({
		cartProducts: VueCookieNext.isCookieAvailable("cart") ? JSON.parse(VueCookieNext.getCookie("cart")) : [],
	}),
	actions: {
		// since we rely on `this`, we cannot use an arrow function
		deleteCartItem(index) {
			this.cartProducts = this.cartProducts.filter((_, i) => i !== index);
		},
	},
});
