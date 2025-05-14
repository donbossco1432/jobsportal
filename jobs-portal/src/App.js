import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { FaWhatsapp, FaBriefcase } from 'react-icons/fa';

function WhatsAppModal({ show, onClose, onSubmit, context, error, setUserNumber, userNumber }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [show]);
  return show ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-md transform scale-100 animate-modal-pop relative border border-indigo-100">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold">&times;</button>
        <h3 className="text-2xl font-bold text-indigo-700 mb-2 text-center">Enter Your WhatsApp Number</h3>
        <div className="text-center text-gray-500 mb-4 text-base">{context}</div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            ref={inputRef}
            type="tel"
            placeholder="e.g. +919999999999"
            value={userNumber}
            onChange={e => setUserNumber(e.target.value)}
            className="border border-indigo-200 bg-indigo-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg shadow-sm"
            maxLength={15}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition text-lg shadow-lg">
            <FaWhatsapp className="text-xl" /> Start WhatsApp Chat
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us', isContact: true },
  ];
  const location = window.location.pathname;
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-bl border-b border-indigo-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-indigo-700 tracking-tight">
          <FaBriefcase className="text-indigo-500" /> AbroadJobsFinder
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 bg-indigo-50 rounded-full px-2 py-1 shadow-inner border border-indigo-100">
          {navLinks.map(link => link.isContact ? (
            <button
              key={link.to}
              onClick={() => onContactClick('General Inquiry')}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-indigo-100 shadow-lg px-4 py-2 flex flex-col gap-2 animate-fade-in">
          {navLinks.map(link => link.isContact ? (
            <button
              key={link.to}
              onClick={() => { setMenuOpen(false); onContactClick('General Inquiry'); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 
                ${location === link.to ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function Home({ onContactClick }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden px-2 sm:px-4">
      {/* Abstract SVG background blob */}
      <svg className="absolute -top-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] opacity-30 blur-2xl -z-10" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1_2)">
          <ellipse cx="300" cy="300" rx="300" ry="200" fill="url(#paint0_radial_1_2)" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300 200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A5B4FC" stopOpacity="0.7" />
          </radialGradient>
          <filter id="filter0_f_1_2" x="-100" y="-100" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] opacity-20 blur-2xl -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter1_f_1_3)">
          <ellipse cx="200" cy="200" rx="200" ry="120" fill="url(#paint1_radial_1_3)" />
        </g>
        <defs>
          <radialGradient id="paint1_radial_1_3" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200 120)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0.7" />
          </radialGradient>
          <filter id="filter1_f_1_3" x="-100" y="-100" width="600" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-800 mb-6 md:mb-8 drop-shadow animate-slide-down text-center">Welcome to <span className="bg-gradient-to-r from-indigo-500 to-blue-400 text-transparent bg-clip-text">AbroadJobsFinder</span></h1>
      <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-md md:max-w-none md:flex-row md:gap-8 items-center justify-center">
        <Link to="/jobs" className="flex items-center gap-3 w-full md:w-auto justify-center px-6 py-4 md:px-14 md:py-6 text-lg md:text-2xl font-bold rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <FaBriefcase className="text-2xl md:text-3xl" /> Abroad Jobs
        </Link>
        <button onClick={() => onContactClick('General Inquiry')} className="flex items-center gap-3 w-full md:w-auto justify-center px-6 py-4 md:px-14 md:py-6 text-lg md:text-2xl font-bold rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <FaWhatsapp className="text-2xl md:text-3xl" /> Contact Us
        </button>
      </div>
    </div>
  );
}

const jobsList = [
  {
    id: 'russia-warehouse-helper',
    title: 'Warehouse Helper',
    country: 'Russia',
    emoji: '🇷🇺',
    details: [
      '12 Months work permit (renewable)',
      'Salary: 60,000 to 70,000 + OT Extra',
      'Accommodation + One Time Meal Company Provided',
    ],
    eligibility: [
      'Age limit - 38',
      '10th pass',
      'Passport',
      '35x45 White Background Digital Photo',
      'Medical Reports- HIV, HB, TB (Only For Dr. Lal Path Lab)',
      'Submit cheque for security',
      'Agreement',
    ],
    benefits: [
      'Pay fees After visa',
      'Get visa in just 40 working Days',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './job-russia.jpg',
  },
  {
    id: 'poland-tile-fixer',
    title: 'General Worker cum Tile Fixer',
    country: 'Poland',
    emoji: '🇵🇱',
    details: [
      '20 Vacancies Available',
      'Salary: 25-35 Zloty/hour (₹510-₹715/hour)',
      '2-Year Work Permit',
      'Accommodation & Transportation Provided',
    ],
    eligibility: [
      'Basic tiling experience required',
      'Selection based on CV',
      'Valid Passport',
      'Work Experience Certificate',
      'Medical Reports',
    ],
    benefits: [
      'Long-term work opportunities',
      'Competitive salary',
      'Company provided accommodation',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image2.jpg',
  },
  {
    id: 'poland-welding',
    title: 'Welding & Fabrication Roles',
    country: 'Poland',
    emoji: '🇵🇱',
    details: [
      'Multiple Positions Available:',
      'MIG/MAG Welder: 30-34 Zloty/hour (₹610-₹690)',
      'TIG/ARC Welder: 32-36 Zloty/hour (₹655-₹740)',
      'Pipe Fitter & Fabricator: 30-35 Zloty/hour (₹610-₹715)',
      'Structural Fitter & Fabricator: 30-35 Zloty/hour (₹610-₹715)',
    ],
    eligibility: [
      'Minimum 5 years experience',
      'Testing videos & qualification certificates mandatory',
      'Isometric drawing knowledge (for Fabricators)',
      'Valid Passport',
      'Work Experience Certificate',
    ],
    benefits: [
      '8-10 hrs/day + OT',
      '5 days work week + OT',
      'Company provided accommodation & transport',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image3.jpg',
  },
  {
    id: 'poland-scaffolder',
    title: 'Scaffolder',
    country: 'Poland',
    emoji: '🇵🇱',
    details: [
      '10 Vacancies Available',
      'Salary: 25-30 Zloty/hour (₹510-₹610/hour)',
      'Accommodation & Transportation Provided',
    ],
    eligibility: [
      '5-8 years experience mandatory',
      'Scaffolding certificate required',
      'Work video submission required',
      'Valid Passport',
      'Medical Reports',
    ],
    benefits: [
      'International exposure',
      'Company provided accommodation',
      'Long-term opportunities',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image4.jpg',
  },
  {
    id: 'poland-sandblaster',
    title: 'Sand Blaster / Spray Painter',
    country: 'Poland',
    emoji: '🇵🇱',
    details: [
      'Salary: 30-35 Zloty/hour (₹610-₹715/hour)',
      'Accommodation & Transport Provided',
      'Processing Time: Up to 6 months',
    ],
    eligibility: [
      'Shipyard experience required',
      'Valid Passport',
      'Work Experience Certificate',
      'Medical Reports',
    ],
    benefits: [
      'Telephonic interview',
      'CV Selection ongoing',
      'Skilled trade job in Europe',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image5.jpg',
  },
  {
    id: 'croatia-beer-packaging',
    title: 'Beer Packaging & Bottling Operator',
    country: 'Croatia',
    emoji: '🇭🇷',
    details: [
      'Salary: €1300-€1400/month (₹1,17,000-₹1,26,000/month)',
      'Work Hours: 08:00 am – 04:00 pm',
      '5 days/week + OT',
      '8 hours/day + OT',
    ],
    eligibility: [
      'Age: Up to 55 years',
      'Warehouse or production field experience',
      'Valid Passport',
      'Medical Reports',
    ],
    benefits: [
      'Accommodation Provided',
      'Overtime available',
      'Suitable for couples',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image6.jpg',
  },
  {
    id: 'germany-skilled-roles',
    title: 'Skilled & General Roles',
    country: 'Germany',
    emoji: '🇩🇪',
    details: [
      '50+ Vacancies Available',
      'Salary: €2400-€2900/month (₹2,15,000-₹2,60,000/month)',
      'Multiple Positions:',
      '- Gastronomy Worker',
      '- Logistic & Warehouse Worker',
      '- Construction Helper',
      '- General Worker',
      '- Skilled TPO Roofing Welders',
      '- Skilled False Ceiling Workers',
      '- Piping Engineer',
      '- Taxi Drivers',
      '- Welders',
      '- Gypsum Plaster Workers',
    ],
    eligibility: [
      'Degree/Diploma preferred',
      'Age below 40 preferred',
      'Freshers can apply',
      'Valid Passport',
      'Medical Reports',
    ],
    benefits: [
      'TRC/PR eligible',
      'Family reunion possible',
      'Quick processing',
      'Long-term opportunities',
    ],
    b2b: 'Service charges -- ****CONTACT US****',
    image: './image7.jpg',
  },
];

function Jobs({ onConnectClick }) {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center py-12 px-2">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-white -z-10 animate-fade-in"></div>
      {jobsList.map(job => (
        <div key={job.id} className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 items-center max-w-4xl w-full border border-blue-100 hover:shadow-indigo-200 transition-all duration-300 animate-slide-up mb-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={job.image} 
              alt={job.title} 
              className="rounded-2xl w-full max-w-lg border-4 border-indigo-100 shadow-lg hover:shadow-indigo-300 transition duration-300"
              onError={(e) => {
                console.error(`Failed to load image: ${job.image}`);
                e.target.src = './placeholder.jpg';
              }}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-extrabold mb-3 text-indigo-700 flex items-center gap-2"><FaBriefcase className="text-indigo-500" /> {job.title}</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-lg space-y-1">
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Documents & Eligibility criteria</div>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-base space-y-1">
              {job.eligibility.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Benefits</div>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-base space-y-1">
              {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mb-2 font-semibold text-indigo-600">Best Deal For B2B</div>
            <div className="mb-4 text-gray-700">{job.b2b}</div>
            <button onClick={() => onConnectClick(`${job.emoji} ${job.title} - ${job.country}`)} className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:bg-green-700 transition text-lg">
              <FaWhatsapp className="text-2xl" /> Contact Us
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-3xl mx-auto border border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-700">AbroadJobsFinder is dedicated to connecting job seekers with the best opportunities abroad. We provide transparent, reliable, and fast services to help you achieve your career dreams. Our mission is to make overseas employment accessible and hassle-free for everyone.</p>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContext, setModalContext] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [error, setError] = useState('');

  const handleOpenModal = (context) => {
    setModalContext(context);
    setShowModal(true);
    setUserNumber('');
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserNumber('');
    setError('');
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!userNumber.match(/^\+?\d{10,15}$/)) {
      setError('Please enter a valid WhatsApp number (10-15 digits, with country code)');
      return;
    }
    // Compose WhatsApp message
    let message = `Hi, my WhatsApp number is ${userNumber}`;
    if (modalContext && modalContext !== 'General Inquiry') {
      message = `Hi, I am interested in ${modalContext}. My WhatsApp number is ${userNumber}`;
    }
    const waLink = `https://wa.me/918143282116?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    handleCloseModal();
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white">
        <Navbar onContactClick={handleOpenModal} />
        <WhatsAppModal
          show={showModal}
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
          context={modalContext}
          error={error}
          setUserNumber={setUserNumber}
          userNumber={userNumber}
        />
        <Routes>
          <Route path="/" element={<Home onContactClick={handleOpenModal} />} />
          <Route path="/jobs" element={<Jobs onConnectClick={handleOpenModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home onContactClick={handleOpenModal} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
