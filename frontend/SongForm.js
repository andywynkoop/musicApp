import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSong } from './actions/songs';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }

    this.save = this.save.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  save() {
    const song = Object.assign({}, this.state);
    this.props.save(song).then(() => this.setState({ name: ''}));
  }

  render() {
    return <>
      <input 
        type="text" 
        value={this.state.name} 
        onChange={this.update('name')}
        placeholder="Enter Song Name"
      />
      <button onClick={this.save}>Save</button>
    </>
  }
}

const mdtp = dispatch => ({ save: song => dispatch(createSong(song))});

export default connect(null, mdtp)(SongForm);