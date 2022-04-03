Vue.createApp({
    data() {
        return {
            myName: 'Guest'
        }
    },
    methods: {
        clear() {
            this.myName = ''
        }
    } 
}).mount('#model')

Vue.createApp({
    data() {
        return {
            gender: 'Man',
            agree: true,
            language: ['PHP','Python'],
            unit: { },
            result: '',
        }
    },
    methods: {
        upload() {
            let that = this
            let upfile = this.$refs.upfile.files[0]
            let form = new FormData()
            form.append('upfile', upfile, upfile.name)

            fetch('upload.php', {
                method: 'POST',
                body: form
            })

            .then(function(response) {
                return response.text()
            })

            .then(function(text) {
                that.result = text
            })
        }
    }
}).mount('#example')