import { useState, useCallback } from "react";
import { SEARCH_VALUE_KEY } from "../local-storage-data/localStorageData";

const useLocalStorage = () => {
  const initialValue = "";

  const [value, setValueState] = useState(() => {
    try {
      const item = localStorage.getItem(SEARCH_VALUE_KEY);
      return item ? item : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback((newValue: string) => {
    try {
      localStorage.setItem(SEARCH_VALUE_KEY, newValue);
      setValueState(newValue);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [value, setValue] as const;
};

export default useLocalStorage;
