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
    }
  }

  searchFunction = (query) => {
    console.log(query);
    Giphy('hkHNiQ5BuHfbTcdDPeQEgePnjkRn5mXe').search({
      q: { query },
      limit: 10,
      rating: 'g'
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
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
            <Giflist gifs={gifs} />
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
