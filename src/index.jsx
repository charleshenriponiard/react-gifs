import React from 'react';
import ReactDOM from 'react-dom';
import Giphy from 'giphy-api';

import Gif from './components/giphy';
import Giflist from './components/giflist';
import Search from './components/search';

import '../assets/stylesheets/application.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "icD51ZeIerfQHYU6Sg"
    };
  }

  handleGif = (id) => {
    this.setState({ selectedGif: id });
  }

  searchFunction = (query) => {
    if (query !== "") {
      Giphy('hkHNiQ5BuHfbTcdDPeQEgePnjkRn5mXe').search({
        q: { query },
        limit: 10,
        rating: 'g',
        "fixed_width_small":{
          "url":"http:\/\/media2.giphy.com\/media\/26tP2R0RSoHylXp6M\/100w.gif",
          "width":"100",
          "height":"57",
          "size":"85222",
          "mp4":"http:\/\/media2.giphy.com\/media\/26tP2R0RSoHylXp6M\/100w.mp4",
          "mp4_size":"8882",
          "webp":"http:\/\/media2.giphy.com\/media\/26tP2R0RSoHylXp6M\/100w.webp",
          "webp_size":"49462"
       },
       "fixed_width_small_still":{
          "url":"http:\/\/media2.giphy.com\/media\/26tP2R0RSoHylXp6M\/100w_s.gif",
          "width":"100",
          "height":"57"
       }
      }, (err, res) => {
        this.setState({ gifs: res.data });
      });
    } else {
      this.setState({ gifs: [] });
    }
  }

  render() {
    const { gifs, selectedGif } = this.state;
    return (
      <div>
        <div className="left-scene">
          <Search searchQuery={this.searchFunction} />
          <Gif src={selectedGif} />
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <Giflist gifs={gifs} clickedGif={this.handleGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
