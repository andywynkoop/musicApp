import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSong } from './actions/songs';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      audio: ""
    }

    this.audio = React.createRef();
    this.save = this.save.bind(this);
    this.audioUpload = this.audioUpload.bind(this);
    this.photoUpload = this.photoUpload.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  audioUpload(e) {
    const file = e.target.files[0];
    this.setState({ audio: file });
  }

  photoUpload(e) {
    const photos = e.target.files;
    this.setState({ photos });
  }


  save() {
    const song = new FormData();
    const { name, audio, photos } = this.state;
    song.append('song[name]', name);
    if (audio) song.append('song[audio]', audio);
    if (photos) {
      for(let i = 0; i < photos.length; i++) {
        song.append('song[photos][]', photos[i]);
      }
    }
    this.props.save(song)
      .then(() => 
        this.setState({ name: '', audio: '' }, () => 
          this.audio.current.value = ""
        )
      );
  }

  render() {
    return <>
      <h3>
        Name: 
        <input 
          type="text" 
          value={this.state.name} 
          onChange={this.update('name')}
          placeholder="Enter Song Name"
        />
      </h3>
      <h3>  
        Audio File: 
        <input 
          type="file"
          ref={this.audio}
          onChange={this.audioUpload}
        />
      </h3>
      <h3>
        Photos:
        <input type="file" onChange={this.photoUpload} multiple/>
      </h3>
      <button onClick={this.save}>Save</button>
    </>
  }
}

const mdtp = dispatch => ({ save: song => dispatch(createSong(song))});

export default connect(null, mdtp)(SongForm);