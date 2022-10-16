import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../../recommend/store/actions'

import ThemeHeaderRecommend from '../../../../../../components/theme-header-recommend'
import TopRanking from '../../../../../../components/top-ranking'

import { RankingWrapper } from './style'

const Ranking = memo(() => {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(3778678))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(19723756))
    return () => {
    };
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title='榜单' />
      <div className='tops'>
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})

export default Ranking