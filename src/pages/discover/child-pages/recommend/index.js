import React, { memo } from 'react'

import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper
} from './style';

import TopBanner from './components/top-banner/index';
import HotRecommend from './components/hot-recommend';
import NewAlbum from './components/new-album';
import Ranking from './components/ranking';


const Recommend = memo((props) => {

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend

// const Recommend = memo((props) => {
//   const { getBanners } = props

//   useEffect(() => {
//     getBanners()
//     return () => {

//     };
//   }, [getBanners]);

//   return (
//     <div>Recommend</div>
//   )
// })

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend)