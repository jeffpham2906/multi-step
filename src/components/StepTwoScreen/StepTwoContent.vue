<script setup lang=ts>
import { usePlan } from '@/stores/plan';
import BoxPlan from './BoxPlan.vue'
import HeaderContent from '@/ui/HeaderContent.vue';
import NavigateStep from '@/ui/NavigateStep.vue';



const planStore = usePlan()

</script>

<template>
    <div class="relative h-full">
        <HeaderContent title="Select your plan" descript=" You have the option of monthly or yearly billing." />
        <div class="grid grid-cols-3 gap-4 mb-8 md:grid-cols-1">
            <BoxPlan v-for="(plan) in planStore.plans" :plan="plan" />
        </div>
        <div
            class="flex items-center gap-4 justify-center p-4 bg-nt-alabaster rounded-xl font-[ubuntuMedium] text-sm md:text-xs">
            <p :class="`${!planStore.isMonthly && 'text-nt-cool-gray'}`">Monthly</p>
            <label class="relative w-12 h-6 inline-block md:h-5 md:w-8">
                <input type="checkbox" @click="planStore.changePeriod" class="w-0">
                <span
                    :class="`absolute top-0 left-0 right-0 bottom-0 bg-pm-marine-blue rounded-full before:transition-all before:absolute before:left-1 before:bottom-1 before:w-4 before:h-4 md:before:w-3 md:before:h-3 before:bg-nt-white before:rounded-full ${!planStore.isMonthly && 'before:translate-x-6 md:before:translate-x-3'}`"></span>
            </label>
            <p :class="`${planStore.isMonthly && 'text-nt-cool-gray'}`">Yearly</p>
        </div>
        <NavigateStep :on-submit="() => true" />
    </div>
</template>
