<template>
	<div class="filter-table-item border border-black/70 p-4 bg-white text-black w-[200px]" :class="{ open: isSideNav }">
		<p class="text-xl font-cinzel capitalize">{{ keyItem }}</p>
		<div class="mt-4 flex flex-wrap max-h-[23.125rem] gap-2" :class="{ 'h-auto': isSideNav }">
			<div class="filterValue-item flex flex-1" v-for="filterItem in filterValues" :key="filterItem">
				<input
					:name="keyItem"
					v-model="checkValue"
					class="hidden"
					:class="keyItem + '-' + filterItem"
					:value="filterItem"
					hidden
					:id="keyItem + '-' + filterItem + isSideNav"
					type="checkbox"
					ref="inputRef"
				/>
				<label :for="keyItem + '-' + filterItem + isSideNav" class="labelItem block w-full h-full"
					><p
						class="flex justify-center items-center text-center w-full h-full text-xs noselect font-semibold uppercase px-2 py-1 border border-black"
					>
						{{ filterItem }}
					</p>
				</label>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onUpdated } from "vue";

// ** Props
const { filterValues, keyItem, isSideNav } = defineProps(["filterValues", "keyItem", "isSideNav"]);
const emits = defineEmits(["getCheckedData"]);

// ** Refs
const checkValue = ref([]);
const inputRef = ref(null);

// ** Lifecycles
onUpdated(() => {
	emits("getCheckedData", { title: keyItem, data: checkValue.value });
});
</script>

<style scoped>
/* .gridItem:not(:has(*)) {
	display: none; 
/* } */
input:checked + .labelItem {
	@apply bg-black  text-white;
}
</style>
