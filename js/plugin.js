Vue
    .createApp({
        data() {
            return {
                color: 'Yellow'
            }
        }
    })
    .use(MyUtil, { border:true })
    .mount('#app')
