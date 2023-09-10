<script setup>
import SideNavItems from "./SideNavItems.vue";

defineProps(["isExpand"]);
</script>
<template>
	<div class="sideNawWrapper flex w-full">
		<div class="sideNav min-w-[300px] h-[92vh] p-4">
			<div class="bg-cyan-100 rounded-xl h-full contentShadow">
				<SideNavItems />
			</div>
		</div>

		<div class="contentWrapper w-full px-8 py-4">
			<div class="content p-8 h-full contentShadow rounded-xl bg-white">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
