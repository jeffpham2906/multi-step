<script setup lang=ts>
import { useSteps } from '@/stores/step';
import ListStep from './ListStep.vue';
import StepItem from './StepItem.vue';


const stepStore = useSteps();


</script>

<template>
    <div class="bg-sidebar bg-no-repeat bg-cover rounded-xl sm:hidden">
        <ListStep>
            <StepItem v-for="(title, index) in stepStore.steps" :step="index + 1" :title="title" />
        </ListStep>
    </div>
</template>