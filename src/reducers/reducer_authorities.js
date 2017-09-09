import { FETCH_AUTHORITIES } from '../actions/fetchAuthorities'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_AUTHORITIES:
      return action.payload.data.authorities ;
  }
  return state;
}
