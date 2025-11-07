import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            We're here to help you find your perfect home
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              {submitted && (
                <div className="success-message">
                  <p>✓ Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="project">Project Interest</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                  >
                    <option value="">Select a project</option>
                    <option value="anekal-greens">Anekal Greens Phase 2</option>
                    <option value="villa-gardens">Villa Gardens</option>
                    <option value="sunrise-villas">Sunrise Villas</option>
                    <option value="green-valley">Green Valley Residences</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-container">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Reach out to us through any of these channels
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Office Address</h3>
                    <p>
                      #501, Terrace Floor, Shiv Kailash Apartment,<br />
                      9th Main Road, Near Shiv Kutir Apartments,<br />
                      CM Layout, HSR Layout Extension,<br />
                      Yellukunte, Bengaluru 560068
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:sales@v5shelters.com">sales@v5shelters.com</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <p>+91-XXXXXXX</p>
                    <p className="info-hours">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <h2 className="section-title">Find Us on the Map</h2>
          <div className="map-wrapper">
            <iframe
              title="V5 Shelters Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4726743745974!2d77.6385799!3d12.8934515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzM2LjQiTiA3N8KwMzgnMTguOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;