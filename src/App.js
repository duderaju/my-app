import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileView from './ProfileView';
import ProfileEdit from './ProfileEdit';
import SearchPage from './SearchPage';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      bannerImage: require('./Banner.jpg'),
      name: 'DUDE RAJU',
      email: 'duderaju1310@gmail.com',
      description: 'Content Creator specializing in tech reviews.',
      languages: ['English', 'Hindi'],
      education: 'Bachelor’s in Technology',
      specialization: 'Civil  Engineering',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/dude-raju-194863205/' },
        { platform: 'GitHuB', url: 'https://github.com/duderaju' },
      ],
    },
    {
      id: 2,
      bannerImage: require('./Banner1.jpg'),
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      description: 'Digital artist with a focus on concept art and character design.',
      languages: ['English', 'Spanish'],
      education: 'Bachelor’s in Fine Arts',
      specialization: 'Digital Art and Animation',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/alicesmithart' },
        { platform: 'Behance', url: 'https://behance.net/alicesmith' },
      ],
    },
    {
      id: 3,
      bannerImage: 'https://via.placeholder.com/1200x300/99cc99/000000',
      name: 'Raj Patel',
      email: 'raj.patel@example.com',
      description: 'Tech reviewer and influencer specializing in gadgets and software.',
      languages: ['English', 'Hindi'],
      education: 'Master’s in Information Technology',
      specialization: 'Tech Reviews and Tutorials',
      socialMediaLinks: [
        { platform: 'YouTube', url: 'https://youtube.com/user/rajtechreviews' },
        { platform: 'Twitter', url: 'https://twitter.com/rajpateltech' },
      ],
    },
    {
      id: 4,
      bannerImage: 'https://via.placeholder.com/1200x300/9999ff/000000',
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      description: 'Fitness trainer and nutritionist offering workout plans and healthy eating tips.',
      languages: ['English', 'French'],
      education: 'Certified Personal Trainer',
      specialization: 'Fitness and Nutrition',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/emilyfit' },
        { platform: 'Facebook', url: 'https://facebook.com/emilyjohnsonfit' },
      ],
    },
    {
      id: 5,
      bannerImage: 'https://via.placeholder.com/1200x300/ffcc99/000000',
      name: 'Sophia Lee',
      email: 'sophia.lee@example.com',
      description: 'Fashion blogger and stylist with a passion for sustainable fashion.',
      languages: ['English', 'Korean'],
      education: 'Bachelor’s in Fashion Design',
      specialization: 'Fashion and Styling',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/sophiafashion' },
        { platform: 'Pinterest', url: 'https://pinterest.com/sophialee' },
      ],
    },
    {
      id: 6,
      bannerImage: 'https://via.placeholder.com/1200x300/cccccc/000000',
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      description: 'Travel photographer capturing landscapes and cultures around the world.',
      languages: ['English', 'Italian'],
      education: 'Bachelor’s in Photography',
      specialization: 'Travel Photography',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/liamtravels' },
        { platform: 'Linkedin', url: 'https://linkedin.com/liam_brown' },
      ],
    },
    {
      id: 7,
      bannerImage: 'https://via.placeholder.com/1200x300/66ccff/000000',
      name: 'Olivia Wilson',
      email: 'olivia.wilson@example.com',
      description: 'Yoga instructor and wellness coach promoting holistic health.',
      languages: ['English', 'Spanish'],
      education: 'Certified Yoga Instructor',
      specialization: 'Yoga and Holistic Health',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/olivia.yoga' },
        { platform: 'Facebook', url: 'https://facebook.com/oliviawilsonyoga' },
      ],
    },
    {
      id: 8,
      bannerImage: 'https://via.placeholder.com/1200x300/ffcc66/000000',
      name: 'James Taylor',
      email: 'james.taylor@example.com',
      description: 'Freelance graphic designer specializing in brand identity and web design.',
      languages: ['English', 'German'],
      education: 'Bachelor’s in Graphic Design',
      specialization: 'Brand Identity and Web Design',
      socialMediaLinks: [
        { platform: 'Behance', url: 'https://behance.net/jamestaylor' },
        { platform: 'Dribbble', url: 'https://dribbble.com/jamestaylor' },
      ],
    },
    {
      id: 9,
      bannerImage: 'https://via.placeholder.com/1200x300/ff9999/000000',
      name: 'Isabella Davis',
      email: 'isabella.davis@example.com',
      description: 'Lifestyle blogger and influencer focusing on travel and adventure.',
      languages: ['English', 'Portuguese'],
      education: 'Bachelor’s in Journalism',
      specialization: 'Travel Blogging and Social Media',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/isabellatravels' },
        { platform: 'Twitter', url: 'https://twitter.com/isabelladavis' },
      ],
    },
    {
      id: 10,
      bannerImage: 'https://via.placeholder.com/1200x300/cc9966/000000',
      name: 'Michael Harris',
      email: 'michael.harris@example.com',
      description: 'Podcast host discussing tech trends and startup culture.',
      languages: ['English', 'Japanese'],
      education: 'Master’s in Business Administration',
      specialization: 'Tech Trends and Startup Culture',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/michaelharris' },
        { platform: 'Twitter', url: 'https://twitter.com/michaelharris' },
      ],
    },
    {
      id: 11,
      bannerImage: 'https://via.placeholder.com/1200x300/66cccc/000000',
      name: 'Emma Thompson',
      email: 'emma.thompson@example.com',
      description: 'Interior designer specializing in modern and minimalist spaces.',
      languages: ['English', 'French'],
      education: 'Bachelor’s in Interior Design',
      specialization: 'Modern and Minimalist Design',
      socialMediaLinks: [
        { platform: 'Pinterest', url: 'https://pinterest.com/emmathompson' },
        { platform: 'Instagram', url: 'https://instagram.com/emmathompsondesigns' },
      ],
    },
    {
      id: 12,
      bannerImage: 'https://via.placeholder.com/1200x300/ff6666/000000',
      name: 'David Martinez',
      email: 'david.martinez@example.com',
      description: 'Cinematographer and video editor specializing in documentary filmmaking.',
      languages: ['English', 'Spanish'],
      education: 'Bachelor’s in Film Production',
      specialization: 'Documentary Filmmaking',
      socialMediaLinks: [
        { platform: 'YouTube', url: 'https://youtube.com/user/davidmartinezfilms' },
        { platform: 'Vimeo', url: 'https://vimeo.com/davidmartinez' },
      ],
    },
    {
      id: 13,
      bannerImage: 'https://via.placeholder.com/1200x300/cc9999/000000',
      name: 'Grace Miller',
      email: 'grace.miller@example.com',
      description: 'Fashion designer focused on eco-friendly and sustainable clothing.',
      languages: ['English', 'Italian'],
      education: 'Bachelor’s in Fashion Design',
      specialization: 'Sustainable Fashion',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/gracemillerdesigns' },
        { platform: 'Pinterest', url: 'https://pinterest.com/gracemillerfashion' },
      ],
    },
    {
      id: 14,
      bannerImage: 'https://via.placeholder.com/1200x300/669999/000000',
      name: 'Robert Williams',
      email: 'robert.williams@example.com',
      description: 'Music producer and sound engineer working with indie artists.',
      languages: ['English', 'German'],
      education: 'Bachelor’s in Music Production',
      specialization: 'Music Production and Sound Engineering',
      socialMediaLinks: [
        { platform: 'SoundCloud', url: 'https://soundcloud.com/robertwilliams' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/robertwilliams' },
      ],
    },
    {
      id: 15,
      bannerImage: 'https://via.placeholder.com/1200x300/ffcccc/000000',
      name: 'Hannah Garcia',
      email: 'hannah.garcia@example.com',
      description: 'Freelance writer specializing in travel and lifestyle content.',
      languages: ['English', 'Spanish'],
      education: 'Bachelor’s in Journalism',
      specialization: 'Travel and Lifestyle Writing',
      socialMediaLinks: [
        { platform: 'Medium', url: 'https://medium.com/@hannahgarcia' },
        { platform: 'Twitter', url: 'https://twitter.com/hannahgarcia' },
      ],
    },
    {
      id: 16,
      bannerImage: 'https://via.placeholder.com/1200x300/cc9966/000000',
      name: 'Jack Moore',
      email: 'jack.moore@example.com',
      description: 'Digital marketer with a focus on SEO and content strategy.',
      languages: ['English', 'French'],
      education: 'Bachelor’s in Marketing',
      specialization: 'SEO and Content Strategy',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/jackmoore' },
        { platform: 'Twitter', url: 'https://twitter.com/jackmoore' },
      ],
    },
    {
      id: 17,
      bannerImage: 'https://via.placeholder.com/1200x300/66ccff/000000',
      name: 'Chloe Lewis',
      email: 'chloe.lewis@example.com',
      description: 'Graphic designer specializing in branding and packaging design.',
      languages: ['English', 'German'],
      education: 'Bachelor’s in Graphic Design',
      specialization: 'Branding and Packaging Design',
      socialMediaLinks: [
        { platform: 'Behance', url: 'https://behance.net/chloelewis' },
        { platform: 'Dribbble', url: 'https://dribbble.com/chloelewis' },
      ],
    },
    {
      id: 18,
      bannerImage: 'https://via.placeholder.com/1200x300/669999/000000',
      name: 'Daniel Robinson',
      email: 'daniel.robinson@example.com',
      description: 'Product manager with experience in SaaS and mobile applications.',
      languages: ['English', 'Spanish'],
      education: 'Master’s in Business Administration',
      specialization: 'Product Management',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/danielrobinson' },
        { platform: 'Twitter', url: 'https://twitter.com/danielrobinson' },
      ],
    },
    {
      id: 19,
      bannerImage: 'https://via.placeholder.com/1200x300/cc9966/000000',
      name: 'Zoe White',
      email: 'zoe.white@example.com',
      description: 'Web developer focused on front-end technologies and UX design.',
      languages: ['English', 'French'],
      education: 'Bachelor’s in Computer Science',
      specialization: 'Front-End Development and UX Design',
      socialMediaLinks: [
        { platform: 'GitHub', url: 'https://github.com/zoewhite' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/zoewhite' },
      ],
    },
    {
      id: 20,
      bannerImage: 'https://via.placeholder.com/1200x300/ff6666/000000',
      name: 'Lucas Clark',
      email: 'lucas.clark@example.com',
      description: 'Entrepreneur and startup mentor with a focus on fintech.',
      languages: ['English', 'German'],
      education: 'Master’s in Business Administration',
      specialization: 'Entrepreneurship and Fintech',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/lucasclark' },
        { platform: 'Twitter', url: 'https://twitter.com/lucasclark' },
      ],
    },
    {
      id: 21,
      bannerImage: 'https://via.placeholder.com/1200x300/ff9966/000000',
      name: 'Grace Hall',
      email: 'grace.hall@example.com',
      description: 'Content strategist and social media manager for small businesses.',
      languages: ['English', 'Spanish'],
      education: 'Bachelor’s in Marketing',
      specialization: 'Content Strategy and Social Media',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/gracehall' },
        { platform: 'Instagram', url: 'https://instagram.com/gracehall' },
      ],
    },
    {
      id: 22,
      bannerImage: 'https://via.placeholder.com/1200x300/cc99cc/000000',
      name: 'James King',
      email: 'james.king@example.com',
      description: 'Financial analyst with a focus on investments and portfolio management.',
      languages: ['English', 'French'],
      education: 'Bachelor’s in Finance',
      specialization: 'Investments and Portfolio Management',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/jamesking' },
        { platform: 'Twitter', url: 'https://twitter.com/jamesking' },
      ],
    },
    {
      id: 23,
      bannerImage: 'https://via.placeholder.com/1200x300/66cccc/000000',
      name: 'Lily Martinez',
      email: 'lily.martinez@example.com',
      description: 'Lifestyle coach helping individuals achieve work-life balance.',
      languages: ['English', 'Spanish'],
      education: 'Certified Life Coach',
      specialization: 'Work-Life Balance and Personal Development',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/lilymartinez' },
        { platform: 'Instagram', url: 'https://instagram.com/lilymartinez' },
      ],
    },
    {
      id: 24,
      bannerImage: 'https://via.placeholder.com/1200x300/99ccff/000000',
      name: 'Ethan Wright',
      email: 'ethan.wright@example.com',
      description: 'Software engineer with a focus on blockchain technology.',
      languages: ['English', 'German'],
      education: 'Bachelor’s in Computer Science',
      specialization: 'Blockchain Development',
      socialMediaLinks: [
        { platform: 'GitHub', url: 'https://github.com/ethanwright' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ethanwright' },
      ],
    },
    {
      id: 25,
      bannerImage: 'https://via.placeholder.com/1200x300/ffcc66/000000',
      name: 'Ella Scott',
      email: 'ella.scott@example.com',
      description: 'Health and wellness coach focusing on nutrition and fitness.',
      languages: ['English', 'French'],
      education: 'Certified Nutritionist',
      specialization: 'Nutrition and Fitness Coaching',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/ellascott' },
        { platform: 'Facebook', url: 'https://facebook.com/ellascott' },
      ],
    },
    {
      id: 26,
      bannerImage: 'https://via.placeholder.com/1200x300/ff9999/000000',
      name: 'Joshua Hernandez',
      email: 'joshua.hernandez@example.com',
      description: 'Marketing consultant with expertise in digital advertising and SEO.',
      languages: ['English', 'Spanish'],
      education: 'Bachelor’s in Marketing',
      specialization: 'Digital Advertising and SEO',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/joshuahernandez' },
        { platform: 'Twitter', url: 'https://twitter.com/joshuahernandez' },
      ],
    },
    {
      id: 27,
      bannerImage: 'https://via.placeholder.com/1200x300/cc9999/000000',
      name: 'Ava Brown',
      email: 'ava.brown@example.com',
      description: 'Fashion influencer and stylist with a focus on luxury fashion.',
      languages: ['English', 'Italian'],
      education: 'Bachelor’s in Fashion Design',
      specialization: 'Luxury Fashion and Styling',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/avabrown' },
        { platform: 'Pinterest', url: 'https://pinterest.com/avabrown' },
      ],
    },
    {
      id: 28,
      bannerImage: 'https://via.placeholder.com/1200x300/cc66ff/000000',
      name: 'Mia Davis',
      email: 'mia.davis@example.com',
      description: 'UX designer specializing in user research and wireframing.',
      languages: ['English', 'German'],
      education: 'Bachelor’s in Graphic Design',
      specialization: 'UX Design and User Research',
      socialMediaLinks: [
        { platform: 'Dribbble', url: 'https://dribbble.com/miadavis' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/miadavis' },
      ],
    },
    {
      id: 29,
      bannerImage: 'https://via.placeholder.com/1200x300/6699cc/000000',
      name: 'Henry Lewis',
      email: 'henry.lewis@example.com',
      description: 'Tech entrepreneur focused on AI and machine learning startups.',
      languages: ['English', 'French'],
      education: 'Master’s in Computer Science',
      specialization: 'AI and Machine Learning',
      socialMediaLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/henrylewis' },
        { platform: 'Twitter', url: 'https://twitter.com/henrylewis' },
      ],
    },
    {
      id: 30,
      bannerImage: 'https://via.placeholder.com/1200x300/ffcc66/000000',
      name: 'Victoria Adams',
      email: 'victoria.adams@example.com',
      description: 'Event planner specializing in weddings and corporate events.',
      languages: ['English', 'Italian'],
      education: 'Certified Event Planner',
      specialization: 'Weddings and Corporate Events',
      socialMediaLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/victoriaadams' },
        { platform: 'Facebook', url: 'https://facebook.com/victoriaadams' },
      ],
    },
  ],

  );

  const handleSave = (updatedProfile) => {
    setProfiles(profiles.map(profile => profile.id === updatedProfile.id ? updatedProfile : profile));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Profile View</Link>
          <Link to="/edit">Profile Edit</Link>
          <Link to="/search">Search Page</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ProfileView profile={profiles[0]} />} // Just displaying the first profile for view
          />
          <Route
            path="/edit"
            element={<ProfileEdit profile={profiles[0]} onSave={handleSave} />} // Editing the first profile
          />
          <Route
            path="/search"
            element={<SearchPage profiles={profiles} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
