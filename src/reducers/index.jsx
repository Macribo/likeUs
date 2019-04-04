import { combineReducer, combineReducers } from 'redux';
import reducer from './reducer';
// import reducer2 from './reducer2';
export default combineReducers({
  reducer: reducer
  //   reducer2: reducer2
});
