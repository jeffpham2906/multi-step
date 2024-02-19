<script setup lang=ts>
import { AddOns, useAddOns } from '@/stores/add-ons';
import { usePlan } from '@/stores/plan';
import { computed } from 'vue';

const props = defineProps<{
    addons: AddOns
}>()

const addonStore = useAddOns();
const planStore = usePlan();

const price = computed((): number => {
    if (planStore.isMonthly) {
        return props.addons.pricePerMonth
    }
    return props.addons.pricePerYear
})


</script>

<template>
    <div @click="addonStore.updateSelectedOptions(addons)"
        :class="`flex items-center gap-4 border p-4 md:p-3 md:gap-3 rounded-md  mb-4 hover:border-pm-purplish-blue ${addonStore.arrTitleSelectedOptions.includes(addons.title) && 'border-pm-purplish-blue bg-nt-alabaster'}`">
        <div>
            <input class="w-4 h-4 md:w-3 md:h-3" :checked="addonStore.arrTitleSelectedOptions.includes(addons.title)"
                type="checkbox">
        </div>
        <div class="flex-1">
            <h3 class="font-[ubuntuMedium] md:text-sm">{{ addons.title }}</h3>
            <span class="block text-sm md:text-xs text-nt-cool-gray">{{ addons.subTitle }}</span>
        </div>
        <div class="text-pm-purplish-blue text-sm md:text-xs">+${{ price }}/{{ planStore.isMonthly ? 'mo' : 'yr' }}</div>
    </div>
</template>