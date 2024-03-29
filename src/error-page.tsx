import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
      <Link to="/" className="text-primaryBlue">
        Go back to the home page
      </Link>
    </div>
  );
}
