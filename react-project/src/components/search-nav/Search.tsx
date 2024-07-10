import Button from "../button/Button";
function Search() {
  return (
    <div className="Search">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        // onChange={(e) => this.updateValue(e)}
        // value={this.state.currentValue}
      />
      <Button className="SearchButton">Search</Button>
    </div>
  );
}

export default Search;
