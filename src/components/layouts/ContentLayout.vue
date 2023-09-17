<script setup>
import HeaderSection from "@/components/sections/HeaderSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
</script>
<template>
	<div class="flex flex-col items-center">
		<HeaderSection />
		<slot />
		<FooterSection />
	</div>
</template>

<style></style>
