import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { name, audio, photos } = this.props.data;
    return <>
      <div className="song">
        <h4>
          {name}
        </h4>
        <audio controls>
          <source src={audio} type="audio/mpeg" />
        </audio>
        {photos.map(photo => <img key={Math.random()} src={photo} />)}
      </div>
    </>
  }
}

export default Song;
