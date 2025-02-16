import React from "react";
import "./CyberPortfolio.css"; // Import the CSS file

const CyberPortfolio = () => {
  return (
    <div className="cyber-portfolio">
      {/* Header with Timeline Wallpaper */}
      <header className="timeline-wallpaper">
        <div className="overlay">
          <h1>John Doe</h1>
          <p>Cybersecurity Expert</p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><a href="#experience"><i className="fas fa-briefcase"></i> Experience</a></li>
          <li><a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
          <li><a href="#blog"><i className="fas fa-blog"></i> Blog</a></li>
          <li><a href="#awards"><i className="fas fa-trophy"></i> Awards</a></li>
          <li><a href="#tools"><i className="fas fa-tools"></i> Tools</a></li>
          <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="character"></div>
        <p>Details about your experience...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="character"></div>
        <p>Details about your projects...</p>
      </section>

      <section id="blog">
        <h2>Blog</h2>
        <div className="character"></div>
        <p>Details about your blog...</p>
      </section>

      <section id="awards">
        <h2>Awards</h2>
        <div className="character"></div>
        <p>Details about your awards...</p>
      </section>

      <section id="tools">
        <h2>Cybersecurity Tools</h2>
        <div className="character"></div>
        <p>Details about the tools you use...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="character"></div>
        <p>Email: john.doe@example.com</p>
        <p>Phone: +123 456 7890</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </section>
    </div>
  );
};

export default CyberPortfolio;