<script setup lang=ts>
withDefaults(defineProps<{ type?: string }>(), { type: "" })

const btnStyle = (type: string) => {
    switch (type) {
        case "primary":
            return "bg-pm-marine-blue hover:bg-[#174a8b] text-nt-white"
        case "secondary":
            return "text-nt-white bg-pm-purplish-blue"
        default:
            return "text-nt-cool-gray hover:text-pm-marine-blue";
    }
}

</script>

<template>
    <button
        :class="`px-6 py-3 lg:text-sm lg:w-fit lg:px-4 font-[ubuntuMedium] rounded-xl transition-all ${btnStyle(type)}`">
        <slot>Button</slot>
    </button>
</template>