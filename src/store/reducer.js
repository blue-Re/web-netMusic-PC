import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/child-pages/recommend/store";
import { reducer as rankingReducer } from "../pages/discover/child-pages/ranking/store";
import { reducer as playReducer } from '../pages/player/store'


const reducers = combineReducers({
  recommend: recommendReducer,
  play: playReducer,
  ranking: rankingReducer
})

export default reducers;