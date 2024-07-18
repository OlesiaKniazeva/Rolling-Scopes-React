import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;
  let errorCode: string | null = null;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
    errorCode = error.status.toString();
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div id="error-page" className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Error Message: {errorMessage}</p>
      {errorCode && <p>Error: {errorCode}</p>}
      <details>Stack Trace: {error.stack}</details>
      <p>
        Return <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
