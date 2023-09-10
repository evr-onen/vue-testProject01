<script setup>
import HeaderSection from "./dashboard/HeaderSection.vue";
import SideNav from "./dashboard/SideNav.vue";

import { ref } from "vue";

const isExpand = ref(true);
</script>
<template>
	<div class="dashboardLayout bg-cyan-50">
		<HeaderSection v-model:isExpand="isExpand" />
		<SideNav v-model:isExpand="isExpand">
			<slot />
		</SideNav>
	</div>
</template>

<style></style>
