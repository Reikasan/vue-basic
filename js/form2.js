Vue.createApp({
    data() {
        return {
            time: 0,
            message: '',
            myName: 'Guest',
        }
    },
    methods: {
        round() {
            console.log(this.time.toFixed(1))
        }
    }
}).mount('#modelModifier')

Vue.createApp({
    data() {
        return {
            emails: [],
        }
    }
}).mount('#customizedBinding')