import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: HomePage,
			children: [],
		},
		{
			path: "/:cat",
			component: () => import("/src/views/content/category/categoryPage.vue"),
		},

		{
			path: "/products",
			children: [
				{
					path: ":product",
					name: "SingleProductPage",
					component: () => import("/src/views/content/products/singleProduct/SingleProductPage.vue"),
				},
			],
		},

		{
			path: "/dashboard",
			children: [
				{
					path: "welcome",
					name: "WelcomePage",
					component: () => import("/src/views/dashboard/WelcomePage.vue"),
				},
				{
					path: "elements",
					children: [
						{
							path: "checkboxelements",
							name: "CheckboxElements",
							component: () => import("/src/views/dashboard/elements/CheckboxElements.vue"),
						},
						{
							path: "textfieldelements",
							name: "TextFieldElements",
							component: () => import("/src/views/dashboard/elements/TextFieldElements.vue"),
						},
						{
							path: "radiobuttonelements",
							name: "RadiobuttonElements",
							component: () => import("/src/views/dashboard/elements/RadiobuttonElements.vue"),
						},
					],
				},
				{
					path: "ui",
					children: [
						{
							path: "modalui",
							name: "ModalUI",
							component: () => import("/src/views/dashboard/ui/ModalUI.vue"),
						},
						{
							path: "breadcrumbui",
							name: "BreadCrumbUI",
							component: () => import("/src/views/dashboard/ui/BreadCrumbUI.vue"),
						},
						{
							path: "cardui",
							name: "CardUI",
							component: () => import("/src/views/dashboard/ui/CardUI.vue"),
						},
						{
							path: "buttonui",
							name: "ButtonUI",
							component: () => import("/src/views/dashboard/ui/ButtonUI.vue"),
						},
					],
				},
				{
					path: "sectiontemplates",
					children: [
						{
							path: "footertemplates",
							name: "FooterTemplates",
							component: () => import("/src/views/dashboard/sectiontemplates/FooterTemplates.vue"),
						},
						{
							path: "headertemplates",
							name: "HeaderTemplates",
							component: () => import("/src/views/dashboard/sectiontemplates/HeaderTemplates.vue"),
						},
						{
							path: "herotemplates",
							name: "HeroSectionTemplates",
							component: () => import("/src/views/dashboard/sectiontemplates/HeroSectionTemplates.vue"),
						},
						{
							path: "testimonialtemplates",
							name: "TestimonialTemplates",
							component: () => import("/src/views/dashboard/sectiontemplates/TestimonialTemplates.vue"),
						},
					],
				},
				{
					path: "pagetemplates",
					children: [
						{
							path: "cart",
							name: "Cart",
							component: () => import("/src/views/dashboard/pagetemplates/CartTemplates.vue"),
						},
					],
				},
			],
		},
	],
});

export default router;
