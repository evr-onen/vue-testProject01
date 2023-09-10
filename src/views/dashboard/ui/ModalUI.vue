<template>
	<div class="pageWrapper">
		<CardOne width="300px">
			<button class="buttonOne" @click="openModal">Open Modal</button>
		</CardOne>
		<CardOne width="300px">
			<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
				<h4 class="text-center font-semibold">CardOne</h4>
				<p class="text-lg font-bold">Slot</p>
				<strong> #header</strong>
				<strong> #actions</strong>

				<br />
				<p class="text-lg font-bold">Props</p>
				<div class="flex">
					<p class="w-1/2 font-semibold">v-model:isOpen</p>
					<p class="w-1/2"><strong>:</strong> isOpen</p>
				</div>
				<div class="flex">
					<p class="w-1/2 font-semibold">contentClass</p>
					<p class="w-1/2"><strong>:</strong> "text-cyan-700"</p>
				</div>
				<div class="flex">
					<p class="w-1/2 font-semibold">actionClass</p>
					<p class="w-1/2"><strong>:</strong> "text-cyan-700"</p>
				</div>
				<div class="flex">
					<p class="w-1/2 font-semibold">buttons</p>
					<p class="w-1/2"><strong>:</strong> false</p>
				</div>
				<div class="flex">
					<p class="w-1/2 font-semibold">action</p>
					<p class="w-1/2"><strong>:</strong> ()=>funcName()</p>
				</div>
			</div>
		</CardOne>
	</div>
	<ModalOne v-model:isOpen="open" headerClass="">
		<template #header> Header Example</template>
		<template #actions>
			<div class="flex justify-end">
				<button class="buttonOne bg-danger mr-4" @click="open = false">Cancel</button>
				<button class="buttonOne bg-succes" @click="open = false">Save</button>
			</div>
		</template>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos repellendus qui explicabo impedit numquam, fuga est
		alias, pariatur nihil omnis, aliquam nobis hic saepe. Blanditiis, corporis officia voluptate exercitationem
		inventore, aliquam similique voluptates nesciunt dolore a saepe! Soluta odio molestiae nisi obcaecati ullam
		corporis! Accusantium culpa repellat totam similique beatae voluptate!
	</ModalOne>
</template>

<script setup>
import { ref } from "vue";
import ModalOne from "../../../components/ui/Modal/ModalOne.vue";
import CardOne from "../../../components/ui/Card/CardOne.vue";
const open = ref(false);

const openModal = () => {
	open.value = true;
};
</script>

<style></style>
