import { Redirect } from "react-router-dom"

import DisCover from "../pages/discover"
import Recommend from './../pages/discover/child-pages/recommend/index';
import Ranking from './../pages/discover/child-pages/ranking/index';
import DJRadio from './../pages/discover/child-pages/djradio/DjRadio';
import Album from './../pages/discover/child-pages/album/index';
import Songs from "../pages/discover/child-pages/songs";
import Artist from './../pages/discover/child-pages/artist/index';


import Mine from "../pages/mine"
import Friend from "../pages/friend"
import Player from './../pages/player/index';



const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: DisCover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/djradio',
        component: DJRadio
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/player',
        component: Player
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
]

export default routes