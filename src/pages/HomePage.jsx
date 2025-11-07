import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Users, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: Home, value: '10+', label: 'Projects Completed' },
    { icon: Users, value: '500+', label: 'Happy Families' },
    { icon: Leaf, value: '100%', label: 'Eco-Friendly Builds' },
  ];

  const featuredProjects = [
    {
      id: 1,
      name: 'Anekal Greens Phase 2',
      location: 'Anekal, Bangalore',
      price: '₹42 Lakhs Onwards',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['3 BHK Villas', 'Gated Community', 'Modern Amenities']
    },
    {
      id: 2,
      name: 'Villa Gardens',
      location: 'Jigani, Bangalore',
      price: '₹38 Lakhs Onwards',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['2 & 3 BHK', 'Landscaped Parks', '24/7 Security']
    },
    {
      id: 3,
      name: 'Sunrise Villas',
      location: 'Attibele, Bangalore',
      price: '₹45 Lakhs Onwards',
      image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Premium Finishes', 'Clubhouse', 'Swimming Pool']
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Anekal Greens Resident',
      text: 'V5 Shelters made our dream of owning a villa a reality. The quality of construction and attention to detail is exceptional. We absolutely love our new home!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Villa Gardens Resident',
      text: 'The entire process was transparent and professional. From site selection to handover, the team was supportive and responsive. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Sunrise Villas Resident',
      text: 'Affordable pricing without compromising on quality. The location is perfect for families, and the community is wonderful. Thank you V5 Shelters!',
      rating: 5
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Affordable Row Villas in <span className="accent-gold">Bangalore's Heartland</span>
          </h1>
          <p className="hero-subtitle">Built for Tomorrow, Designed for Your Family</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              Explore Projects <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Discover our carefully crafted row villas designed for modern living
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-badge">Featured</div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-location">{project.location}</p>
                  <p className="project-price">{project.price}</p>
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary btn-full">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>What Our Clients Say</h2>
          <div className="testimonial-container">
            <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-content">
              <div className="testimonial-stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <h4 className="testimonial-name">{testimonials[currentTestimonial].name}</h4>
              <p className="testimonial-location">{testimonials[currentTestimonial].location}</p>
            </div>
            <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Find Your Dream Home?</h2>
          <p className="cta-text">
            Connect with us today to explore our upcoming projects and find the perfect villa for your family.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn-primary">View All Projects</Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;