import React from 'react';
import Giflist from './giflist';


class Giphy extends React.Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.src}/giphy.gif?cid=hkHNiQ5BuHfbTcdDPeQEgePnjkRn5mXe&amp;rid=giphy.gif`;
    return (
      <img src={src} className="gif"/>
    )
  }

};

export default Giphy;
