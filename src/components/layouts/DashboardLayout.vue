<template>
	<div class="dashboardLayout bg-cyan-50">
		<HeaderSection v-model:isExpand="isExpand" />
		<SideNav v-model:isExpand="isExpand">
			<slot />
		</SideNav>
	</div>
</template>
<script setup>
import HeaderSection from "@/components/dashboard/HeaderSection.vue";
import SideNav from "@/components/dashboard/SideNav.vue";

import { ref } from "vue";

const isExpand = ref(true);
</script>
<style></style>
