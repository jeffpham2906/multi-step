import { defineStore } from "pinia";

const options = [
    {
        title: 'Online service',
        subTitle: 'Access to multiplayer games',
        pricePerMonth: 1,
        pricePerYear: 15
    },
    {
        title: 'Larger storage',
        subTitle: 'Extra 1TB of cloud save',
        pricePerMonth: 2,
        pricePerYear: 25
    },
    {
        title: 'Customizable Profile',
        subTitle: 'Custom theme on your profile',
        pricePerMonth: 3,
        pricePerYear: 35
    }
]
export interface AddOns {
    title: string,
    subTitle: string,
    pricePerMonth: number,
    pricePerYear: number
}
export const useAddOns = defineStore({
    id: 'add-ons',
    state: () => ({
        options,
        selectedOptions: Array<AddOns>()
    }),
    getters: {
        arrTitleSelectedOptions: (state): string[] => {
            return state.selectedOptions.map(e => e.title)
        }
    },
    actions: {
        updateSelectedOptions(addons: AddOns): void {
            const index = this.selectedOptions.findIndex(ele => ele.title === addons.title)
            if (index === -1) {
                this.selectedOptions.push(addons)
            } else {
                this.selectedOptions.splice(index, 1)
            }
        },
        exeValidate(): boolean {
            return this.selectedOptions.length >= 1
        }
    }
})