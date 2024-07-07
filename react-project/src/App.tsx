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
  constructor(props: AppProps) {
    super(props);
    const savedSearchTerm = localStorage.getItem("searchTerm");
    this.state = {
      lastSearchValue: savedSearchTerm || "",
      errorData: "",
    };
  }

  setSearchValue = (value: string) => {
    this.setState({ lastSearchValue: value, errorData: "" });
    localStorage.setItem("searchTerm", value);
  };

  passErrorToResults = (errorData: string) => {
    this.setState({ errorData });
  };

  render() {
    return (
      <ErrorBoundary>
        <Search
          value={this.state.lastSearchValue}
          handleValueChange={this.setSearchValue}
        />

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
