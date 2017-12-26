import { FETCH_RATINGS } from '../actions/fetch_ratings';

export default function(state = null, action) {
  // eslint-disable-next-line
  switch(action.type) {
    case FETCH_RATINGS:
      return action.payload ;
  }
  return state;
}
