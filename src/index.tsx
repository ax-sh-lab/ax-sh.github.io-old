import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: void;
}) {
  return (
    <section role="alert" className="error__boundary">
      <div className="error__content">
        <h1>Something went wrong:</h1>
        <pre>{error.message}</pre>
        <pre>{JSON.stringify(error)}</pre>
        <button onClick={void resetErrorBoundary}>Try again</button>
      </div>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        //NOTE: reset the state of your app so the error doesn't happen again
      }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
