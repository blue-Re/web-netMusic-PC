import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/child-pages/recommend/store";

const reducers = combineReducers({
  recommend: recommendReducer
})

export default reducers;