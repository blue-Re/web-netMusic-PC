import { Button } from 'antd'
import React, { memo } from 'react'

import { UserLoginWrapper } from './style'

const UserLogin = memo(() => {
  return (
    <UserLoginWrapper>
      <div className='login-box'>
        <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
        <Button type='danger' className='login-button'>用 户 登 录</Button>
      </div>
    </UserLoginWrapper>
  )
})

export default UserLogin