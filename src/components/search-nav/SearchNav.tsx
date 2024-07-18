import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./SearchNav.module.css";
import {
  Form,
  useNavigation,
  useSearchParams,
  useSubmit,
  useBeforeUnload,
} from "react-router-dom";
import { useRef, useCallback } from "react";

function SearchNav() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";
  const [searchValue, setSearchValue] = useLocalStorage();
  const submit = useSubmit();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      setSearchValue(inputRef.current.value);
    }
    submit(event.currentTarget);
  };

  useBeforeUnload(
    useCallback(() => {
      if (inputRef.current) {
        setSearchValue(inputRef.current.value);
      }
    }, [setSearchValue]),
  );

  return (
    <Form
      method="post"
      action="/search"
      className={styles.search}
      onSubmit={handleSubmit}
    >
      <label htmlFor="search">Search</label>
      <input
        ref={inputRef}
        type="text"
        id="search"
        name="q"
        placeholder="Please, type your request here"
        defaultValue={searchParams.get("q") || searchValue}
      />
      <button type="submit" className="SearchButton" disabled={isSubmitting}>
        {isSubmitting ? "Searching..." : "Search"}
      </button>
    </Form>
  );
}

export default SearchNav;
