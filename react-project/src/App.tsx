import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ErrorBoundary>
      <Layout>Main content</Layout>
    </ErrorBoundary>
  );
}

export default App;
