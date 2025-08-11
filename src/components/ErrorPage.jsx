import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Oops! this page doesn't exist!</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export { ErrorPage };
