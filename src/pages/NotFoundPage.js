import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1>404 Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>)
}

export default NotFoundPage;