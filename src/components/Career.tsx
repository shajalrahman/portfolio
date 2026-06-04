import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>
                  <a href="https://www.exofttechnologies.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Exoft Technologies
                  </a>
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Founded Exoft Technologies to provide innovative web development solutions.
              Building a strong foundation for delivering high-quality full stack development
              services and technical expertise to clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Exoft Technologies</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Freelance Full Stack Developer building scalable web applications.
              Developing responsive web solutions using React.js, Next.js for frontend
              and Node.js, NestJS for backend. Creating end-to-end applications with
              modern technologies and best practices in code architecture and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
