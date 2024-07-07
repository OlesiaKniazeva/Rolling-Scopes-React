import { Component } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import Button from "./components/Button";
import "./App.css";

type AppProps = object;

type AppState = {
  lastSearchValue: string;
};

class App extends Component<AppProps, AppState> {
  state = {
    lastSearchValue: "",
  };

  setSearchValue = (value: string) => {
    console.log("Update value: ", value);
    this.setState({ lastSearchValue: value });
  };

  generateError() {
    throw new Error("Something went wrong");
  }

  render() {
    return (
      <>
        <Search handleValueChange={this.setSearchValue} />
        <Button className="ErrorButton" handleClick={this.generateError}>
          Error Button
        </Button>
        <hr />
        <Results searchValue={this.state.lastSearchValue} />
      </>
    );
  }
}
export default App;
