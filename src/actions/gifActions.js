import * as APIUtil from "../util/apiUtil";

export const RECEIVE_GIFS = 'RECEIVE_GIFS';

const receiveGifs = gifs => {
  debugger
  return {
    type: RECEIVE_GIFS,
    gifs
  }
};

export const fetchGifs = searchTerm => async dispatch => {
    const res = await APIUtil.fetchGifs(searchTerm);
    const res_1 = await res.json();
    return dispatch(receiveGifs(res_1.data));
  };