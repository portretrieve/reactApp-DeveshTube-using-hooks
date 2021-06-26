import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { userInput: "" };

  onInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.userInput);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              name="videoSearch"
              id="videoSearch"
              value={this.state.userInput}
              onChange={this.onInputChange}
              placeholder="Type to search video"
            />
            <br /> <br />
            <button>Click to Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
