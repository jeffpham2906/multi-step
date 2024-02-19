<script setup lang=ts>
import Input from '@/ui/Input.vue';
import HeaderContent from '@/ui/HeaderContent.vue';
import NavigateStep from '@/ui/NavigateStep.vue';
import { usePersonalData } from '@/stores/personalData'

const personalData = usePersonalData()


</script>

<template>
    <div class="relative h-full">
        <HeaderContent title="Personal info" descript="Please provide your name, email address, and phone number." />
        <form @submit.prevent="() => console.log('submit')" class="flex flex-col gap-4">
            <Input placeholder="e.g jeffpham" v-model="personalData.name" :isValidated="personalData.isNameValidated">
            Name
            </Input>
            <Input placeholder="e.g abc@gmail.com" v-model="personalData.email"
                :isValidated="personalData.isEmailValidated">
            Email Address
            </Input>
            <Input placeholder="e.g +1 234 567 890" v-model="personalData.phone"
                :isValidated="personalData.isPhoneValidated">
            Phone Number
            </Input>
        </form>
        <NavigateStep :onSubmit="personalData.exeValidate" />
    </div>
</template>