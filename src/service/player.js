import http from './index';

export function getSongDetail(ids) {
  return http.get('/song/detail', {
    params: {
      ids
    }
  })
}

export function getSongLyric(id) {
  return http.get('/lyric', {
    params: {
      id
    }
  })
}