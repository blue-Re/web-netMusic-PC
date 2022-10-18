import { getSongDetail, getSongLyric } from "../../../service/player";
import { getRandomNumber } from "../../../utils/math-utils";
import { parseLyric } from "../../../utils/parse-lyric";

import * as actionTypes from "./constant";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
});
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
});
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
});

export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    // 1. 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(['play', 'playList'])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2. 判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(song.id))
    } else {
      // 没有找到歌曲数据，请求歌曲数据
      const result = await getSongDetail(ids)
      song = result.songs && result.songs[0]
      if (!song) return;

      // 1. 将最新请求到的数据添加到列表中
      const newPlayList = [...playList]
      newPlayList.push(song)

      // 2. 更新redux当中的值
      dispatch(changePlayListAction(newPlayList))
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
      dispatch(changeCurrentSongAction(song))

      // 3. 请求歌曲歌词
      if (!song) return
      dispatch(getLyricAction(song.id))
    }
  }
};

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['play', 'playList'])
    const sequence = getState().getIn(['play', 'sequence'])
    let currentSongIndex = getState().getIn(['play', 'currentSongIndex'])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = -1
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break;

      default: // 顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
        break;
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌曲歌词
    dispatch(getLyricAction(currentSong.id))
  }
};

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  lyricList
})
export const getLyricAction = (id) => {
  return async dispatch => {
    const { lrc: { lyric } = {} } = await getSongLyric(id)
    const lyricList = parseLyric(lyric)
    // console.log(lyricList);
    dispatch(changeLyricListAction(lyricList))
  }
};
