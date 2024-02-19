<script setup lang=ts>
import HeaderContent from '@/ui/HeaderContent.vue';
import AddonsOption from './AddonsOption.vue';
import NavigateStep from '@/ui/NavigateStep.vue';
import { useAddOns } from '@/stores/add-ons';

const addonStore = useAddOns();

</script>

<template>
    <div class="relative h-full">
        <HeaderContent title="Pick add-ons" descript="Add-ons help enhance your gaming experience." />
        <AddonsOption v-for="(option) in addonStore.options" :addons="option" :key="option.title" />
        <NavigateStep :onSubmit="addonStore.exeValidate" />
    </div>
</template>