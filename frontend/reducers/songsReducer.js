import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/songs.js';

export default (state = {}, action) => {
  const { type, song, songs } = action;
  switch(type) {
    case RECEIVE_SONG:
      return Object.assign({}, state, { [song.id]: song });
    case RECEIVE_SONGS:
      return songs;
    default:
      return state;
  }
  return state;
}