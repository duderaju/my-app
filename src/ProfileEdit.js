import React, { useState } from 'react';
import './ProfileEdit.css';
 
const ProfileEdit = ({ profile, onSave }) => {
  const [formData, setFormData] = useState(profile);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
 
  return (
<form className="profile-edit" onSubmit={handleSubmit}>
<div className="form-group">
<label>Banner Image URL:</label>
<input
          type="text"
          name="bannerImage"
          value={formData.bannerImage}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Name:</label>
<input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Email:</label>
<input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Description:</label>
<input
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Languages (comma-separated):</label>
<input
          type="text"
          name="languages"
          value={formData.languages.join(', ')}
          onChange={(e) => setFormData({ ...formData, languages: e.target.value.split(', ') })}
        />
</div>
<div className="form-group">
<label>Education:</label>
<input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Specialization:</label>
<input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
</div>
<div className="form-group">
<label>Social Media Links (JSON format):</label>
<textarea
          name="socialMediaLinks"
          value={JSON.stringify(formData.socialMediaLinks, null, 2)}
          onChange={(e) => setFormData({ ...formData, socialMediaLinks: JSON.parse(e.target.value) })}
        />
</div>
<button type="submit">Save</button>
</form>
  );
};
 
export default ProfileEdit;