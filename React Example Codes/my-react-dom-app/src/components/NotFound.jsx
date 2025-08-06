import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Alert variant="danger" className="text-center shadow">
          <Alert.Heading>404 - Page Not Found</Alert.Heading>
          <p>The page you're looking for doesn't exist.</p>
          <hr />
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </Alert>
      </div>
    </div>
  );
}

export default NotFound;
