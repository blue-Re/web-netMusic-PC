import http from './index';
/**
 * 
 * @params
 * 1 华语
 * 2 欧美
 * 3 韩国
 * 4 日本
 */
export function getTopListDetail(type) {
  return http.get('/toplist/detail', {
    params: {
      type
    }
  })
}

// 获取歌单的所有歌曲
export function getPlayListAllSongs(id) {
  return http.get('/playlist/track/all', {
    params: {
      id
    }
  })
}