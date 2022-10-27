
import { getCommentList, getPlayListAllSongs, getTopListDetail } from './../../../../../service/ranking';
import * as actionTypes from './constant'

const changeTopListDetailAction = (result) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topListDetail: result.list
})
export const getTopListDetailAction = (type) => {
  return async dispatch => {
    const result = await getTopListDetail(type)
    dispatch(changeTopListDetailAction(result))
  }
};

const changePlayListAllSongsAction = (result) => ({
  type: actionTypes.CHANGE_PLAY_LIST_ALL_SONGS,
  playListAllSongs: result.songs
});
export const getPlayListAllSongsAction = (id) => {
  return async dispatch => {
    const result = await getPlayListAllSongs(id)
    dispatch(changePlayListAllSongsAction(result))
  }
};

const changeCommentInfoAction = (result) => ({
  type: actionTypes.CHANGE_COMMENT_INFO,
  commentInfo: result
});
export const getCommentInfoAction = (id) => {
  return async dispatch => {
    const result = await getCommentList(id)
    dispatch(changeCommentInfoAction(result))
  }
};