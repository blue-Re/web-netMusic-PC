import { List, Avatar, Button } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSettleSingersAction } from '../../store/actions'
import { SettleSingerWrapper } from './style'

const SettleSinger = memo(() => {

  const { settleSingers } = useSelector(state => ({
    settleSingers: state.getIn(['recommend', 'settleSingers'])
  }), shallowEqual)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getSettleSingersAction())
    return () => {
    };
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <div className='top-info'>
        <div className='settle-singers'>入驻歌手</div>
        <a className='find-all' href='/#'>查看全部 {'>'} </a>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={settleSingers}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar className='avatar' src={item.picUrl} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.alias.length ? item.alias : '暂无艺名'}
            />
          </List.Item>
        )}
      />
      <div className='footer-button'>
        <Button onClick={e => window.open('https://music.163.com/st/musician')}>申请成为网易音乐人</Button>
      </div>
    </SettleSingerWrapper>
  )
})

export default SettleSinger