let MyUtil = {
    install(app, options={}) {
        app.directive('highlight', {
            mounted(el, binding, vnode, oldVnode) {
                if(options.border) {
                    console.log(`option selected ${binding.value}`)
                    el.style.border = `solid 1px ${binding.value}`
                } else {
                    el.addEventListener('mouseenter', function(){
                        this.style.backgroundColor = binding.value
                    },false)
                    el.addEventListener('mouseleave', function(){
                        this.style.backgroundColor = ''
                    },false)
    
                } 
            },
            updated(el, binding, vnode, oldVnode) {
                if(options.border) {
                    el.style.border = `1px solid ${binding.value}`
                } else {
                    el.addEventListener('mouseenter', function(){
                        this.style.backgroundColor = binding.value
                    },false)
                    el.addEventListener('mouseleave', function(){
                        this.style.backgroundColor = ''
                    },false)
                } 
            }
        })
    }
}