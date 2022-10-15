import React, { memo } from 'react'
import { HeaderWrapper } from './style';

const ThemeHeaderRecommend = memo((props) => {
  const { title, keywords = [] } = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map(item => {
              return (
                <div key={item} className='item'>
                  <a href='222' >{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

export default ThemeHeaderRecommend