import { RECEIVE_GIFS } from "../actions/gifActions";

const gifsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GIFS:
      debugger
      return action.gifs;
    default:
      return state;
  }
};

export default gifsReducer;
