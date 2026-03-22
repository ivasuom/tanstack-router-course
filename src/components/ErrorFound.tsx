import { ErrorComponentProps } from "@tanstack/react-router";

const ErrorFound = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <p>Oops! {error.message}</p>
      <button onClick={reset} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
};

export default ErrorFound;
