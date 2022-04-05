Vue.createApp({})
    .component('my-counter', {
        props: ['init'],
        template: `<div>Current count is {{state.current}} (around {{rounded}})</div>
                <teleport to="#result">Use Teleport</teleport>
                <input type="button" class="btn btn-outline-success" @click="onclick" value="Add Count">
                <input type="button" class="btn btn-outline-danger" @click="clearCount" value="Clear">`,

        setup(props) {
            return {
                ...CounterLogic(props.init)
            }
        }
    })
    .mount('#app')