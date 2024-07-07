import { Component } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import Button from "./components/Button";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

type AppProps = object;

type AppState = {
  lastSearchValue: string;
  errorData: string;
};

class App extends Component<AppProps, AppState> {
  state = {
    lastSearchValue: "",
    errorData: "",
  };

  setSearchValue = (value: string) => {
    console.log("Update value: ", value);
    this.setState({ lastSearchValue: value, errorData: "" });
  };

  passErrorToResults = (errorData: string) => {
    this.setState({ errorData });
  };

  render() {
    return (
      <ErrorBoundary>
        <Search handleValueChange={this.setSearchValue} />

        <Button
          className="ErrorButton"
          handleClick={() =>
            this.passErrorToResults("Error data passed from Button component")
          }
        >
          Error Button
        </Button>
        <hr />
        <Results
          searchValue={this.state.lastSearchValue}
          errorData={this.state.errorData}
        />
      </ErrorBoundary>
    );
  }
}

export default App;
