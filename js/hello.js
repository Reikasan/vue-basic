Vue.createApp({
    data:function() {
        return {
            message: 'Hello Vue.js!',
            h1_message: '<h1>Hi!</h1><span><a href="https://vuejs.org/">Vue.js!</a></span>',
            url: 'https://reikaakuzawa.com',
            email: 'Foo@example.com',
            current: new Date().toLocaleString(),
        }
    },
    computed: {
        localEmail() {
            return this.email.split('@')[0].toLowerCase()
        },
        randomc() {
            return Math.random()
        },
    },
    methods: {
        onclick() {
            this.current = new Date().toLocaleString()
        },
        randomm() {
            return Math.random()
        }
    }
}).mount('#app')