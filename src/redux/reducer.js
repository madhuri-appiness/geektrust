import { combineReducers } from "redux";
import commonReducers from './common-reducer';

const appReducer =combineReducers({
    commonreducer:commonReducers,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  export default rootReducer;