import React, { memo } from 'react'
import { RecommendWrapper } from './style';

import TopBanner from './components/top-banner/index';


const Recommend = memo((props) => {

  return (
    <RecommendWrapper>
      <TopBanner />
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