import { Carousel } from 'antd';
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ThemeHeaderRecommend from '../../../../../../components/theme-header-recommend'
import AlbumCover from '../../../../../../components/album-cover';
import { getNewAlbumsAction } from '../../store/actions';

import { AlbumWrapper } from './style';


const NewAlbum = memo(() => {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
    return () => {
    };
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRecommend title='新碟上架' />
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return <div key={item} className='page'>
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                      return (
                        <AlbumCover 
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp='-570px'
                        />
                      )
                    })
                  }
                </div>
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum