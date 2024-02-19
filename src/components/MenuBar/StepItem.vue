<script setup lang=ts>
import { useSteps } from '@/stores/step';
import { computed } from 'vue';


const props = defineProps<{
    title: string,
    step: number,
}>()

const stepStore = useSteps()
const isActived = computed((): boolean => {
    if (props.step === 4 && stepStore.step === 5) return true
    return stepStore.step === props.step
})  
</script>

<template>
    <li class="flex items-center gap-4 lg:gap-3">
        <p
            :class="`border border-nt-light-gray p-4 rounded-full w-10 h-10 lg:w-8 lg:h-8 lg:text-sm flex items-center justify-center ${isActived ? 'bg-nt-light-gray text-black' : 'text-nt-white'}`">
            {{ step }}
        </p>
        <div class="uppercase sm:hidden">
            <p class="text-sm lg:text-xs text-nt-cool-gray">Step {{ step }}</p>
            <p class="text-nt-white lg:text-sm font-[ubuntuMedium]">{{ title }}</p>
        </div>
    </li>
</template>