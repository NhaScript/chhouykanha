import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-base-content/70">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn btn-primary mt-4 px-6 py-2 rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
