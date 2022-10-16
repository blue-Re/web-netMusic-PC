import * as actionTypes from './constants'

import { getHotRecommends, getNewAlbums, getTopBanners, getTopList } from '../../../../../service/recommend'

const changeTopBannersAction = (result) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: result.banners
});
export const getTopBannersAction = () => {
  return async dispatch => {
    const result = await getTopBanners()
    dispatch(changeTopBannersAction(result))
  }
}

const changeHotRecommendAction = (result) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: result.result
});
export const getHotRecommendAction = (limit) => {
  return async dispatch => {
    const result = await getHotRecommends(limit)
    dispatch(changeHotRecommendAction(result))
  }
};

const changeNewAlbumsAction = (result) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: result.monthData
});
export const getNewAlbumsAction = (limit) => {
  return async dispatch => {
    const result = await getNewAlbums(limit)
    dispatch(changeNewAlbumsAction(result))
  }
};

const changeUpRankingAction = (result) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: result.playlist
});
const changeNewRankingAction = (result) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: result.playlist
});
const changeOriginRankingAction = (result) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: result.playlist
});
export const getTopListAction = (id) => {
  return async dispatch => {
    const result = await getTopList(id)
    switch (id) {
      case 3778678:
        dispatch(changeUpRankingAction(result))
        break;
      case 3779629: 
        dispatch(changeNewRankingAction(result))
        break;
      case 19723756:
        dispatch(changeOriginRankingAction(result))
        break;
      default:
        break;
    }
  }
};