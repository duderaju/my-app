import React from "react";
import "./ProfileView.css";

const ProfileView = ({ profile }) => {
  return (
    <div className="profile-view">
      <div className="banner-image">
        <img src={profile.bannerImage} alt="Banner" />
      </div>
      <div className="profile-card">
        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-email">{profile.email}</p>
          <p className="profile-description">{profile.description}</p>
          <div className="profile-details">
            <div className="profile-detail">
              <p className="detail-label">Languages:</p>
              <p className="detail-content">{profile.languages.join(", ")}</p>
            </div>
            <div className="profile-detail">
              <p className="detail-label">Education:</p>
              <p className="detail-content">{profile.education}</p>
            </div>
            <div className="profile-detail">
              <p className="detail-label">Specialization:</p>
              <p className="detail-content">{profile.specialization}</p>
            </div>
          </div>
          <div className="social-media-links">
            {profile.socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
