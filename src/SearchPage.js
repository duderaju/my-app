import React, { useState } from "react";
import "./SearchPage.css";

const SearchPage = ({ profiles }) => {
  const [filters, setFilters] = useState({
    language: "",
    education: "",
    specialization: "",
  });
  const [searchText, setSearchText] = useState("");

  // Handle changes in filter inputs
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(), // Convert to lowercase for case-insensitive matching
    }));
  };

  // Handle changes in text search input
  const handleTextSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase()); // Convert to lowercase for case-insensitive matching
  };

  // Filter profiles based on search text and filters
  const filteredProfiles = profiles.filter((profile) => {
    const matchesLanguage = filters.language
      ? profile.languages.some((lang) =>
          lang.toLowerCase().includes(filters.language)
        )
      : true;
    const matchesEducation = filters.education
      ? profile.education.toLowerCase().includes(filters.education)
      : true;
    const matchesSpecialization = filters.specialization
      ? profile.specialization.toLowerCase().includes(filters.specialization)
      : true;
    const matchesText = searchText
      ? profile.name.toLowerCase().includes(searchText) ||
        profile.description.toLowerCase().includes(searchText)
      : true;

    return (
      matchesLanguage &&
      matchesEducation &&
      matchesSpecialization &&
      matchesText
    );
  });

  return (
    <div className="search-page">
      <div className="search-filters">
        <input
          type="text"
          name="language"
          placeholder="Filter by language"
          value={filters.language}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="education"
          placeholder="Filter by education"
          value={filters.education}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="specialization"
          placeholder="Filter by specialization"
          value={filters.specialization}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Search by text"
          value={searchText}
          onChange={handleTextSearchChange}
        />
      </div>
      <div className="profile-list">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div key={profile.id} className="profile-item">
              <h2>{profile.name}</h2>
              <img
                src={profile.bannerImage}
                alt={profile.name}
                className="profile-banner"
              />
              <p>{profile.description}</p>
              <p>
                <strong>Languages:</strong> {profile.languages.join(", ")}
              </p>
              <p>
                <strong>Education:</strong> {profile.education}
              </p>
              <p>
                <strong>Specialization:</strong> {profile.specialization}
              </p>
              <div>
                {profile.socialMediaLinks.map((link) => (
                  <a
                    key={link.platform}
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
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
