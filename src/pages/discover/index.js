import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '../../common/local-data'
import http from './../../service/index';

import {
  DiscoverWrapper,
  TopMenu
} from './style';

const DisCover = memo((props) => {
  const { route } = props



  useEffect(() => {
    (async () => {
      const data = await http.get('/banner')      
      console.log(data);
    })() 

    return () => {
    };
  }, []);


  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default DisCover