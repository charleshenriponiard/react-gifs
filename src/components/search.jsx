import React from 'react';

class Search extends React.Component {
  handleChange = (e) => {
    const { searchQuery } = this.props;
    searchQuery(e.target.value);
  }

  render() {
    return (
    <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default Search;
