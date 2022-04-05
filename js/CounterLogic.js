function CounterLogic(init) {
    const state = Vue.reactive({
        current:init,
    })
    const rounded = Vue.computed(function() {
        return Math.round(state.current / 10) * 10
    })
    const onclick = function() {
        state.current++
    } 
    const clearCount = function() {
        state.current = 0
    }

    return {
        state, rounded, onclick, clearCount
    }
}