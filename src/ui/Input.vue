<script setup lang=ts>
defineProps<{
    placeholder: string,
    isValidated?: boolean,
}>()
const modelValue = defineModel<string>()
</script>

<template>
    <div>
        <label class="block relative mb-1 lg:text-sm" for="name">
            <slot />
            <span :style="[isValidated && 'display: none']"
                class="absolute right-0 text-pm-strawberry-red font-[ubuntuMedium]">This field is required</span>
        </label>
        <input class="border-nt-light-gray border px-4 py-2 rounded-md w-full placeholder:text-sm" type="text" name="name"
            :placeholder="placeholder" v-model="modelValue">
    </div>
</template>