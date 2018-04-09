export default {

    methods: {

        hasSlot(slot) {
            return !!this.$slots[slot];
        },

        hasSlots(slots) {
            for(let i in slots) {
                if(!this.hasSlot(slots[i])) {
                    return false;
                }
            }
        }

    },

    computed: {

        hasDefaultSlot() {
            return this.hasSlot('default');
        }

    }

}
