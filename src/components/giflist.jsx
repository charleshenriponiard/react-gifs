import React from 'react';
import Giphy from './giphy';
import App from './../index';


class Giflist extends React.Component {

  render() {
    return(
      this.props.gifs.map((gif, index) => {
        return <Giphy src={gif} className="gif" key={index}/> 
      })
    )
  }
}

export default Giflist;
