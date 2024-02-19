<script setup lang=ts>
import { usePlan, Plan } from '@/stores/plan';


defineProps<{
    plan: Plan,
}>()

const planStore = usePlan()

</script>

<template>
    <div @click="planStore.updatePlan(plan)"
        :class="`border rounded-md p-4 h-44 lg:p-3 lg:h-40 md:!h-16 flex justify-between md:justify-start md:gap-4 md:items-center flex-col md:flex-row hover:border-pm-purplish-blue ${planStore.planSelected.title === plan.title ? 'border-pm-purplish-blue bg-nt-alabaster' : ''}`">
        <img :src="plan.icon" :alt="plan.title" class="h-10 w-10 md:h-8 md:w-8">
        <div class="lg:text-sm">
            <h3 class="font-[ubuntuMedium] ">{{ plan.title }}</h3>
            <p class="text-nt-cool-gray">$
                {{ planStore.isMonthly ? plan.pricePerMonth : plan.pricePerYear }}/
                {{ planStore.isMonthly ? 'mo' : 'yr' }}</p>
        </div>
    </div>
</template>