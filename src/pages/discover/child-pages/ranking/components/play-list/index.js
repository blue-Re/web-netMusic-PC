import { Button, Table } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getPlayListAllSongsAction } from '../../store/action';
import { formatMinuteSecond, formatMonthDay } from './../../../../../../utils/format-utils';
import { getSongDetailAction } from '../../../../../player/store';

import CommentList from '../comment-list';

import { PlayListAllSongsWrapper } from './style'

const PlayListAllSong = memo((props) => {
  const { currentSongListId } = props

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))  
  }

  const columns = [
    {
      title: '',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => {
        return index + 1
      }
    },
    {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      width: 400,
      render: (text, record, index) => {
        return (
          <div className='table-title'>
            <div>{record.name}</div>
            <div className='operate'>
              <button className='btn sprite_02 play' onClick={e => playMusic(record)}></button>
              <button className='btn sprite_icon2 addto'></button>
              <button className='btn sprite_02 favor'></button>
            </div>
          </div>
        )
      }
    },
    {
      title: '时长',
      dataIndex: 'publishTime',
      key: 'publishTime',
      render: (text, record, index) => {
        return formatMinuteSecond(record.dt, 'mm:ss')
      }
    },
    {
      title: '歌手',
      dataIndex: 'ar[0].name',
      key: 'singers',
      render: (text, record, index) => {
        const result = record.ar.map(item => item.name).toString()
        return result
      }
    },
  ];

  const { playListAllSongs, topListDetail } = useSelector(state => ({
    playListAllSongs: state.getIn(['ranking', 'playListAllSongs']),
    topListDetail: state.getIn(['ranking', 'topListDetail']),
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayListAllSongsAction(19723756))
    return () => {
    };
  }, [dispatch]);

  const currentSongList = topListDetail.length && topListDetail.find(item => item.id === currentSongListId)

  return (
    <PlayListAllSongsWrapper>
      <div className='top-header-wrapper'>
        <div className='top-header'>
          <img className='top-avatar' src={currentSongList.coverImgUrl} alt='' />
          <div className='right-context'>
            <div className='top-text'>
              <div className='title'>{currentSongList.name}</div>
              <div className='text'>更新时间：{formatMonthDay(currentSongList.updateTime)} {currentSongList.updateFrequency}</div>
            </div>
            <div className='bottom-buttons'>
              <Button>播放</Button>
              <Button>+</Button>
              <Button>收藏</Button>
              <Button>分享</Button>
              <Button>下载</Button>
              <Button>评论</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-content'>
        <div className='bottom-title'>
          <div className='song-lists'>歌曲列表</div>
          <div className='play-count'>播放量: <span style={{ color: 'red' }}>{currentSongList.playCount}</span>次</div>
        </div>
      </div>
      <Table
        dataSource={playListAllSongs}
        columns={columns}
        rowKey={record => record.id}
        bordered
      />;

      <CommentList currentSongListId={currentSongListId} />
    </PlayListAllSongsWrapper>
  )
})

export default PlayListAllSong