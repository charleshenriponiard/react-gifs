import React from 'react';
import App from './../index';
import Giphy from './giphy';

class Giflist extends React.Component {
  render() {
    console.log('xd');
    const { gifs, clickedGif } = this.props;
    return (
      gifs.map((gif) => {
        return <Giphy src={gif} className="gif" key={`gif-${gif.id}`} clickedGif={clickedGif} />;
      })
    );
  }
}

export default Giflist;
