import React from 'react';
import { DollarSign, MapPin, Leaf, Palette, FileCheck, Users, Award, Shield } from 'lucide-react';
import '../styles/WhyUsPage.css';

const WhyUsPage = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Quality row villas starting under ₹50 lakhs, making homeownership accessible without compromise on quality or amenities.'
    },
    {
      icon: MapPin,
      title: 'Prime Locations in Anekal',
      description: 'Strategic locations near major IT corridors, schools, hospitals, and well-connected to Bangalore city with excellent infrastructure.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Eco-friendly construction using sustainable materials, energy-efficient designs, and green spaces for a healthier living environment.'
    },
    {
      icon: Palette,
      title: 'Customizable Designs',
      description: 'Flexible floor plans and design options to suit your family\'s needs, with expert architects guiding you through the process.'
    },
    {
      icon: FileCheck,
      title: 'Transparent Process',
      description: 'Complete transparency in pricing, timelines, and documentation. No hidden costs or surprises, just honest communication.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with 15+ years in real estate, architecture, and construction ensuring quality at every step.'
    },
    {
      icon: Award,
      title: 'Award-Winning Projects',
      description: 'Recognized for excellence in affordable housing, with multiple awards for quality construction and customer satisfaction.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks, premium materials, and adherence to safety standards ensuring your investment is secure and lasting.'
    },
  ];

  const comparisonData = [
    {
      feature: 'Starting Price',
      v5: 'Under ₹50L',
      others: 'Over ₹70L',
      highlight: true
    },
    {
      feature: 'Location',
      v5: 'Prime Anekal, Near IT Hubs',
      others: 'Far from city centers'
    },
    {
      feature: 'Customization',
      v5: 'Flexible floor plans',
      others: 'Limited options',
      highlight: true
    },
    {
      feature: 'Transparency',
      v5: 'Complete & Clear',
      others: 'Hidden charges',
      highlight: true
    },
    {
      feature: 'Handover Time',
      v5: '18-24 months',
      others: '3-4 years'
    },
    {
      feature: 'Quality Materials',
      v5: 'Premium & Sustainable',
      others: 'Standard grade',
      highlight: true
    },
    {
      feature: 'Customer Support',
      v5: '24/7 Dedicated team',
      others: 'Limited availability'
    },
    {
      feature: 'Amenities',
      v5: 'Clubhouse, Parks, Security',
      others: 'Basic facilities'
    },
  ];

  return (
    <div className="why-us-page">
      {/* Hero Section */}
      <section className="why-hero">
        <div className="why-hero-overlay"></div>
        <div className="why-hero-content">
          <h1 className="why-hero-title">Why Choose V5 Shelters?</h1>
          <p className="why-hero-subtitle">
            Experience the difference of quality, affordability, and transparency
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            Discover the advantages that make V5 Shelters the preferred choice for families
          </p>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card card">
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">V5 Shelters vs Others</h2>
          <p className="section-subtitle">
            See how we stack up against the competition
          </p>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="v5-column">V5 Shelters</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={row.highlight ? 'highlight-row' : ''}>
                    <td className="feature-name">{row.feature}</td>
                    <td className="v5-value">{row.v5}</td>
                    <td className="others-value">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-cta-section">
        <div className="container">
          <h2 className="why-cta-title">Ready to Experience the V5 Difference?</h2>
          <p className="why-cta-text">
            Join 500+ families who've made V5 Shelters their home
          </p>
          <div className="why-cta-buttons">
            <a href="/projects" className="btn-primary">Explore Projects</a>
            <a href="/contact" className="btn-secondary">Schedule a Visit</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;