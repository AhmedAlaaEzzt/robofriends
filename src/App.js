import CardList from "./components/card-list/card-list";
import { robots } from "./Data/robots";
import SearchBox from "./components/search-box/search-box";
import { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      if (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return robot;
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
