import { defineStore } from "pinia";

const plans = [
    {
        title: 'Acade',
        pricePerMonth: 9,
        pricePerYear: 90,
        icon: '/images/icon-arcade.svg'
    },
    {
        title: 'Advanced',
        pricePerMonth: 1,
        pricePerYear: 120,
        icon: '/images/icon-advanced.svg'
    },
    {
        title: 'Pro',
        pricePerMonth: 15,
        pricePerYear: 150,
        icon: '/images/icon-pro.svg'
    }
]

export interface Plan {
    title: string,
    pricePerMonth: number,
    pricePerYear: number,
    icon: string
}

export const usePlan = defineStore({
    id: "plan",
    state: () => ({
        planSelected: plans[0],
        isMonthly: true,
        plans
    }),
    actions: {
        changePeriod(): void {
            this.isMonthly = !this.isMonthly
        },
        updatePlan(plan: Plan): void {
            this.planSelected = plan
        }
    }
}) 