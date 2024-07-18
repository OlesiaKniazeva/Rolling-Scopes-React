export const SEARCH_VALUE_KEY = "searchValue";

export function getStoredSearchTerm(): string {
  return localStorage.getItem(SEARCH_VALUE_KEY) || "";
}
