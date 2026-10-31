import { Row, Col } from 'react-bootstrap';
import './css/home.css';
import heroAvatar from './assets/abdulrouf.png';

function Home() {
    // Read name dynamically from environment variables (.envdevelopment / .env.development)
    const name = import.meta.env.VITE_NAME || "Rouf";

    return (
        <Row id="home" className="home-section align-items-center">
            {/* Left Content */}
            <Col lg={8} md={6} sm={12} className="home-content">
                <h1 className="home-title reveal delay-1">
                    Hi, I’m <span className="home-name-gradient">{name}</span>
                </h1>

                <p className="home-description reveal delay-3">
                    Frontend Developer with 2 years of experience building responsive web applications using React.js, JavaScript,
                    HTML, CSS, SCSS, and Bootstrap. Skilled in reusable component development, REST API integration, application
                    workflows, and UI optimization. Passionate about creating seamless user experiences and continuously learning new technologies.
                </p>

                {/* Hero Action CTA Buttons */}
                <div className="home-cta-group reveal delay-4">
                    <a href="#projects" className="home-btn-primary">
                        <span>Explore Projects</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="home-btn-arrow">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <a href="#contact" className="home-btn-secondary">
                        <span>Get In Touch</span>
                    </a>
                </div>
            </Col>

            {/* Right Side Image Tag with Floating Halo */}
            <Col lg={4} md={6} sm={12} className="d-flex justify-content-center align-items-center">
                <div className="home-avatar-container reveal-scale delay-2">
                    {/* Glowing animated background halo */}
                    <div className="home-avatar-halo" aria-hidden="true"></div>
                    <div className="home-avatar-halo-ring" aria-hidden="true"></div>
                    <div className="home-avatar-wrapper">
                        <img
                            src={heroAvatar}
                            alt={`${name} Avatar`}
                            className="home-avatar-img"
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Home;