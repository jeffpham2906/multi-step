<script setup lang="ts">
import MenuBar from '@/components/MenuBar/MenuBar.vue'
import StepOneContent from '@/components/StepOneScreen/StepOneContent.vue';
import StepTwoContent from '@/components/StepTwoScreen/StepTwoContent.vue';
import StepThreeContent from '@/components/StepThreeScreen/StepThreeContent.vue';
import StepFourContent from '@/components/StepFourScreen/StepFourContent.vue';
import ThankScreen from './components/ThankScreen.vue';
import MenuBarMoblie from './components/MenuBar/MenuBarMoblie.vue';
import { useSteps } from './stores/step';
import { computed } from 'vue';



const screens = [StepOneContent, StepTwoContent, StepThreeContent, StepFourContent, ThankScreen]

const stepStore = useSteps()

const content = computed(() => {
  const index: number = stepStore.step - 1
  return screens[index]
})

</script>

<template>
  <div class="flex items-center justify-center h-screen bg-nt-magnolia relative">
    <MenuBarMoblie />
    <div
      class="bg-nt-white rounded-xl p-4 w-2/3 max-w-[900px] grid grid-cols-3 h-5/6 max-h-[650px] sm:absolute sm:top-28 sm:h-fit sm:w-5/6">
      <MenuBar />
      <div class="col-start-2 col-end-4 sm:col-span-4 px-20 py-8 text-pm-marine-blue lg:px-12 md:px-8 sm:!px-4">
        <component :is="content" />
      </div>
    </div>
  </div>
</template>
