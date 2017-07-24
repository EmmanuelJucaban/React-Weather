import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="input-group">
          <input/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
