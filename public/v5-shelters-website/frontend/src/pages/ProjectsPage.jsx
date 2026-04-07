import React, { useState } from 'react';
import { MapPin, Home, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [activeGallery, setActiveGallery] = useState({});

  const projects = [
    {
      id: 1,
      name: 'Anekal Greens Phase 2',
      location: 'Anekal, Bangalore',
      status: 'upcoming',
      price: '₹42 Lakhs Onwards',
      features: ['3 BHK Row Villas', 'Gated Community', 'Clubhouse', 'Children\'s Play Area'],
      gallery: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1758396765677-b7c98d15046b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGNvbW11bml0eXxlbnwwfHx8fDE3NjI0OTY2ODN8MA&ixlib=rb-4.1.0&q=85',
        'https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
      ]
    },
    {
      id: 2,
      name: 'Villa Gardens',
      location: 'Jigani, Bangalore',
      status: 'ongoing',
      price: '₹38 Lakhs Onwards',
      features: ['2 & 3 BHK Villas', 'Landscaped Parks', '24/7 Security', 'Power Backup'],
      gallery: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1738686743225-ef5fd33d8c45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxyZXNpZGVudGlhbCUyMHRvd25zaGlwfGVufDB8fHx8MTc2MjQ5NjY4OHww&ixlib=rb-4.1.0&q=85',
        'https://images.pexels.com/photos/3274652/pexels-photo-3274652.jpeg',
        'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg'
      ]
    },
    {
      id: 3,
      name: 'Sunrise Villas',
      location: 'Attibele, Bangalore',
      status: 'upcoming',
      price: '₹45 Lakhs Onwards',
      features: ['Premium 3 BHK', 'Swimming Pool', 'Gym & Clubhouse', 'Jogging Track'],
      gallery: [
        'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjI0OTY3MDF8MA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1640147643312-37cb730bf289?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxyZXNpZGVudGlhbCUyMHRvd25zaGlwfGVufDB8fHx8MTc2MjQ5NjY4OHww&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1759150594926-69079830088f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb3clMjB2aWxsYXN8ZW58MHx8fHwxNzYyNDk2Njc1fDA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1606989254570-02aa0d7ea083?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjByb3clMjB2aWxsYXN8ZW58MHx8fHwxNzYyNDk2Njc1fDA&ixlib=rb-4.1.0&q=85'
      ]
    },
    {
      id: 4,
      name: 'Green Valley Residences',
      location: 'Anekal Main Road',
      status: 'ongoing',
      price: '₹40 Lakhs Onwards',
      features: ['2 BHK & 3 BHK', 'Eco-Friendly Design', 'Rainwater Harvesting', 'Solar Panels'],
      gallery: [
        'https://images.unsplash.com/photo-1699212012286-4df61c5dd041?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByb3clMjB2aWxsYXN8ZW58MHx8fHwxNzYyNDk2Njc1fDA&ixlib=rb-4.1.0&q=85',
        'https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg'
      ]
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  const nextImage = (projectId, galleryLength) => {
    setActiveGallery(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % galleryLength
    }));
  };

  const prevImage = (projectId, galleryLength) => {
    setActiveGallery(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + galleryLength) % galleryLength
    }));
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Discover Our Projects</h1>
          <p className="projects-hero-subtitle">
            Explore our pipeline of quality row villas across Bangalore
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`filter-btn ${filter === 'ongoing' ? 'active' : ''}`}
              onClick={() => setFilter('ongoing')}
            >
              Ongoing
            </button>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="section projects-list-section">
        <div className="container">
          {filteredProjects.map((project) => {
            const currentImageIndex = activeGallery[project.id] || 0;
            return (
              <div key={project.id} className="project-detail-card">
                <div className="project-gallery">
                  <div className="gallery-main-image">
                    <img
                      src={project.gallery[currentImageIndex]}
                      alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    />
                    {project.gallery.length > 1 && (
                      <>
                        <button
                          className="gallery-nav gallery-prev"
                          onClick={() => prevImage(project.id, project.gallery.length)}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          className="gallery-nav gallery-next"
                          onClick={() => nextImage(project.id, project.gallery.length)}
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                    <div className="gallery-counter">
                      {currentImageIndex + 1} / {project.gallery.length}
                    </div>
                  </div>
                  <div className="gallery-thumbnails">
                    {project.gallery.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${project.name} thumbnail ${idx + 1}`}
                        className={idx === currentImageIndex ? 'active' : ''}
                        onClick={() => setActiveGallery({ ...activeGallery, [project.id]: idx })}
                      />
                    ))}
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-status-badge" data-status={project.status}>
                    {project.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
                  </div>
                  <h2 className="project-detail-name">{project.name}</h2>
                  <div className="project-meta">
                    <div className="meta-item">
                      <MapPin size={18} />
                      <span>{project.location}</span>
                    </div>
                    <div className="meta-item">
                      <DollarSign size={18} />
                      <span>{project.price}</span>
                    </div>
                  </div>
                  <div className="project-features-section">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <Home size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/contact" className="btn-primary btn-enquire">
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;