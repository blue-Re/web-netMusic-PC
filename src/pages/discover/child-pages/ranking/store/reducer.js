import { Map } from "immutable";
import * as actionTypes from './constant'

const defaultStore = Map({
  topListDetail: [],
  playListAllSongs: [],
  commentInfo: []
})
function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('topListDetail', action.topListDetail)
    
    case actionTypes.CHANGE_PLAY_LIST_ALL_SONGS:
      return state.set('playListAllSongs', action.playListAllSongs)

    case actionTypes.CHANGE_COMMENT_INFO:
      return state.set('commentInfo', action.commentInfo)  
    default:
      return state;
  }
}

export default reducer