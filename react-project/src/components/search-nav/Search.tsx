import Button from "../button/Button";
import { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState(() => {
    return localStorage.getItem("searchValue") || "";
  });

  function saveSearchItem(searchValue: string) {
    localStorage.setItem("searchValue", searchValue);
  }

  function updateSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="Search">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={updateSearchValue}
        value={searchValue}
      />
      <Button
        className="SearchButton"
        handleClick={() => {
          saveSearchItem(searchValue);
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default Search;
