<script setup lang=ts>
import { useSteps } from '@/stores/step';


const stepStore = useSteps()
const getStyle = (step: number): string => {
    if (stepStore.step === 5 && step === 4) {
        return 'bg-nt-light-gray text-black'
    }

    if (stepStore.step === step) {
        return 'bg-nt-light-gray text-black'
    } else {
        return 'text-nt-white'
    }
}
</script>

<template>
    <div class="absolute top-0 left-0 right-0 bg-sb-mobile bg-no-repeat bg-cover hidden sm:block">
        <ul class="flex justify-center items-center gap-10 p-10 pb-24">
            <li :class="`border border-nt-light-gray border-solid p-4 rounded-full w-10 h-10 flex items-center justify-center ${getStyle(index + 1)}`"
                v-for="(_, index) in stepStore.steps">{{
                    index + 1 }}
            </li>
        </ul>
    </div>
</template>