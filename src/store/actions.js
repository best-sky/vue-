import * as types from './mutation-types'

export const increment = function ({commit}) {
  commit(types.SET_COUNT)
}

export const setHide = function ({commit}) {
  commit(types.SET_HIDE,true)
}
