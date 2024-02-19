import { defineStore } from "pinia";
const steps = ["Your info", "Select plan", "Add-ons", "Summary"]


export const useSteps = defineStore({
    id: 'step',
    state: () => ({
        step: 1,
        steps
    }),
    actions: {
        nextStep(): void {
            if (this.step >= 5) {
                return
            }
            this.step += 1
        },
        goBack(): void {
            if (this.step <= 1) {
                return
            }
            this.step -= 1
        }
    }
})