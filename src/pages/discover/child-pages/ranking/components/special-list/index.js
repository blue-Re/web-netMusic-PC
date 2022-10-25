import { List, Avatar } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPlayListAllSongsAction, getTopListDetailAction } from '../../store/action'
import { SpecialListWrapper } from './style'


const SpecialList = memo((props) => {

  // const data = []

  const handleSpecialList = (item) => {
    // console.log(item);
    props.getCurrentSongListId(item.id)
    dispatch(getPlayListAllSongsAction(item.id))
  }

  const { topListDetail } = useSelector(state => ({
    topListDetail: state.getIn(['ranking', 'topListDetail'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListDetailAction(1))
    return () => {
    };
  }, [dispatch]);

  return (
    <SpecialListWrapper>
      <div className='special-title'>云音乐特色榜</div>
      <div className='special-list'>
        <List
          itemLayout="horizontal"
          dataSource={topListDetail}
          renderItem={(item, index) => (
            <div onClick={e => handleSpecialList(item)} className='special-list-item'>
              {index === 4 && <div className='all-earth-title'>全球媒体榜</div>}
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.coverImgUrl} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.updateFrequency}
                />
              </List.Item>
            </div>
          )}
        />
      </div>
    </SpecialListWrapper>
  )
})

export default SpecialList