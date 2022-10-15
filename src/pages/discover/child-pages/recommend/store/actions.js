import * as actionTypes from './constants'

import { getHotRecommends, getTopBanners } from '../../../../../service/recommend'

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