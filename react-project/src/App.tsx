import "./App.css";
import Layout from "./components/layout/Layout";
import Search from "./components/search-nav/Search";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Results from "./components/search-results/Results";

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Search />
        <Results />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
