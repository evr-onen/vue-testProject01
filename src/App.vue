<template>
	<ContentLayout v-if="route.fullPath.split('/')[1] !== 'dashboard'">
		<router-view />
	</ContentLayout>
	<DashboardLayout v-else-if="route.fullPath.split('/')[1] === 'dashboard'">
		<router-view />
	</DashboardLayout>
</template>
<script setup>
import { useRoute } from "vue-router";
import { RouterView } from "vue-router";
import ContentLayout from "@/components/layouts/ContentLayout.vue";
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";

const route = useRoute();
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@100;300;400;500;700&display=swap");
</style>
