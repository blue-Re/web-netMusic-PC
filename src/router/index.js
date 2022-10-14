import DisCover from "../pages/discover"
import Mine from "../pages/mine"
import Friend from "../pages/friend"

const routes = [
  {
    path: '/',
    exact: true,
    component: DisCover
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