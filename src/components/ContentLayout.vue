<script setup>
import HeaderSection from "./HeaderSection.vue";
import FooterSection from "./FooterSection.vue";
</script>
<template>
	<div class="flex flex-col items-center">
		<HeaderSection />
		<slot />
		<FooterSection />
	</div>
</template>

<style></style>
