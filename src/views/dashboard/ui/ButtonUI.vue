<template>
	<div class="pageWrapper">
		<CardOne width="300px">
			<button class="buttonOne text-xs font-bold">Evren</button>
		</CardOne>
		<CardOne width="300px">
			<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
				<h4 class="text-center font-semibold">Button Style</h4>

				<br />
				<div class="flex">
					<p class="w-1/2 font-bold">Class</p>
					<p class="w-1/2"><strong>:</strong> buttonOne</p>
				</div>
			</div>
		</CardOne>
	</div>
</template>

<script setup>
import CardOne from "@/components/ui/Card/CardOne.vue";
</script>

<style scoped></style>
