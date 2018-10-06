export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const fetchSongs = () => dispatch => 
  $.ajax({ method: 'get', url: '/api/songs' })
    .then(songs => dispatch(receiveSongs(songs)));

export const receiveSongs = songs => ({ type: RECEIVE_SONGS, songs });

export const createSong = song => dispatch => 
  $.ajax({ method: 'post', url: '/api/songs', data: { song }})
    .then(song => dispatch(receiveSong(song)));

export const receiveSong = song => ({ type: RECEIVE_SONG, song });