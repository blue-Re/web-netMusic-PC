import { List, Avatar } from 'antd';
import React, { memo, useEffect } from 'react'
import { HotAnchorWrapper } from './style';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getHotAnchorAction } from '../../store/actions';

const HotAnchor = memo(() => {

  const { hotAnchor } = useSelector(state => ({
    hotAnchor: state.getIn(['recommend', 'hotAnchor'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotAnchorAction())
    return () => {
    };
  }, [dispatch]);

  return (
    <HotAnchorWrapper>
      <div className='top-info'>热门主播</div>
      <List
        itemLayout="horizontal"
        dataSource={hotAnchor}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar className='avatar' src={item.picUrl} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.rcmdtext}
            />
          </List.Item>
        )}
      />
    </HotAnchorWrapper>
  )
})

export default HotAnchor