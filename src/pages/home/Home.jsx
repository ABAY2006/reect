import { Link } from "react-router";
import "./home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyApp</h1>
          <p className="hero-subtitle">
            A modern, professional, and fully responsive React application built with performance and user experience in mind.
          </p>
          <div className="hero-buttons">
            <Link to="/counter" className="btn btn-primary">
              Try Counter
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Responsive</h3>
            <p>Lightning-fast performance with responsive design that works seamlessly on all devices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Beautiful, minimalist design inspired by industry leaders like Stripe and Vercel.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>Accessible</h3>
            <p>Fully accessible UI with proper contrast, focus states, and keyboard navigation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Built with best practices and security considerations for production use.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile First</h3>
            <p>Optimized for mobile devices with touch-friendly interactions and layouts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Ready to Deploy</h3>
            <p>Production-ready code with optimized builds and seamless deployment support.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>100%</h3>
            <p>Responsive</p>
          </div>
          <div className="stat-card">
            <h3>A+</h3>
            <p>Accessibility</p>
          </div>
          <div className="stat-card">
            <h3>∞</h3>
            <p>Scalability</p>
          </div>
          <div className="stat-card">
            <h3>0ms</h3>
            <p>Latency</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Explore the Counter application to see modern React in action.</p>
        <Link to="/counter" className="btn btn-primary btn-lg">
          Visit Counter App →
        </Link>
      </section>
    </div>
  );
}

export default Home;