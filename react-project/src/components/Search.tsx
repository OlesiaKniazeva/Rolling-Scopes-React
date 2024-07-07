import { ChangeEvent, Component } from "react";

type SearchProps = {
  handleValueChange: (value: string) => void;
};

class Search extends Component<SearchProps> {
  value = "";

  handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    this.props.handleValueChange(this.removeTrailingSpaces(this.value));
  }

  removeTrailingSpaces(str: string) {
    return str.trim();
  }

  updateValue(event: ChangeEvent<HTMLInputElement>) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => this.updateValue(e)}
        />
        <button onClick={(e) => this.handleClick(e)}>Search</button>
      </div>
    );
  }
}

export default Search;
