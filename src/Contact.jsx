import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './css/contact.css';

function Contact() {
    const email = import.meta.env.VITE_EMAIL || "abdulroufshaik16@gmail.com";
    const location = import.meta.env.VITE_LOCATION || "Vijayawada, India";
    const phone = import.meta.env.VITE_PHONE || "9346222492";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // States: 'idle' | 'sending' | 'success' | 'error'
    const [status, setStatus] = useState('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('');

        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const res = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => null);

            if (res.ok && data?.ok) {
                setStatus('success');
                setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('error');
                setStatusMessage(data?.error || 'Failed to send message. Please try again or email me directly.');
            }
        } catch (err) {
            console.error('Contact form submission error:', err);
            setStatus('error');
            setStatusMessage('Unable to reach the server. Please check your connection or email me directly.');
        }
    };

    return (
        <div id="contact" className="contact-section">
            <h3 className="section-title">Get In Touch</h3>
            <Row className="align-items-start">
                {/* Left Side: Info */}
                <Col lg={7} md={12} className="reveal-left delay-1">
                    <h4 className="contact-title">
                        Let’s build something great together
                    </h4>
                    <p className="contact-description">
                        I’m actively looking for new opportunities as a Frontend Developer.
                        Whether you have an open role, want to discuss a potential fit, or just want to say hi,
                        feel free to send me a message!
                    </p>

                    <div className="contact-info-list">
                        {/* Email Card */}
                        <a href={`mailto:${email}`} className="contact-info-card reveal delay-1">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <span className="contact-info-label">Email</span>
                                <span className="contact-info-value">{email}</span>
                            </div>
                        </a>

                        {/* Location Card */}
                        <div className="contact-info-card reveal delay-2">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <span className="contact-info-label">Location</span>
                                <span className="contact-info-value">{location}</span>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <a href={`tel:${phone}`} className="contact-info-card reveal delay-3">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <span className="contact-info-label">Phone</span>
                                <span className="contact-info-value">{phone}</span>
                            </div>
                        </a>

                        {/* Availability Card */}
                        <div className="contact-info-card reveal delay-4">
                            <div className="contact-icon-box">
                                <span className="availability-indicator"></span>
                            </div>
                            <div className="contact-info-content">
                                <span className="contact-info-label">Availability</span>
                                <span className="contact-info-value availability-badge">Open to Work</span>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Right Side: Form */}
                <Col lg={5} md={12} className="mt-4 mt-lg-0 reveal-right delay-2">
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="contact-form-group">
                                    <label className="contact-form-label">Your name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Hiring Manager"
                                        className="contact-form-input"
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="contact-form-group">
                                    <label className="contact-form-label">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="contact-form-input"
                                        required
                                    />
                                </Col>
                            </Row>

                            <div className="contact-form-group">
                                <label className="contact-form-label">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Opportunity / Frontend Role"
                                    className="contact-form-input"
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label className="contact-form-label">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about the role, team, or opportunity..."
                                    className="contact-form-textarea"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending message...' : 'Send message ›'}
                            </button>

                            {status === 'success' && (
                                <div className="contact-success-msg">
                                    {statusMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="contact-error-msg">
                                    {statusMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;
