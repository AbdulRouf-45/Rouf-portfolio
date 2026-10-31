import React from "react"
import './css/header.css'
import AbdulRouf from "./assets/AR-logo-transparent.png";
import { Col, Row } from "react-bootstrap";

function Header() {
    return (
        <Row className="header-section">
            <Col md="6">
                <img src={AbdulRouf} alt="Abdul Rouf" />
            </Col>

            <Col md="6">
                <ul className="header-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#contact">Get In Touch</a></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Header;