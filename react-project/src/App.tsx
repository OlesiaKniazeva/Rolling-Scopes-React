import { Component } from "react";
import Results from "./components/Results";
import Search from "./components/Search";

class App extends Component {
  state = {
    lastSearchValue: "",
  };

  setSearchValue = (value: string) => {
    console.log("Update value: ", value);
    this.setState({ lastSearchValue: value });
  };

  render() {
    return (
      <>
        <Search handleValueChange={this.setSearchValue} />
        <Results searchValue={this.state.lastSearchValue} />
      </>
    );
  }
}

export default App;
