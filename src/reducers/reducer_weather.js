import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return a new instance of state, insert it to state
    return [ action.payload.data, ...state ]
  }
  return state;
}
