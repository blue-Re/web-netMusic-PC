import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultStore = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSingers: [],
  hotAnchor: []
})

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)

    case actionTypes.CHANGE_HOT_RECOMMEND: 
      return state.set('hotRecommend', action.hotRecommend)
    
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)

    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)

    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)

    case actionTypes.CHANGE_SETTLE_SINGERS:
      return state.set('settleSingers', action.settleSingers)

    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set('hotAnchor', action.hotAnchor)
    default:
      return state
  }
}

export default reducer