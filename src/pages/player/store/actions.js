import { getSongDetail } from "../../../service/player";

import * as actionTypes  from "./constant";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
});
export const getSongDetailAction = (ids) => {
  return async dispatch => {
    const result = await getSongDetail(ids)
    dispatch(changeCurrentSongAction(result.songs[0]))
  }
};