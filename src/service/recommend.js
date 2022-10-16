import http from './index';

export function getTopBanners() {
  return http.get('/banner')
}

export function getHotRecommends(limit) {
  return http.get('/personalized', {
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return http.get('/top/album', {
    params: {
      limit
    }
  })
}

export function getTopList(id) {
  return http.get('/playlist/detail', {
    params: {
      id
    }
  })
}