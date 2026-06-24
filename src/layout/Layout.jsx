import { Outlet, Link } from "react-router";
import "./layout.css";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span>
            <span className="logo-text">MyApp</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/todos" className="nav-link">Todos</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p>&copy; 2024 MyApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;