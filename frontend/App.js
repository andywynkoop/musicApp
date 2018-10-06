import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './Song';
import SongForm from './SongForm';
import { fetchSongs } from './actions/songs';

class App extends Component {
  componentDidMount() { this.props.fetchSongs() }
  render() {
    const { songs } = this.props;
    if (!songs) return <div />;
    return <>
      <h1>Music App</h1>
      <h2>My Songs:</h2>
      <div className="songs">
        {songs.map(song => <Song key={song.id} data={song} />)}
      </div>
      <h2>Add New Song: </h2>
      <SongForm />
    </>
  }
}

const mstp = ({ entities: { songs }}) => ({ songs: Object.values(songs) });

const mdtp = dispatch => ({ fetchSongs: () => dispatch(fetchSongs()) });

export default connect(mstp, mdtp)(App);