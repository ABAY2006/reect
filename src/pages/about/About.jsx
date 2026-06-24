import './about.css';

function About() {
  return (
    <div className="about">
      {/* About Header */}
      <section className="about-header">
        <h1>About MyApp</h1>
        <p className="lead">
          A modern, professional React application showcasing best practices in UI/UX design, performance optimization, and developer experience.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We believe that great software starts with great design. MyApp is built on the principles of simplicity, elegance, and functionality. Our mission is to provide a seamless, intuitive, and delightful user experience.
            </p>
            <p>
              Every detail has been carefully considered, from the color palette to the animation timing, ensuring that users enjoy every interaction.
            </p>
          </div>
          <div className="about-highlight">
            <div className="highlight-box">
              <div className="highlight-icon">🎯</div>
              <h3>Purpose</h3>
              <p>Demonstrate modern React patterns and design principles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="about-section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">⚛</div>
            <h3>React 19</h3>
            <p>Latest React features with hooks and modern patterns for building interactive UIs.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🛣</div>
            <h3>React Router</h3>
            <p>Powerful client-side routing for seamless navigation between pages.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">⚡</div>
            <h3>Vite</h3>
            <p>Ultra-fast build tool and development server for an optimal development experience.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🎨</div>
            <h3>Modern CSS</h3>
            <p>CSS Custom Properties, Flexbox, and CSS Grid for responsive, maintainable styling.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach ensuring perfect display on all screen sizes.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">♿</div>
            <h3>Accessibility</h3>
            <p>WCAG compliant with proper semantic HTML and ARIA attributes.</p>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="about-section">
        <h2 className="section-title">Design Principles</h2>
        <div className="principles-grid">
          <div className="principle-item">
            <h3>01. Simplicity</h3>
            <p>Clean, minimal interface that reduces cognitive load and improves usability.</p>
          </div>
          <div className="principle-item">
            <h3>02. Consistency</h3>
            <p>Uniform design language across all components and pages for predictability.</p>
          </div>
          <div className="principle-item">
            <h3>03. Clarity</h3>
            <p>Clear visual hierarchy and typography that guides user attention.</p>
          </div>
          <div className="principle-item">
            <h3>04. Performance</h3>
            <p>Optimized code and efficient rendering for lightning-fast interactions.</p>
          </div>
          <div className="principle-item">
            <h3>05. Accessibility</h3>
            <p>Inclusive design that works for everyone, regardless of abilities.</p>
          </div>
          <div className="principle-item">
            <h3>06. Delightful</h3>
            <p>Thoughtful micro-interactions and animations that bring joy to users.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-team">
        <h2 className="section-title">Built with ❤️</h2>
        <div className="team-message">
          <p>
            This project was created with a focus on modern development practices, demonstrating how to build professional, production-ready applications with React.
          </p>
          <p>
            Whether you're learning React or looking for inspiration for your next project, we hope MyApp serves as a valuable resource and reference implementation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Responsive</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">A11y</div>
          <div className="stat-label">Accessible</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">⚡</div>
          <div className="stat-label">Fast</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">📦</div>
          <div className="stat-label">Optimized</div>
        </div>
      </section>
    </div>
  );
}

export default About;