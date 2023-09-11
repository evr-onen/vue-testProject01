<template>
	<div class="footer bg-slate-200 w-full flex flex-col items-center px-4 justify-between mt-20">
		<div class="max-w-[81.25rem] min-h-[20rem] w-full flex flex-col sm:flex-row items-center sm:items-start mt-16">
			<div class="flex-1 logo h-full font-cinzel flex mb-16 sm:mb-0">
				<p class="m-auto text-4xl text-center sm:text-left">LOGO</p>
			</div>
			<div class="flex-1 pageLinks mb-16 sm:mb-0">
				<p class="mb-4 text-center sm:text-left">Site Pages</p>
				<ul class="sm:text-left text-center">
					<li
						v-for="(link, index) in footerPageLinks"
						:key="index"
						class="font-roboto font-light hover:text-red-500 duration-300"
					>
						<router-link class="uppercase font-roboto font-light text-sm" :to="link.href">{{
							link?.label
						}}</router-link>
					</li>
				</ul>
			</div>
			<div class="flex-1 catLinks mb-16 sm:mb-0">
				<p class="mb-4 text-center sm:text-left">Categories</p>
				<ul class="sm:text-left text-center">
					<li v-for="(link, index) in footerCategoryLinks" :key="index">
						<router-link class="uppercase font-roboto font-light text-sm" :to="link.href">{{
							link?.label
						}}</router-link>
					</li>
				</ul>
			</div>
			<div class="flex-1 address mb-16 sm:mb-0">
				<p class="mb-4 text-center sm:text-left">Address</p>
				<ul class="sm:text-left text-center">
					<li class="uppercase font-roboto font-light text-sm">Ataturk Cad. 123 Sk. no:0</li>
					<li class="uppercase font-roboto font-light text-sm">Turkiye</li>
					<li class="uppercase font-roboto font-light text-sm">email@email.com</li>
					<li class="uppercase font-roboto font-light text-sm">123 123 1212</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-wrap border-t-gray-300 border w-full justify-center px-4">
			<div class="max-w-[81.25rem] w-full font-roboto font-light">
				<p class="py-8">Copyright © 2023 Blingg Jewelry | Powered by Blingg Jewelry</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { footerPageLinks, footerCategoryLinks } from "../constant/footer";
</script>

<style scoped>
.pageLinks > ul li + li {
	margin-top: 0.5rem;
}
.catLinks > ul li + li {
	margin-top: 0.5rem;
}
.address > ul li + li {
	margin-top: 0.5rem;
}
</style>
