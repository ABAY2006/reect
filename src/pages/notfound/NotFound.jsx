import { Link } from 'react-router';
import './notfound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/counter" className="btn btn-secondary">
            View Counter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
