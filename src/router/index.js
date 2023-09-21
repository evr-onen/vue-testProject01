import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: () => import("@/views/content/PageLayout.vue"),
			children: [],
		},
		{
			path: "/:cat",
			component: () => import("@/views/content/category/PageLayout.vue"),
		},

		{
			path: "/products",
			children: [
				{
					path: ":product",
					name: "Archive",
					component: () => import("@/views/content/products/singleProduct/PageLayout.vue"),
				},
			],
		},
		{
			path: "/cart",
			name: "CartPage",
			component: () => import("@/views/content/cart/PageLayout.vue"),
			children: [],
		},
		{
			path: "/deneme",
			name: "DenemePage",
			component: () => import("@/views/deneme/parentComp.vue"),
			children: [],
		},

		{
			path: "/dashboard",
			children: [
				{
					path: "welcome",
					name: "WelcomePage",
					component: () => import("@/views/dashboard/WelcomePage.vue"),
				},
				{
					path: "elements",
					children: [
						{
							path: "checkboxelements",
							name: "CheckboxElements",
							component: () => import("@/views/dashboard/elements/CheckboxElements.vue"),
						},
						{
							path: "textfieldelements",
							name: "TextFieldElements",
							component: () => import("@/views/dashboard/elements/TextFieldElements.vue"),
						},
						{
							path: "radiobuttonelements",
							name: "RadiobuttonElements",
							component: () => import("@/views/dashboard/elements/RadiobuttonElements.vue"),
						},
					],
				},
				{
					path: "ui",
					children: [
						{
							path: "modalui",
							name: "ModalUI",
							component: () => import("@/views/dashboard/ui/ModalUI.vue"),
						},
						{
							path: "breadcrumbui",
							name: "BreadCrumbUI",
							component: () => import("@/views/dashboard/ui/BreadCrumbUI.vue"),
						},
						{
							path: "cardui",
							name: "CardUI",
							component: () => import("@/views/dashboard/ui/CardUI.vue"),
						},
						{
							path: "buttonui",
							name: "ButtonUI",
							component: () => import("@/views/dashboard/ui/ButtonUI.vue"),
						},
					],
				},
				{
					path: "sectiontemplates",
					children: [
						{
							path: "footertemplates",
							name: "FooterTemplates",
							component: () => import("@/views/dashboard/sectiontemplates/FooterTemplates.vue"),
						},
						{
							path: "headertemplates",
							name: "HeaderTemplates",
							component: () => import("@/views/dashboard/sectiontemplates/HeaderTemplates.vue"),
						},
						{
							path: "herotemplates",
							name: "HeroSectionTemplates",
							component: () => import("@/views/dashboard/sectiontemplates/HeroSectionTemplates.vue"),
						},
						{
							path: "testimonialtemplates",
							name: "TestimonialTemplates",
							component: () => import("@/views/dashboard/sectiontemplates/TestimonialTemplates.vue"),
						},
					],
				},
				{
					path: "pagetemplates",
					children: [
						{
							path: "cart",
							name: "Cart",
							component: () => import("@/views/dashboard/pagetemplates/CartTemplates.vue"),
						},
					],
				},
			],
		},
	],
});

export default router;
