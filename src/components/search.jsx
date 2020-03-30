import React from 'react';
import Giphy from 'giphy-api'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.searchQuery(e.target.value)
  } 
  
  render() {
    return (
    <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
  
};

export default Search;
