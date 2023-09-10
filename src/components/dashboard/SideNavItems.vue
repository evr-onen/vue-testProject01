<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { sideMenuItems } from "/src/constant/sideMenuItems.js";

const route = useRoute();

const navItems = ref(sideMenuItems);

const openTitle = (e, length) => {
	const target = e.currentTarget.nextSibling;
	target.style.height === "0px" ? (target.style.height = length * 34 + "px") : (target.style.height = 0);
};
</script>
<template>
	<div class="p-2" v-for="title in navItems" :key="title.label">
		<div
			class="item text-center bg-cyan-700 text-cyan-100 rounded-lg tracking-widest cursor-pointer py-2 flex"
			@click="($event) => openTitle($event, title.children.length)"
		>
			<span class="mx-4 my-auto homeIcon w-6 h-6" :class="title.icon"> </span>
			<p>{{ title.label }}</p>
		</div>
		<div
			class="overflow-hidden duration-300"
			:style="{
				height: route.fullPath.split('/')[2] === title.href.toLowerCase() ? title.children.length * 34 + 'px' : 0,
			}"
		>
			<router-link
				:to="item.href"
				class="flex mt-2 border border-cyan-700 rounded-lg pl-2 items-center"
				:class="{ currentItem: route.fullPath === item.href }"
				v-for="item in title.children"
				:key="item.label"
			>
				<i class="circleIcon w-2 h-2 flex mr-1" />
				<p>{{ item.label }}</p></router-link
			>
		</div>
	</div>
</template>

<style scoped>
.currentItem {
	@apply bg-cyan-500 text-cyan-100;
}
a {
	font-size: 16px !important;
}
</style>
