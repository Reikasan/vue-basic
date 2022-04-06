Vue
    .createApp({
        data() {
            return {
                color: 'Yellow'
            }
        }
    })

    .directive('highlight', {
        mounted(el, binding, vnode, oldVnode) {
            el.addEventListener('mouseenter', function(){
                this.style.backgroundColor = binding.value
            },false)
            el.addEventListener('mouseleave', function(){
                this.style.backgroundColor = ''
            },false)
        },
        updated(el, binding, vnode, oldVnode) {
            el.addEventListener('mouseenter', function(){
                this.style.backgroundColor = binding.value
            },false)
            el.addEventListener('mouseleave', function(){
                this.style.backgroundColor = ''
            },false)
        }
    })
    .mount('#app')

