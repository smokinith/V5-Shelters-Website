import React from 'react';
import { Download, FileArchive, Check } from 'lucide-react';
import '../styles/DownloadPage.css';

const DownloadPage = () => {
  const features = [
    'All 5 pages (Home, About, Why V5, Projects, Contact)',
    'Complete styling with CSS files',
    'Header and Footer components',
    'High-quality property images',
    'Responsive design for all devices',
    'React components and routing setup',
  ];

  return (
    <div className="download-page">
      <div className="download-container">
        <div className="download-card">
          <div className="download-icon">
            <FileArchive size={64} />
          </div>
          
          <h1>V5 Shelters Website Package</h1>
          <p className="download-subtitle">
            Your complete real estate website is ready!
          </p>

          <div className="file-details">
            <div className="detail-item">
              <span className="detail-label">File Size:</span>
              <span className="detail-value">283 KB</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Format:</span>
              <span className="detail-value">ZIP Archive</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">/app/v5-shelters-website.zip</span>
            </div>
          </div>

          <div className="features-list">
            <h3>Package Includes:</h3>
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <Check size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="download-instructions">
            <h3>How to Download:</h3>
            <div className="instruction-steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>If you have SSH/Terminal access to this server, use:</p>
                <code>scp user@host:/app/v5-shelters-website.zip ~/Downloads/</code>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Or use Emergent's file manager to download from:</p>
                <code>/app/v5-shelters-website.zip</code>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>After extracting, install dependencies and run:</p>
                <code>cd frontend && yarn install && yarn start</code>
              </div>
            </div>
          </div>

          <div className="support-note">
            <p>💡 Need help? Contact your Emergent workspace administrator for file access.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
