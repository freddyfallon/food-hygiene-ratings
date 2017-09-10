import { combineReducers } from 'redux';
import AuthorityReducer from './reducer_authorities';
import RatingsReducer from './reducer_ratings';

const rootReducer = combineReducers({
  authorities: AuthorityReducer,
  ratings : RatingsReducer
});

export default rootReducer;
