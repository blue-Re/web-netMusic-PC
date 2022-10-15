import React, { memo } from 'react'

import { HotRecommendWrapper } from './style';

import ThemeHeaderRecommend from './../../../../../../components/theme-header-recommend/index';

const HotRecommend = memo(() => {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title='热门推荐' keywords={['华语', '流行', '民族', '摇滚', '电子']}/>
    </HotRecommendWrapper>
  )
})

export default HotRecommend