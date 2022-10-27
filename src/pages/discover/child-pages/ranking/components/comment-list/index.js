import React, { memo, useEffect } from 'react'

import { CommentListWrapper } from './style';
import { Button, Input, List, Avatar } from 'antd';

import { SmileOutlined, CustomerServiceOutlined, LikeTwoTone } from '@ant-design/icons'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getCommentInfoAction } from '../../store/action';
import { formatDate } from './../../../../../../utils/format-utils';

const CommentList = memo((props) => {
  const { currentSongListId } = props


  const { commentInfo } = useSelector(state => ({
    commentInfo: state.getIn(['ranking', 'commentInfo'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommentInfoAction(currentSongListId))
    return () => {
    };
  }, [currentSongListId, dispatch]);

  return (
    <CommentListWrapper>
      <div className='comment-header'>
        <h2 className='comment-title'>评论列表</h2>
        <span className='comment-count'>共 213991239 条评论</span>
      </div>

      <div className='comment-banner'>
        <div className='comment-banner-top'>
          <img className='comment-avatar' src='http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50' alt='' />
          <Input.TextArea rows={2} showcount='true' maxLength={100} className='comment-input' />
        </div>
        <div className='comment-banner-bottom'>
          <div className='emojis'>
            <span>
              <SmileOutlined />
            </span>
            <span>
              <CustomerServiceOutlined />
            </span>
          </div>
          <div className='comment-btn'>
            <Button>评 论</Button>
          </div>
        </div>

      </div>

      <div className='comment-list'>
        <List
          itemLayout="horizontal"
          dataSource={commentInfo.hotComments}
          header={<div>精彩评论</div>}
          bordered
          split
          renderItem={item => (
            <List.Item
              extra={
                <div style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}>
                  <span><LikeTwoTone />({item.likedCount})</span>
                  <span>回复</span>
                </div>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.user.avatarUrl} />}
                title={
                  <div>
                    <a href="https://ant.design">{item.user.nickname}</a>
                    <span style={{ fontSize: 12, marginLeft: 20 }}>{formatDate(item.time, 'yyyy年M月dd日 hh:mm:ss')}</span>
                  </div>
                }
                description={item.content}
              />
            </List.Item>
          )}
        />
        <List
          itemLayout="horizontal"
          dataSource={commentInfo.comments}
          header={<div>最新评论({commentInfo.total})</div>}
          bordered
          loadMore
          split
          renderItem={item => (
            <List.Item
              extra={
                <div style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}>
                  <span><LikeTwoTone />({item.likedCount})</span>
                  <span>回复</span>
                </div>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.user.avatarUrl} />}
                title={
                  <div>
                    <a href="https://ant.design">{item.user.nickname}</a>
                    <span style={{ fontSize: 12, marginLeft: 20 }}>{formatDate(item.time, 'yyyy年M月dd日 hh:mm:ss')}</span>
                  </div>
                }
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>

    </CommentListWrapper>
  )
})

export default CommentList