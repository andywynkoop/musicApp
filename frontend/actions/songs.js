export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const fetchSongs = () => dispatch => 
  $.ajax({ method: 'get', url: '/api/songs' })
    .then(songs => dispatch(receiveSongs(songs)));

export const receiveSongs = songs => ({ type: RECEIVE_SONGS, songs });

const createSongAjax = formData => 
  $.ajax({ 
    method: 'post', 
    url: '/api/songs', 
    data: formData,
    contentType: false,
    processData: false
  });

export const createSong = formData => dispatch => 
  createSongAjax(formData)
    .then(song => dispatch(receiveSong(song)));

export const receiveSong = song => ({ type: RECEIVE_SONG, song });