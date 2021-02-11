import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }
  }

  handleSearchChange = event=> {
    this.setState({ searchText: event.target.value })
  }

  handleSearchClick = () => {
    if (this.props.onSearchClick) {
      this.props.onSearchClick(this.state.searchText);
    }
  }

  handleSearchTypeClick = event => {
    if (this.props.onSearchTypeClick) {
      this.props.onSearchTypeClick(event.target.value);
    }
  }

  render() {
    return (
      <div className="app-header">
        <div className="app-logo" onClick={() => this.props.renderHomePageData()}>IMDb</div>
        <div className="app-search">
          <select className="search-sorting-type" onChange={this.handleSearchTypeClick}>
            <option value="" disabled selected>Select Search</option>
            <option value="movie">Movie Name</option>
            <option value="director">Director Name</option>
          </select>
          <input
            className="input-search"
            type="text"
            placeholder=""
            value={this.state.searchText}
            onChange={this.handleSearchChange}
          />
          <div 
            className="search-btn" 
            onClick={this.handleSearchClick}
          >
            Search
          </div>
        </div>
      </div>
    )
  }
}

export default Header