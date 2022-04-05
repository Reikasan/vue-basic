Vue.createApp({})
    .component('my-counter', {
        // set property and template
        props: ['init'],
        template: `<div>Current count is {{state.current}} (around {{rounded}})</div>
                <input type="button" class="btn btn-outline-success" @click="onclick" value="Add Count">`,

        // set Composition API
        setup(props) {
            // set data-object (=data())
            const state = Vue.reactive({
                current:props.init,
            })
            // set event handler (=methods)
            const onclick = function() {
                state.current++
            }
            // set computed property
            const rounded = Vue.computed(function() {
                return Math.round(state.current / 10) * 10
            })

            // return with object form
            return {
                state,rounded,onclick
                // state:state, onclick:onclick
            }
            // change to ref variable to access data simply - {{current}}
            // return {
            //     Vue.toRef(state),onclick
            // }

            //  USE REF-METHOD
            // const current = Vue.ref(props.init)
            // const onclick = function() {
            //     current.value++
            // }
            // return current,onclick

            // ACCESS DATA WITH {{current}}
        }
    })
    .mount('#app')