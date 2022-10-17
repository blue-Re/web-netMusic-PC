import { Slider } from 'antd';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { formatDate, getPlaySong, getSizeImage } from '../../../utils/format-utils'

import { getSongDetailAction } from '../store/actions';

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

const PlayerBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { currentSong = {} } = useSelector(state => ({
    currentSong: state.getIn(['play', 'currentSong'])
  }), shallowEqual)
  const dispatch = useDispatch()

  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
    return () => {
    };
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    return () => {
    };
  }, [currentSong]);

  // 其他处理
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  // 处理函数
  const playMusic = () => {
    isPlaying? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  };

  const timeUpdate = (event) => {
    if (!isChanging) {
      setCurrentTime(event.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play' onClick={e => playMusic()}></button>
          <button className='sprite_player next'></button>
        </Control>

        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src={getSizeImage(picUrl, 45)} alt=''/>
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <a href='#/' className='singer-name'>{singerName}</a>
            </div>
            <div className='progress'>
              <Slider 
                defaultValue={30} 
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
               />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <div className='duration'>{showDuration}</div>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playList'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlaybarWrapper>
  )
})

export default PlayerBar