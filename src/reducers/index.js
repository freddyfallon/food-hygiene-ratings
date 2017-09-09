import { combineReducers } from 'redux';
import AuthorityReducer from './reducer_authorities';

const rootReducer = combineReducers({
  authorities: AuthorityReducer
});

export default rootReducer;
