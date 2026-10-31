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
                <h1 className="home-title">
                    Hi, I’m {name}
                </h1>
                <p className="home-description">
                    Frontend Developer with 2 years of experience building responsive web applications using React.js, JavaScript,
                    HTML, CSS, SCSS, and Bootstrap. Skilled in reusable component development, REST API integration, application
                    workflows, and UI optimization. passionate about creating seamless user experiences and continuously learning new technologies.
                </p>
            </Col>

            {/* Right Side Image Tag */}
            <Col lg={4} md={6} sm={12} className="d-flex justify-content-center align-items-center">
                <div className="home-avatar-wrapper">
                    {/* You can replace this src with your image */}
                    <img
                        src={heroAvatar}
                        alt={`${name} Avatar`}
                        className="home-avatar-img"
                    />
                </div>
            </Col>
        </Row>
    );
}

export default Home;