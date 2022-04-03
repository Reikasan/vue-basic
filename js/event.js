Vue.createApp({
    data() {
        return {
            message: '',
        }
    },
    methods: {
        onclick_1(e) {
            this.message = new Date().toLocaleString()
            console.log(e)
        }, 
        onclick_2(message, e) {
            this.message = message;
            console.log(e)
        },
    }
}).mount('#app')

Vue.createApp({
    data() {
        return {
            name: 'Guest',
            body: '',
        }
    },
    methods: {
        clear() {
            this.name = ''
        },
        help() {
            window.alert('Please write something more than 20 letters')
        }
    }
}).mount('#keyModifier')

Vue.createApp({
    methods: {
        clickRight(e) {
            window.alert('Right Clicked Coordinate: ' + e.clientX + ', ' + e.clientY)
        }
    }
}).mount('#mouseButtonModifier')

