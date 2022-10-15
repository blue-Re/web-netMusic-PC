import http from './index';

export function getTopBanners() {
  return http.get('/banner')
}
