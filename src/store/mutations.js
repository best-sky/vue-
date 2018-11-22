import * as types from './mutation-types'
const matutaions = {
    [types.SET_COUNT](state){
        state.count ++
    },
    [types.SET_HIDE](state,flag){
        state.hide = flag
    },
    [types.SET_COUNT_DECREMENT](state){
        state.count --
    },
    [types.SET_TAB_HEADER](state,flag){
        state.tabHeader = flag
    }
}
export default matutaions