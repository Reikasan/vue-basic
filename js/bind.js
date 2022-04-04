Vue.createApp({
    data() {
        return {
            nameAttrs: {
                size: 12,
                maxlength: 15,
                required: true
            },
            photoattr: 'width',
            value: 200,
            name: 'Guest',
            message: "Learn more about Vue!",
            isChange: true,
            toggle: true,
        }
    },
    methods: {
        clearFrame() {
            this.isChange = false,
            this.toggle = false
        },
        addFrame() {
            this.isChange = true,
            this.toggle = true
        }
    }
}).mount('#bind')