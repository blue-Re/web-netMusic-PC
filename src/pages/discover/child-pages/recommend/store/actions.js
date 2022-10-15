import * as actionTypes from './constants'

import { getTopBanners } from '../../../../../service/recommend'

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