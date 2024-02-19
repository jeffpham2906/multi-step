<script setup lang=ts>
import { useSteps } from '@/stores/step';
import VButton from '@/ui/VButton.vue';

const props = withDefaults(defineProps<{
    onSubmit?: Function
}>(), {
    onSubmit: (): boolean => {
        console.log("This is default function")
        return false
    },
})

const stepStore = useSteps()

const onRightClick = (): void => {
    const isValidated: boolean = props.onSubmit() // exe validate
    if (isValidated) {
        stepStore.nextStep()
    }
}

const handleRightClick = (): void => {
    if (stepStore.step === 4) {
        stepStore.nextStep()
    } else {
        onRightClick()
    }
}
const onLeftClick = (): void => {
    stepStore.goBack()
}
</script>

<template>
    <div class="absolute bottom-0 left-0 right-0 flex justify-between sm:fixed sm:bg-nt-white sm:p-4">
        <div>
            <VButton v-show="stepStore.step > 1" @click="onLeftClick">
                Go back
            </VButton>
        </div>
        <div>
            <VButton :type="stepStore.step === 4 ? 'secondary' : 'primary'" @click="handleRightClick">
                {{ stepStore.step === 4 ? "Confirm" : 'Next Step' }}
            </VButton>
        </div>
    </div>
</template>