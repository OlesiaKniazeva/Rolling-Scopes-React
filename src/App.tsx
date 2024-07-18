import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/error/ErrorPage";
import Results from "./components/results/Results";
import RootLayout from "./components/layout/Layout";
import { getStoredSearchTerm } from "./local-storage-data/localStorageData";

import {
  searchAction,
  resultsLoader,
} from "./components/utils/loaders-actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <Navigate
            to={`/search?page=1&q=${encodeURIComponent(getStoredSearchTerm())}`}
            replace
          />
        }
      />{" "}
      <Route
        path="search"
        element={<Results />}
        loader={resultsLoader}
        action={searchAction}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
