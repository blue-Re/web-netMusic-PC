import { Slider } from 'antd';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { formatDate, getPlaySong, getSizeImage } from '../../../utils/format-utils'

import { changeSequenceAction, getSongDetailAction, changeCurrentIndexAndSongAction } from '../store/actions';

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

const PlayerBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { currentSong = {}, sequence } = useSelector(state => ({
    currentSong: state.getIn(['play', 'currentSong']),
    sequence: state.getIn(['play', 'sequence'])
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
    audioRef.current.play()
      .then(res => {
        setIsPlaying(true)
      })
      .catch(error => {
        setIsPlaying(false)
      })
    return () => {
    };
  }, [currentSong]);

  // 其他处理
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  // 处理函数
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying]);

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

  const handleEnded = useCallback(() => {
    if (sequence === 2) { // 单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }, [dispatch, sequence])

  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev' onClick={e => changeMusic(-1)}></button>
          <button className='sprite_player play' onClick={e => playMusic()}></button>
          <button className='sprite_player next' onClick={e => changeMusic(1)}></button>
        </Control>

        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src={getSizeImage(picUrl, 45)} alt='' />
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

        <Operator sequence={sequence}>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop' onClick={e => changeSequence()}></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleEnded}/>
    </PlaybarWrapper>
  )
})

export default PlayerBar