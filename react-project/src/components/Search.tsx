import { ChangeEvent, Component } from "react";
import Button from "./Button";

type SearchProps = {
  handleValueChange: (value: string) => void;
  value: string;
};

type SearchState = {
  currentValue: string;
};

class Search extends Component<SearchProps, SearchState> {
  currentValue = "";

  constructor(props: SearchProps) {
    super(props);
    const savedValue = this.props.value;
    this.state = {
      currentValue: savedValue,
    };
    console.log("My value is : ", this.state.currentValue);
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const trimmedValue = this.removeTrailingSpaces(this.state.currentValue);

    this.props.handleValueChange(trimmedValue);
  };

  removeTrailingSpaces = (str: string) => {
    return str.trim();
  };

  updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentValue: event.target.value });
  };

  render() {
    return (
      <div className="Search">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => this.updateValue(e)}
          value={this.state.currentValue}
        />
        <Button className="SearchButton" handleClick={this.handleClick}>
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
