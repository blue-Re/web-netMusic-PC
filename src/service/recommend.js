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

