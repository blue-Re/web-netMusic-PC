import { Carousel } from 'antd';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from './../../store/actions';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

const TopBanner = memo(() => {
  // 组件自身状态hooks
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联，获取数据进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannersAction())

    return () => {
    };
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner