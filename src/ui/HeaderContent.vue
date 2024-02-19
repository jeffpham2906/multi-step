<script setup lang=ts>
defineProps<{
    title: string,
    descript: string
}>()
</script>

<template>
    <h1 class="font-[ubuntuBold] text-3xl mb-2 lg:text-2xl">
        {{ title }}
    </h1>
    <p class="text-nt-cool-gray mb-8 lg:text-sm">
        {{ descript }}
    </p>
</template>