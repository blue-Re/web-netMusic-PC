import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultStore = Map({
  topBanners: [],
})

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)

    default:
      return state
  }
}

export default reducer