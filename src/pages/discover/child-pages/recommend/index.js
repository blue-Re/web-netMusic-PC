import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from './store/actions';


const Recommend = memo((props) => {

  // 组件和redux关联，获取数据进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  console.log(topBanners)
  
  useEffect(() => {
    dispatch(getTopBannersAction())

    return () => {
    };
  }, [dispatch]);

  return (
    <div>Recommend</div>
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