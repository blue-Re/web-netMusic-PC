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

/**
 * 
 * @params
 * 1 华语
 * 2 欧美
 * 3 韩国
 * 4 日本
 */
export function getSettleSingers() {
  return http.get('/top/artists', {
    params: {
      limit: 10,
    }
  })
}

export function getHotAnchor() {
  return http.get('/dj/hot', {
    params: {
      limit: 5
    }
  })
}