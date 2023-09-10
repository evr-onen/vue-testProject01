<script setup>
import CardOne from "/src/components/ui/Card/CardOne.vue";

const ttt = () => console.log("action");
</script>

<template>
	<div class="pageWrapper">
		<div class="">
			<CardOne width="300px" buttons="true" :action="() => ttt()" m="1rem">
				<template #header> header </template>
				<p class="">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod libero illo cumque doloremque mollitia veniam
					obcaecati, aliquam quos tempore tempora consequuntur, corporis in deserunt assumenda debitis nostrum harum id
					nemo, earum quisquam! Veniam eius mollitia quisquam unde facilis aut, quibusdam, quos amet deleniti, et non?
					Eaque assumenda in at neque voluptates velit natus dolorum blanditiis asperiores?
				</p>
			</CardOne>

			<CardOne width="300px">
				<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
					<h4 class="text-center font-semibold">CardOne</h4>
					<p class="text-lg font-bold">Slot</p>
					<strong> #header</strong>

					<br />
					<p class="text-lg font-bold">Props</p>
					<div class="flex">
						<p class="w-1/2 font-semibold">headerClass</p>
						<p class="w-1/2"><strong>:</strong> "text-cyan-700"</p>
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
	</div>
</template>

<style></style>
