import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { HOT_RECOMMEND_LIMIT } from '../../../../../../common/contants';
import { HotRecommendWrapper } from './style';

import ThemeHeaderRecommend from './../../../../../../components/theme-header-recommend/index';
import SongsCover from './../../../../../../components/songs-cover/index';
import { getHotRecommendAction } from '../../store/actions';

const HotRecommend = memo(() => {

  // state

  // redux hooks
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend'])
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    return () => {
    };
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title='热门推荐' keywords={['华语', '流行', '民族', '摇滚', '电子']}/>
      <div className='recommend-list'>
        {
          hotRecommend.map(item => {
            return <SongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend