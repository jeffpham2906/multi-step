<script setup lang=ts>
import HeaderContent from '@/ui/HeaderContent.vue';
import SelectedService from './SelectedService.vue';
import NavigateStep from '@/ui/NavigateStep.vue';
import { usePlan } from '@/stores/plan';
import { computed } from 'vue';
import { useAddOns } from '@/stores/add-ons';

const planStore = usePlan();
const addonStore = useAddOns();

const planPrice = computed(() => {
    if (planStore.isMonthly) {
        return planStore.planSelected.pricePerMonth
    }
    return planStore.planSelected.pricePerYear
})

const totoalPrice = computed((): number => {
    let total = 0;

    const addonsPrice = addonStore.selectedOptions.reduce((price, cur) => {
        const servicePrice = planStore.isMonthly ? cur.pricePerMonth : cur.pricePerYear
        return price += servicePrice
    }, 0)
    total = addonsPrice + planPrice.value

    return total;
})
</script>

<template>
    <div class="relative h-full">
        <HeaderContent title="Finishing up" descript="Double-check everythiung looks OK before confirming." />
        <div class="p-6 bg-nt-alabaster rounded-xl">
            <SelectedService :price="9">
                <template #title>
                    <div>
                        <h3 class="font-[ubuntuMedium]">
                            {{ planStore.planSelected.title }}
                            ({{ planStore.isMonthly ? 'Monthly' : 'Yearly' }})
                        </h3>
                        <button
                            class="text-sm md:text-xs text-nt-cool-gray underline underline-offset-2 decoration-2 cursor-pointer hover:text-pm-purplish-blue transition-colors duration-150">Change</button>
                    </div>
                </template>
                <template #price>
                    <span class="font-[ubuntuMedium] md:text-sm">
                        $
                        {{ planPrice }}
                        /
                        {{ planStore.isMonthly ? "mo" : 'yr' }}
                    </span>
                </template>
            </SelectedService>
            <div class="h-px w-full bg-nt-light-gray opacity-50 mt-4"></div>
            <SelectedService class="mt-4 text-nt-cool-gray" v-for="(option) in addonStore.selectedOptions"
                :key="option.title">
                <template #title>
                    <span class="md:text-sm">{{ option.title }}</span>
                </template>
                <template #price>
                    <span class="text-pm-marine-blue">
                        +$
                        {{ planStore.isMonthly ? option.pricePerMonth : option.pricePerYear }}
                        /
                        {{ planStore.isMonthly ? 'mo' : 'yr' }}
                    </span>
                </template>
            </SelectedService>
        </div>
        <div class="p-6">
            <SelectedService>
                <template #title>
                    <span class="md:text-sm text-nt-cool-gray font-[ubuntuMedium]">
                        Total (
                        {{ planStore.isMonthly ? 'per year' : 'per month' }}
                        )
                    </span>
                </template>
                <template #price>
                    <span class="text-pm-purplish-blue font-[ubuntuMedium] md:text-sm">
                        $
                        {{ totoalPrice }}
                        /
                        {{ planStore.isMonthly ? 'mo' : 'yr' }}
                    </span>
                </template>
            </SelectedService>
        </div>
        <NavigateStep />
    </div>
</template>