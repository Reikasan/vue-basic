// GLOBAL COMPONENT
// Vue.createApp({})
//     .component('my-greeting', {
//         template: '<div>Hello</div>'
//     })
//     .mount('#app')

// LOCAL COMPONENT
let MyChild = {
    template:'<div>This is child Component!</div>'
}

let MyCounter = {
    props: ['init'],
    template: '<div>Current count is {{current}}</div><input type="button" class="btn btn-outline-success" @click="onclick" value="Add Count">',
    data() {
        return {
            current:this.init
        }
    },
    methods: {
        onclick() {
            this.current++
        }
    }
}

let NewCounter = {
    props: ['step'],
    emits: {
        increment(step) {
            if(step && Number.isInteger(step)) {
                return true
            } else {
                console.log('Invalid increment event!')
                return false
            }
        }
    },
    template: '<input type="button" class="btn btn-primary" @click="add" v-bind:value="step">',
    methods: {
        add() {
            this.$emit('increment', Number(this.step))
        }
    } 
}

let HelloWithSlot = {
    props: {
        name: String,
    },
    template: '<div>Hello <slot>Guest</slot>!</div><p>this contents used <pre>slot</pre></p>'
}

let MyHello = {
    props: {
        yourName: {
            type: String,
            default: 'Guest',
            validator(value) {
                return value.length <= 8
            }
        }
    },
    template: '<div>Hello {{yourName}}!</div><hello-with-slot></hello-with-slot><my-child></my-child><hr><my-counter init="1"></my-counter><hr><div>Current count is: {{count}}</div><div><new-counter step="1" @increment="onincrement"></new-counter><new-counter step="5" @increment="onincrement"></new-counter><new-counter step="10" @increment="onincrement"></new-counter><new-counter step="-1" @increment="onincrement"></new-counter></div>',
    components: {
        'my-child':MyChild,
        'my-counter':MyCounter,
        'new-counter':NewCounter,
        'hello-with-slot':HelloWithSlot,
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onincrement(e) {
            this.count +=e
        }
    }
}




Vue.createApp({
    components: {
        'my-hello':MyHello,
    }
}).mount('#app')

