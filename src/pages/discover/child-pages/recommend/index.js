import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannersAction } from './store/actions';

const Recommend = memo((props) => {
  const { getBanners } = props

  useEffect(() => {
    getBanners()
    return () => {

    };
  }, [getBanners]);

  return (
    <div>Recommend</div>
  )
})

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannersAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)